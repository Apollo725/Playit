import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom' 
import { Homepage } from './container';
import { OnBoardingArtist } from './container/OnBoardingArtist';

const RouteConfig = () => {
    const rootComponent = <Redirect to={  '/homepage' } />
    return(
    <BrowserRouter>
        <Switch>
            <Route exact path='/' render={ () => rootComponent }  />
            <Route path='/homepage' component={ Homepage } />
            <Route path='/onboardingartist' component={ OnBoardingArtist } />
        </Switch>
    </BrowserRouter>
    )
}

export default RouteConfig;