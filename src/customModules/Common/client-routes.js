// Add all routes information here - staticPaths, routePaths, routingActions, routingHelpers and more....
// import { push, goBack } from 'connected-react-router';
import { push, goBack } from 'react-router-redux';

export const StaticRoutePaths = {
    LOGIN: '/login',
    REGISTRATION: '/sing-up',
    HOME: '/',
    ABOUT_US: '/about-us',
    SUPPORT: '/support',
    HELP: '/help',
    CONTACT_US: '/contact-us'
};

export const RoutePaths = Object.freeze({
    LOGIN: () => StaticRoutePaths.LOGIN,
    REGISTRATION: () => StaticRoutePaths.REGISTRATION,
    HOME: () => StaticRoutePaths.HOME,
    ABOUT_US: () => StaticRoutePaths.ABOUT_US,
    SUPPORT: () => StaticRoutePaths.SUPPORT,
    HELP: () => StaticRoutePaths.HELP,
    CONTACT_US: () => StaticRoutePaths.CONTACT_US
});

export const RoutingActions = Object.freeze({
    toHome: () => push(RoutePaths.HOME()),
    toAboutUs: () => push(RoutePaths.ABOUT_US()),
    toSupport: () => push(RoutePaths.SUPPORT()),
    toHelp: () => push(RoutePaths.HELP()),
    toContactUs: () => push(RoutePaths.CONTACT_US())
});

export const ROUTER_ROUTE_CHANGE = '@@router/LOCATION_CHANGE';

export const RoutingHelpers = {
    checkIsRouterChange: action => action.type === ROUTER_ROUTE_CHANGE,
};