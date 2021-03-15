import React from 'react'
import { Provider } from 'react-redux'
import CssBaseline from '@material-ui/core/CssBaseline'
import { Container } from '@material-ui/core'
import { Route, BrowserRouter, Switch } from 'react-router-dom'

import Header from './components/Header'
import Footer from './components/Footer'
import TopicDrawer from './components/TopicDrawer'
import QuestionList from './components/QuestionList'
import LogIn from './components/Login'
import Register from './components/Register'
import { store } from './redux'
import AnswerList from './components/AnswerList'

function App () {
  const [open, setOpen] = React.useState(true)
  const handleDrawerOpen = () => {
    setOpen(true)
  }
  const handleDrawerClose = () => {
    setOpen(false)
  }

  return (
    <Provider store={store}>
      <BrowserRouter>
        <CssBaseline />
        <TopicDrawer open={open} handleDrawerClose={handleDrawerClose} />
        <Container maxWidth="lg">
          <Header drawerOpen={open} handleDrawerOpen={handleDrawerOpen} />
          <Switch>
            <Route path="/login" component={LogIn}/>
            <Route path="/register" component={Register}/>
            <Route path="/:topic/:questionId" component={AnswerList}/>
            <Route path="/:topic" component={QuestionList}/>
            <Route path="/" component={QuestionList}/>
          </Switch>
        </Container>
        <Footer />
      </BrowserRouter>
    </Provider>
  )
}

export default App
