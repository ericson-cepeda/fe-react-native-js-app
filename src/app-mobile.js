import React from 'react';
import { Provider } from 'react-redux';
import AppNavigation from './app/Navigation/AppNavigation';
import { setNavigator, setActiveRoute } from "./app/Redux/actions";
import NavTabs from './app/Navigation/NavTabs';

import { createStore } from 'redux';
import reducer from './app/Redux/reducers';


const getActiveRouteName = navigationState => {
    if (!navigationState) {
        return null;
    }
    const route = navigationState.routes[navigationState.index];
    // dive into nested navigators
    if (route.routes) {
        return getActiveRouteName(route);
    }
    return route.routeName;
};

export default function CircularIndeterminate() {
    const navigator = React.createRef();
    const store = createStore(reducer);

    React.useEffect(() => {
        store.dispatch(setNavigator(navigator.current));
    }, [])

    return (
        <Provider store={store}>
            <AppNavigation
                onNavigationStateChange={(prevState, currentState) => {
                    const currentScreen = getActiveRouteName(currentState);
                    store.dispatch(setActiveRoute(currentScreen));
                }}
                ref={navigator}
            />
            <NavTabs />
        </Provider>
    );
}
