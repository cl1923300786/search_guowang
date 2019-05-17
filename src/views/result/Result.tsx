import React, { useState, useEffect, useCallback } from 'react'
import { requestFn } from '../../utils/request'
import { useDispatch, IState, useMappedState } from '../../store/Store'
import { Dispatch } from 'redux'
import Actions from '../../store/Actions'
import styles from './Result.module.less'
import SearchItem from '../../components/results/SearchItem'
import { defaultSearchResults } from '../../config/Constant'
import { API_URL } from '../../config/Constant'

const pageParams = decodeURIComponent(window.location.search.replace('?', '').split('=')[1])

const Result = () => {
  const [query, setQuery] = useState(pageParams)
  const state: IState = useMappedState(useCallback((globalState: IState) => globalState, []))
  const dispatch: Dispatch<Actions> = useDispatch()
  const [loading, setLoading] = useState(true)
  const [results, setResults] = useState<any[]>([])

  useEffect(() => {
    getSearchResult(pageParams)
  }, [])

  /**
   * 输入框变化监听
   */
  const handleInputChnage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value)
  }

  /**
   * 点击搜索按钮
   */
  const handleSearch = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    getSearchResult(query)
  }

  const getSearchResult = async (q: string) => {
    setLoading(true)
    const { res } = await requestFn(dispatch, state, {
      url: '/search/queryStd',
      api: API_URL,
      method: 'get',
      params: {
        q: q
      }
    })
    console.log('getSearchResult',res.data)
    if (res && res.status === 200 && res.data) {
      handleSearchResults2(res.data.result.hits)
    } else {
      console.log('search error')
      handleSearchResults(defaultSearchResults)
    }
    setLoading(false)
  }

/**
   * 处理搜索结果（添加title和content）
   */
  const handleSearchResults2 = (data: any[]) => {
    const newResults = data.map((item: any,i:number) => {
      var title=''
      var publish_time=''
      var describe=''
      for(var key in item.doc){
          if (key.indexOf("title")!=-1){
            var temp_title= item.highlight[key]? item.highlight[key]: item.doc[key]
            console.log('handleSearchResults21',key,temp_title)
            title+= temp_title!=null? temp_title:'' + " ------ "
          }
          if (key.indexOf("publish_time")!=-1 || key.indexOf("create_time" || key.indexOf("issus_time"))!=-1){
            publish_time= item.highlight[key]? item.highlight[key]: item.doc[key]
          }
          if (key.indexOf("abs")!=-1 || key.indexOf("describe")!=-1){
            describe= item.highlight[key]? item.highlight[key]: item.doc[key]
          } 
  　　}
  // console.log('handleSearchResults2',title,publish_time,describe)
     return {
      key: i,
      title: formatData(title),
      publish_time: publish_time,
      content:  formatData(describe)
    }
   
    })
    setResults(newResults)
  }


  const formatData = (data:any)=>{
    return (data && data!=null)?data.replace('...', '').replace(/\'/g, '"'):""
  }

  /**
   * 处理搜索结果（添加title和content）
   */
  const handleSearchResults = (data: any[]) => {
    const newResults = data.map((i: any) => {
      const usedStd = i.highlight.used_std
        ? `${JSON.parse(i.highlight.used_std.replace('...', '').replace(/\'/g, '"'))[0].cygx} ${
            JSON.parse(i.highlight.used_std.replace('...', '').replace(/\'/g, '"'))[0].bcybz
          } `
        : ''
      return {
        ...i,
        title: `${i.highlight.std_org} ${usedStd}`,
        content: hanldeResultContent(i)
      }
    })
    setResults(newResults)
  }

  /**
   * 处理搜索结果的contnet
   */
  const hanldeResultContent = (item: any) => {
    const zhTitle = item.doc.zh_title + ' '
    const issueDate = item.doc.issus_date + ' '
    const usedStd = item.highlight.used_std
      ? `${JSON.parse(item.highlight.used_std.replace('...', '').replace(/\'/g, '"'))[0].cygx} ${
          JSON.parse(item.highlight.used_std.replace('...', '').replace(/\'/g, '"'))[0].bcybz
        } `
      : ''
    const issueOrg = item.highlight.issue_org ? `${item.highlight.issue_org} ` : ''
    const issuer = item.highlight.issuer ? `${item.highlight.issuer} ` : ''
    return `${zhTitle}${issueDate}${usedStd}${issueOrg}${issuer}`
  }

  /**
   * 重置表单
   */
  const resetForm = () => {
    setQuery('')
    getSearchResult('')
  }

  /**
   * 渲染搜索时的加载指示器
   */
  const renderLoadingComponent = () => {
    if (loading) {
      return <div className={styles.loading}>正在搜索中...</div>
    } else {
      return <></>
    }
  }

  /**
   * 在页面上渲染搜索结果
   */
  const renderSearchResults = () => {
    if (loading) {
      return <></>
    } else {
      return results.map((i: any) => {
        return <SearchItem key={i._id} title={i.title} content={i.content} />
      })
    }
  }

  return (
    <div>
      <div className={styles.searchContainer}>
        <form method="GET" action="/result" role="search" onSubmit={handleSearch}>
          <div className={styles.groupContainer}>
            <input
              type="search"
              name="q"
              placeholder="搜索..."
              autoComplete="off"
              value={query}
              className={styles.searchInput}
              onChange={handleInputChnage}
              maxLength={32}
            />
            <div className={`${query ? styles.delete : styles.hidden}`} onClick={resetForm}>
              x
            </div>
            <span className={styles.inputGroupButton}>
              <button className={styles.searchButton} itemType="submit" />
            </span>
          </div>
        </form>
      </div>
      <div className={styles.searchResult}>
        {renderLoadingComponent()}
        {renderSearchResults()}
      </div>
    </div>
  )
}

export default Result
