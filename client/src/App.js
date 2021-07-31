import React, { lazy, Suspense } from "react";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

const Friend = lazy(() => import('./components/Friend'))
const AddFriend = lazy(() => import('./components/AddFriend'))
const Edit = lazy(() => import('./components/Edit'))

function App() {
  return (
    <Router>
      <Suspense fallback={<p>loading....</p>}>
        <Switch>
          <Route exact path='/' component={Friend} />
          <Route exact path='/add' component={AddFriend} />
          <Route exact path='/edit/:id' component={Edit} />
        </Switch>
      </Suspense>
    </Router>
  );
}

export default App;
