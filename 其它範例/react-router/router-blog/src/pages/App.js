import React from 'react'

import BlogList from './BlogList'
import BlogArticle from './BlogArticle'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import ScrollToTop from '../component/ScrollToTop'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <Router>
        {/* 切換顯示的元件畫面放在這下面 */}
        {/* ScrollToTop是為了讓連到另一頁內容時，頁面回到最上方 */}
        <ScrollToTop>
          <Switch>
            <Route exact path="/" component={BlogList} />
            <Route path="/:id" component={BlogArticle} />
          </Switch>
        </ScrollToTop>
      </Router>
    )
  }
}

export default App
