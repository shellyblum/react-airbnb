import React from 'react';
import HomePage from './HomePage';
import Details from './Details';
import NoMatch from './NoMatch';
import Booking from './Booking';
import {
    HashRouter,
    Route,
    Switch,
    hashHistory
} from 'react-router-dom';

export default () => {

    return (
        <HashRouter baseName="airbnb" hashType="slash" history={hashHistory}>
            <div>
                <Switch>
                    <Route exact path="/" component={HomePage} />
                    <Route path="/details" component={Details} />
                    <Route path="/booking" component={Booking}></Route>
                    <Route component={NoMatch}></Route>
                </Switch>
            </div>
        </HashRouter>
    )
}
