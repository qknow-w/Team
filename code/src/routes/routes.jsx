import React from 'react'
import {Route, IndexRoute, Link} from 'react-router'
import App from "../containers/App"
import Team from "../containers/Team"
import ContactUs from "../containers/ContactUs"
import Home from "../containers/Home"


//路由控制

const routes = (
    <Route path="/" component={App}>
        <IndexRoute component={Home}/>
        <Route path="Team" component={Team}/>
        <Route path="Contactus" component={ContactUs}/>
    </Route>
)

export default routes
