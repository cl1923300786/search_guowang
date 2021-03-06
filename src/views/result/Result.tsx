import React, { useState, useEffect, useCallback } from 'react'
import { notification } from 'antd'
import { requestFn } from '../../utils/request'
import { useDispatch, IState, useMappedState } from '../../store/Store'
import { Dispatch } from 'redux'
import Actions from '../../store/Actions'
import styles from './Result.module.less'
import SearchItem from '../../components/results/SearchItem'
import { defaultPageSize } from '../../config/Constant'
import PageNation from '../../components/pagenation/PageNation'
import logo from '../../assets/images/logo.png'

const defaultRequestParams = {
  q: decodeURIComponent(
    window.location.search
      .replace('?', '')
      .split('&')[0]
      .split('=')[1]
  ),
  page: parseInt(
    window.location.search
      .replace('?', '')
      .split('&')[1]
      .split('=')[1],
    10
  ),
  size: defaultPageSize
}

const Result = () => {
  const pageParams = decodeURIComponent(
    window.location.search
      .replace('?', '')
      .split('&')[0]
      .split('=')[1]
  )
  const [query, setQuery] = useState(pageParams)
  const state: IState = useMappedState(useCallback((globalState: IState) => globalState, []))
  const dispatch: Dispatch<Actions> = useDispatch()
  const [loading, setLoading] = useState(true)
  const [results, setResults] = useState<any[]>([])
  const [requestParams, setRequestParams] = useState(defaultRequestParams)
  const [hrefs, setHrefs] = useState<any[]>([])
  const [nextHref, setNextHref] = useState()
  const [previousHref, setPreviousHref] = useState()
  const [pages, setPages] = useState()

  useEffect(() => {
    getSearchResult(requestParams)
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
    console.log('handleSearch')
    event.preventDefault()
    const param = {
      q: decodeURIComponent(window.location.search.replace('?', '').split('=')[1]),
      page: 1,
      size: 10
    }
    setRequestParams(param)
    const param1 = {
      q: query,
      page: parseInt(
        window.location.search
          .replace('?', '')
          .split('&')[1]
          .split('=')[1],
        10
      ),
      size: 10
    }
    const pageNo = param1.page > 100 ? (param1.page = 100) : param1.page
    getSearchResult({ ...param1, page: pageNo })
    // window.location.href = `${window.location.origin}${window.location.pathname}?q=${query}&page=${1}&size=${
    //   defaultRequestParams.size
    // }`
  }

  /**
   * 获取搜索结果
   */
  const getSearchResult = async (param: any) => {
    console.log('getSearchResult', param)
    setLoading(true)
    const { res } = await requestFn(dispatch, state, {
      url: '/search/queryStd',
      params: {
        q: param.q,
        pageNo: param.page - 1,
        pageSize: param.size
      }
    })
    console.log('getSearchResult', res)
    if (res && res.status === 200 && res.data) {
      if (res.data.code === 0) {
        handleSearchResults2(res.data.result.hits)
        handlePageHrefs(res.data.result.totalHits)
        console.log('getSearchResult pages', Math.ceil(res.data.result.totalHits / param.size))
        // tslint:disable-next-line:prettier
        const page= Math.ceil(res.data.result.totalHits / param.size) >= 100 ? 100 : Math.ceil(res.data.result.totalHits / param.size)
        setPages(page)
        setNextHref(
          `${window.location.origin}${window.location.pathname}?q=${query}&page=${requestParams.page + 1}&size=${
            defaultRequestParams.size
          }`
        )
        setPreviousHref(
          `${window.location.origin}${window.location.pathname}?q=${query}&page=${requestParams.page - 1}&size=${
            defaultRequestParams.size
          }`
        )
      } else {
        errorTips('搜索错误', res.data.msg)
      }
    } else {
      errorTips('搜索错误')
      // handleSearchResults(defaultSearchResults)
    }
    setLoading(false)
  }

  /**
   * 获取所有分页的href
   */
  const handlePageHrefs = (total: number) => {
    const newHrefs = []
    const length = Math.ceil(total / defaultRequestParams.size)
    // tslint:disable-next-line:prefer-for-of
    console.log('handlePageHrefs', `${window.location.origin}${window.location.pathname}`)
    console.log(total, length)
    for (let i = 0; i < length && i < 100; i++) {
      newHrefs.push({
        key: i,
        href: `${window.location.origin}${window.location.pathname}?q=${query}&page=${i + 1}&size=${
          defaultRequestParams.size
        }`,
        number: i + 1
      })
    }
    setHrefs(newHrefs)
  }

  /**
   * 处理搜索结果（添加title和content）
   */
  const handleSearchResults2 = (data: any[]) => {
    const newResults = data.map((item: any, i: number) => {
      let title = ''
      let publishTime = ''
      let describe = ''
      for (const key of Object.keys(item.doc)) {
        if (key.indexOf('title') !== -1) {
          const tempTitle = item.highlight[key] ? item.highlight[key] : item.doc[key]
          title += tempTitle !== null ? tempTitle + addSpace() : ''
        }
        if (key.indexOf('publish_time') !== -1 || key.indexOf('create_time' || key.indexOf('issus_time')) !== -1) {
          publishTime = item.highlight[key] ? item.highlight[key] : item.doc[key]
        }
        if (key.indexOf('org') !== -1 || key.indexOf('no') !== -1) {
          describe += (item.highlight[key] ? item.highlight[key] : item.doc[key]) + addSpace()
        }
        if (key.indexOf('abs') !== -1 || key.indexOf('describe') !== -1) {
          describe += (item.highlight[key] ? item.highlight[key] : item.doc[key]) + addSpace()
        }
      }
      return {
        key: i,
        title: formatData(title),
        publish_time: formatData(publishTime),
        content: formatData(describe)
      }
    })
    setResults(newResults)
  }

  const addSpace = () => {
    return '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'
  }

  const formatData = (data: any) => {
    return data && data !== null
      ? data
          .replace('...', '')
          .replace(/'/g, '"')
          .replace(/null/g, '')
      : ''
  }

  /**
   * 重置表单
   */
  const resetForm = () => {
    window.location.href = `${window.location.origin}${window.location.pathname}?q=&page=${1}&size=${
      defaultRequestParams.size
    }`
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
      return results.map((i: any, index: number) => {
        return <SearchItem key={index} title={i.title} content={i.content} />
      })
    }
  }

  const errorTips = (message = '', description = '') => {
    notification.error({
      message,
      description
    })
  }

  /**
   * 渲染分页组件
   */
  const renderPageNation = () => {
    if (loading) {
      return <></>
    } else if (results.length > 0) {
      return (
        <PageNation
          currentIndex={requestParams.page}
          pageSize={pages}
          nextHref={nextHref}
          previousHref={previousHref}
          hrefs={hrefs}
        />
      )
    } else if (!query) {
      return <div className={styles.emptyWord}>请输入关键词后重试</div>
    } else if (query === defaultRequestParams.q) {
      return (
        <div className={styles.noResult}>
          <p>
            <span>很抱歉，没有找到与</span>
            <em>{query}</em>
            <span>相关的结果</span>
          </p>
          <div className={styles.tipsHead}>温馨提示:</div>
          <ul>
            <li>请检查您的输入是否正确</li>
          </ul>
        </div>
      )
    }
  }

  return (
    <div>
      <div className={styles.searchContainer}>
        <div className={styles.logoWrapper}>
          <a href={`${window.location.origin}`} title="Go to Search Home" className={styles.logoLink}>
            <img className={styles.logo} src={logo} alt="search logo" />
          </a>
        </div>
        <form method="GET" action="/" role="search" onSubmit={handleSearch}>
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
      {renderPageNation()}
    </div>
  )
}

export default Result
