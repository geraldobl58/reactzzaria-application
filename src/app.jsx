import React, { lazy, Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';
import { LinearProgress } from '@material-ui/core';

const MainPage = lazy(() => import('pages/Main'))
const Login = lazy(() => import('pages/Login'))

function App() {
  return (
    <Suspense fallback={<LinearProgress />}>
      <Switch>
        <Route path='/login' component={Login} />
        <Route component={MainPage} />
      </Switch>
    </Suspense>
  )
}

export default App;
