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

  const renderPageButton = () => {
    let newHrefs = []
    if (
      props.currentIndex > defaultPageNationsInterval &&
      props.hrefs.length - props.currentIndex > defaultPageNationsLength - defaultPageNationsInterval
    ) {
      // @ts-ignore
      newHrefs = props.hrefs.filter((i: any, index: number) => {
        return (
          index < props.currentIndex + defaultPageNationsLength - defaultPageNationsInterval &&
          index >= props.currentIndex - defaultPageNationsInterval
        )
      })
    } else if (props.currentIndex < defaultPageNationsInterval && props.hrefs.length > defaultPageNationsLength) {
      // @ts-ignore
      newHrefs = props.hrefs.filter((i: any, index: number) => {
        return index < defaultPageNationsLength
      })
    } else {
      // @ts-ignore
      newHrefs = props.hrefs.filter((i: any, index: number) => {
        return index <= defaultPageNationsLength
      })
    }
    return newHrefs.map((i: any) => {
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
