import React, {Component} from 'react';
import PrivateRoute from './components/PrivateRoute'
import {Route,Switch} from 'react-router-dom'
import QuerySubway from './routes/QuerySubway'
import QueryResults from './routes/QuerySubway/queryResults'
import Login from './routes/Login/index'
import Index from './routes/Index/index'
import './App.css'
import './assets/font/iconfont.css'


class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path='/' component={QuerySubway}/>
        <Route  path="/queryResults" component={QueryResults} />
				<Route path="/querySubway" component={QuerySubway} />
        <Route path='/login' component={Login}/>
        <PrivateRoute path='/home' component={Index}/>
      </Switch>
    )
  }
}

export default App;
