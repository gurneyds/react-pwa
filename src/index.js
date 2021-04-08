import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import './index.css';
import HomePage from './Components/HomePage'
import OralGenealogy from './Components/OralGenealogy'
import TeamMembers from './Components/TeamMembers'
import TeamMemberDetails from './Components/TeamMemberDetails'
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Switch>
        <Route exact path="/"><HomePage /></Route>
        <Route exact path="/team/:id"><TeamMemberDetails /></Route>
        <Route exact path="/team"><TeamMembers /></Route>
        <Route exact path="/oralGen"><OralGenealogy /></Route>
      </Switch>
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
