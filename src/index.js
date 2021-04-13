import React, { Suspense, lazy } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import './index.css';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import reportWebVitals from './reportWebVitals';

const HomePage = lazy(() => import('./Components/HomePage'))
const OralGenealogy = lazy(() => import('./Components/OralGenealogy'))
const TeamMembers = lazy(() => import('./Components/TeamMembers'))
const TeamMemberDetails = lazy(() => import('./Components/TeamMemberDetails'))

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Switch>
          <Route exact path="/"><HomePage /></Route>
          <Route exact path="/team/:id"><TeamMemberDetails /></Route>
          <Route exact path="/team"><TeamMembers /></Route>
          <Route exact path="/oralGen"><OralGenealogy /></Route>
        </Switch>
      </Suspense>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.register();
// serviceWorkerRegistration.register({swFileName: 'service-worker-team.js', scope: './team'})

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
