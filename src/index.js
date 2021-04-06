import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import './index.css';
import App from './App';
import InstantFamilyTree from './Components/InstantFamilyTree'
import HomePage from './Components/HomePage'
import OralGenealogy from './Components/OralGenealogy'
import Memories from './Components/Memories'
import Tree from './Components/Tree'
import TeamMembers from './Components/TeamMembers'
import TeamMemberDetails from './Components/TeamMemberDetails'
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import reportWebVitals from './reportWebVitals';


console.log('environment=', process.env.NODE_ENV)

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Switch>
        <Route exact path="/start"><App /></Route>
        <Route exact path="/"><HomePage /></Route>
        <Route exact path="/team/:id"><TeamMemberDetails /></Route>
        <Route exact path="/team"><TeamMembers /></Route>
        <Route exact path="/instantTree"><InstantFamilyTree /></Route>
        <Route exact path="/oralGen"><OralGenealogy /></Route>
        <Route exact path="/memories"><Memories /></Route>
        <Route exact path="/tree"><Tree /></Route>
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
