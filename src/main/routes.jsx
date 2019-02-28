import React from 'react'
import {Router,Route,Redirect,hashHistory} from 'react-router'
import DashBoard from '../dashboard/dashboard'
import Sobre from '../sobre/sobre'


export default props =>(
    <Router history={hashHistory}>
        <Route path='/tarefas' component={DashBoard}/>
        <Route path='/about' component={Sobre}/>
        <Redirect from='*' to='/tarefas'/>
    </Router>

)