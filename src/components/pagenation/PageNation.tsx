import React from 'react'
import styles from './PageNation.module.less'
import { defaultPageNationsInterval, defaultPageNationsLength } from '../../config/Constant'

const PageNation = (props: any) => {
  const renderPreviousButton = () => {
    if (props.currentIndex === 1) {
      return <></>
    } else {
      return (
        <a href={props.previousHref} className={`${styles.pageButton} ${styles.textButton}`}>
          &lt;&nbsp;上一页
        </a>
      )
    }
  }
  const renderNextButton = () => {
    if (props.currentIndex === props.pageSize) {
      return <></>
    } else {
      return (
        <a href={props.nextHref} className={`${styles.pageButton} ${styles.textButton}`}>
          下一页&nbsp;&gt;
        </a>
      )
    }
  }

  const renderHrefFilter = (index: number) => {
    if (
      props.hrefs.length <= defaultPageNationsLength ||
      (props.hrefs.length > defaultPageNationsLength && props.currentIndex < defaultPageNationsInterval)
    ) {
      return index < defaultPageNationsLength
      // props.currentIndex 大于6(defaultPageNationsInterval) 且剩余页数大于4(defaultPageNationsLength - defaultPageNationsInterval)
    } else if (props.hrefs.length - props.currentIndex > defaultPageNationsLength - defaultPageNationsInterval) {
      return (
        index < props.currentIndex + defaultPageNationsLength - defaultPageNationsInterval &&
        index >= props.currentIndex - defaultPageNationsInterval
      )
      // props.currentIndex 大于6(defaultPageNationsInterval) 且剩余页数小于等于4(defaultPageNationsLength - defaultPageNationsInterval)
    } else {
      return index >= props.hrefs.length - defaultPageNationsLength
    }
  }

  const renderPageButton = () => {
    // @ts-ignore
    const tmpHrefs = props.hrefs.filter((i: any, index: number) => renderHrefFilter(index))
    return tmpHrefs.map((i: any) => {
      return (
        <a
          key={i.key}
          {...(i.number === props.currentIndex ? {} : { href: i.href })}
          className={`${styles.pageButton} ${i.number === props.currentIndex ? styles.pageHighlight : ''}`}
        >
          {i.number}
        </a>
      )
    })
  }

  return (
    <div className={styles.pageNation}>
      {renderPreviousButton()}
      {renderPageButton()}
      {renderNextButton()}
    </div>
  )
}

export default PageNation
