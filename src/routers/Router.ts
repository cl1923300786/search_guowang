import loadable from '@loadable/component'

const Home = loadable(() => import('../views/home/Home'))
const Result = loadable(() => import('../views/result/Result'))

const routes = [
  {
    componet: Home,
    path: '/',
    exact: true,
    name: '首页'
  },
  {
    componet: Result,
    path: '/search',
    exact: true,
    name: '搜索结果'
  }
]

export default routes
