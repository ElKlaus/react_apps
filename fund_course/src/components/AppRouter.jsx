import React from 'react'
import {BrowserRouter, Route, Link, Switch, Redirect} from "react-router-dom"
import About from '../pages/About'
import { Error } from '../pages/Error'
import Posts from '../pages/Post'
import { PostIdPage } from '../pages/PostIdPage'

export const AppRouter = () => {
  return (
    <Switch>
      <Route path="/about">
        <About/>
      </Route>
      <Route exact path="/posts">
        <Posts/>
      </Route>
      <Route exact path="/posts/:id">
        <PostIdPage/>
      </Route>
      <Route path="/error">
        <Error/>
      </Route>
      <Redirect to="/error"/>
    </Switch>
  )
}
