import React from 'react'
import { Route, IndexRoute } from 'react-router'

// import { 
//   ViewerQueries, 
//   NodeQueries,
// } from 'store/relay/queries'

// import {
//   prepareTagParams,
//   prepareAuthorParams
// } from 'store/relay/params'

import Home from './frontend/containers/Home'
import HomeBackend from './backend/containers/Home'
// import PostIndex from './frontend/containers/Post/Index'
// import PostShow from './frontend/containers/Post/Show'
// import ProjectIndex from './frontend/containers/Project/Index'
import App from './shared/containers/App'
import NotFound from './shared/containers/notFound'

// backend
import Login from './backend/containers/Author/Login'
import AuthorForm from './backend/containers/Author/Form'
// import PostIndexBackend from './backend/containers/Post/Index'
// import PostFormCreate from './backend/containers/Post/Form/create'
// import PostFormEdit from './backend/containers/Post/Form/edit'

import SellPostIndexBackend from './backend/containers/SellPost/Index'
import SellPostFormEdit from './backend/containers/SellPost/Form/edit'

import ServicePointIndexBackend from './backend/containers/ServicePoint/Index'
import ServicePointFormEdit from './backend/containers/ServicePoint/Form/edit'

import NewsPostIndexBackend from './backend/containers/NewsPost/Index'
import NewsPostFormEdit from './backend/containers/NewsPost/Form/edit'

import UserIndexBackend from './backend/containers/User/Index'

import * as authSelectors from 'store/selectors/auth'

// login for check login, may be put in other file
const checkAuth = (store) => {
  return (nextState, replace) => {    
    const loggedIn = authSelectors.isLogged(store.getState())   
    
    // Check if the path isn't dashboard. That way we can apply specific logic to    
    if(!loggedIn) {
      replace({
        pathname: '/login',
        state: { nextPathname: nextState.location.pathname }
      }) 
    }        
  }
}

// must specify queries for relay
export const Routes = (store) => (
  <Route path='/'>         
    <IndexRoute component={Home} />    
    {
    //   <Route path='/posts' component={PostIndex} queries={ViewerQueries} 
    //   prepareParams={prepareTagParams} />
    // <Route path='/posts/:id' component={PostShow} queries={ViewerQueries} />
    // <Route path="/projects" component={ProjectIndex} queries={ViewerQueries} 
    //   prepareParams={prepareTagParams} />
    }
    <Route path='/login' component={Login}/>

    <Route onEnter={checkAuth(store)} path='/admin' component={App}>
      <IndexRoute component={HomeBackend} />

      <Route path="author/edit" component={AuthorForm} 
        // queries={ViewerQueries} 
        // prepareParams={prepareAuthorParams(store)} 
      />


      <Route path="/admin/sellposts" component={SellPostIndexBackend} />
      <Route path="/admin/sellposts/new" component={SellPostFormEdit} />
      <Route path="/admin/sellposts/:id/edit" component={SellPostFormEdit} />

      <Route path="/admin/servicepoints" component={ServicePointIndexBackend} />
      <Route path="/admin/servicepoints/new" component={ServicePointFormEdit} />
      <Route path="/admin/servicepoints/:id/edit" component={ServicePointFormEdit} />

      <Route path="/admin/newsposts" component={NewsPostIndexBackend} />
      <Route path="/admin/newsposts/new" component={NewsPostFormEdit} />
      <Route path="/admin/newsposts/:id/edit" component={NewsPostFormEdit} />

      <Route path="/admin/users" component={UserIndexBackend} />
      
    </Route>
    
    <Route path='*' component={NotFound} />
  </Route>  
)

