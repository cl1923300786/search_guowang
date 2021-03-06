import React, { useState } from 'react'
import styles from './Home.module.less'
import { withRouter } from 'react-router-dom'
import { defaultPageSize } from '../../config/Constant'
import logo from '../../assets/images/logo.png'

const HomePage = (props: any) => {
  const [query, setQuery] = useState('')

  /**
   * 输入框变化监听
   */
  const handleInputChnage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value)
  }

  /**
   * 点击搜索
   */
  const handleSearch = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    props.history.push(`/search?q=${query}&page=${1}&size=${defaultPageSize}`)
  }

  /**
   * 重置表单
   */
  const resetForm = () => {
    setQuery('')
  }

  return (
    <form method="GET" action="/" role="search" className={styles.searchWrapper} onSubmit={handleSearch}>
      <img className={styles.searchLogo} src={logo} alt="search logo" />
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
  )
}

const Home = withRouter(HomePage)

export default Home
