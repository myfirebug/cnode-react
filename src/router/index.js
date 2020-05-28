/*
 * @Author: hejp
 * @Date:   11:00
 * @Last Modified by:   hejp
 * @Last Modified time: 11:00
 */
import React, {
    lazy,
    Suspense,
    useState
} from 'react'
import {
    HashRouter,
    Route,
    Switch,
    Redirect
} from 'react-router-dom'
import useHash from '../hook/useHash'
import ErrorBoundary from '../components/errorBoundary'
import Footer from '../components/footer'
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
        private: true,
        component: lazy(() => import(/*webpackChunkName:"my"*/'../page/my')),
        pathname: '/my'
    },
    {
        private: false,
        component: lazy(() => import(/*webpackChunkName:"my"*/'../page/login')),
        pathname: '/login'
    }
]
const Routers = () => {
    const hash = useHash()
    return (
        <HashRouter>
            <ErrorBoundary>
                <Suspense fallback={<div></div>}>
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
                    {
                        hash.indexOf('/home') !== -1 ||
                        hash.indexOf('/my') !== -1 ?
                            <Footer hash={hash} /> : null
                    }

                </Suspense>
            </ErrorBoundary>
        </HashRouter>
    )
}

export default Routers
