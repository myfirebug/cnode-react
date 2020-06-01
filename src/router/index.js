/*
 * @Author: hejp
 * @Date:   11:00
 * @Last Modified by:   hejp
 * @Last Modified time: 11:00
 */
import React, {
    lazy,
    Suspense
} from 'react'
import {
    HashRouter,
    Route,
    Switch,
    Redirect
} from 'react-router-dom'
import ErrorBoundary from '../components/errorBoundary'
import PrivateRoute from '../components/PrivateRoute'

const routerList = [
    {
        private: false,
        component: lazy(() => import(/*webpackChunkName:"home"*/'../page/home')),
        pathname: '/home'
    },
    {
        private: false,
        component: lazy(() => import(/*webpackChunkName:"details"*/'../page/details')),
        pathname: '/details'
    },
    {
        private: false,
        component: lazy(() => import(/*webpackChunkName:"my"*/'../page/my')),
        pathname: '/my'
    },
    {
        private: false,
        component: lazy(() => import(/*webpackChunkName:"my"*/'../page/login')),
        pathname: '/login'
    },
    {
        private: false,
        component: lazy(() => import(/*webpackChunkName:"myList"*/'../page/my-list')),
        pathname: '/my-list'
    },
    {
        private: true,
        component: lazy(() => import(/*webpackChunkName:"collect"*/'../page/collect')),
        pathname: '/collect'
    },
    {
        private: true,
        component: lazy(() => import(/*webpackChunkName:"message"*/'../page/message')),
        pathname: '/message'
    }
]
const Routers = () => {
    return (
        <HashRouter>
            <ErrorBoundary>
                <Suspense fallback={<div>loading</div>}>
                    <Switch>
                        {
                            routerList.map((router, index) => {
                                if (router.private) {
                                    return <PrivateRoute
                                        key={index}
                                        path={ router.pathname }
                                        component={ router.component }
                                    />
                                } else {
                                    return <Route
                                        key={index}
                                        path={ router.pathname }
                                        component={ router.component } />
                                }
                            })
                        }
                        <Redirect to='/home' />
                    </Switch>
                </Suspense>
            </ErrorBoundary>
        </HashRouter>
    )
}

export default Routers
