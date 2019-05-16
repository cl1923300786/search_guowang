import React from 'react'
import styles from './SearchItem.module.less'

const SearchItem = (props: any) => {
  return (
    <div className={styles.itemContainer}>
      <p className={styles.title} dangerouslySetInnerHTML={{ __html: props.title }} />
      <div className={styles.content} dangerouslySetInnerHTML={{ __html: props.content }} />
    </div>
  )
}

export default SearchItem
