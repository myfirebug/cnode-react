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
import useHash from '../hook/useHash'

import ErrorBoundary from '../components/errorBoundary'
import Footer from '../components/footer'

const routerList = [
    {
        component: lazy(() => import(/*webpackChunkName:"home"*/'../page/home')),
        pathname: '/home'
    },
    {
        component: lazy(() => import(/*webpackChunkName:"details"*/'../page/details')),
        pathname: '/details'
    }
]
const Routers = () => {
    return (
        <HashRouter>
            <ErrorBoundary>
                <Suspense fallback={<div>{ useHash() }</div>}>
                    <Switch>
                        {
                            routerList.map((router, index) => {
                                return <Route
                                    key={index}
                                    path={ router.pathname }
                                    component={ router.component }>
                                </Route>
                            })
                        }
                        <Redirect to='/home' />
                    </Switch>
                    <Footer />
                </Suspense>
            </ErrorBoundary>
        </HashRouter>
    )
}

export default Routers
