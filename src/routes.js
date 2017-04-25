import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Menu from './menu';
import One from './one';
import Two from './two';
import Three from './three';

const Status = ({ code, children }) => (
  <Route render={({ staticContext }) => {
    if (staticContext)
      staticContext.status = code
    return children
  }}/>
)
const NotFound = () => (
  <Status code={404}>
    <div>
      <h1>404 Not Found</h1>
    </div>
  </Status>
)

export default (
    <div>
        <Menu />
        <hr />
        <Switch>
            <Route exact path='/' component={One}></Route>
            <Route path='/one' component={One}></Route>
            <Route path='/two' component={Two}></Route>
            <Route path='/three' component={Three} ></Route>
            <Route component={NotFound}></Route>
        </Switch>
    </div>
)