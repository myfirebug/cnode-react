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

const routerList = [
    {
        component: lazy(() => import(/*webpackChunkName:"home"*/'../page/home')),
        pathname: '/'
    }
]

const Routers = () => {
    return (
        <HashRouter>
            <ErrorBoundary>
                <Suspense fallback={<div>loading</div>}>
                <Switch>
                    {
                        routerList.map((router, index) => (
                            <Route
                                key={index}
                                path={ router.pathname }
                                component={ router.component }>
                            </Route>
                        ))
                    }
                    <Redirect to='/' />
                </Switch>
            </Suspense>
            </ErrorBoundary>
        </HashRouter>
    )
}

export default Routers
