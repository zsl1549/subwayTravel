import React from 'react'
import { withRouter, Switch, Redirect } from 'react-router-dom'
import LoadableComponent from '../../utils/LoadableComponent'
import PrivateRoute from '../PrivateRoute'

const Home = LoadableComponent(()=>import('../../routes/Home/index'))  //参数一定要是函数，否则不会懒加载，只会代码拆分

//基本组件Demo
const General = LoadableComponent(()=>import('../../routes/General/index'))

//导航组件Demo
const Navigation = LoadableComponent(()=>import('../../routes/Navigation/index'))

//输入组件Demo
const Entry = LoadableComponent(()=>import('../../routes/Entry/index'))

@withRouter
class ContentMain extends React.Component {
  render () {
    return (
      <div style={{padding: 16, position: 'relative'}}>
        <Switch>
          <PrivateRoute exact path='/home' component={Home}/>
          <PrivateRoute exact path='/home/general' component={General}/>
          <PrivateRoute exact path='/home/navigation' component={Navigation}/>
          <PrivateRoute exact path='/home/entry' component={Entry}/>
          <Redirect exact from='/' to='/home'/>
        </Switch>
      </div>
    )
  }
}

export default ContentMain