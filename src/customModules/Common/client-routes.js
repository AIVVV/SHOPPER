// Add all routes information here - staticPaths, routePaths, routingActions, routingHelpers and more....
import { push, goBack } from 'connected-react-router';

export const staticRoutePaths = {
    HOME: '/',
    ABOUT_US: '/about-us',
    SUPPORT: '/support',
    HELP: '/help',
    CONTACT_US: '/contact-us'
};

export const RoutePaths = Object.freeze({
    HOME: () => staticRoutePaths.HOME,
    ABOUT_US: () => staticRoutePaths.ABOUT_US,
    SUPPORT: () => staticRoutePaths.SUPPORT,
    HELP: () => staticRoutePaths.HELP,
    CONTACT_US: () => staticRoutePaths.CONTACT_US
});

export const RoutingActions = Object.freeze({
    toHome: () => push(RoutePaths.HOME()),
    toAbooutUs: () => push(RoutePaths.ABOUT_US()),
    toSupport: () => push(RoutePaths.SUPPORT()),
    toHelp: () => push(RoutePaths.HELP()),
    toContactUs: () => push(RoutePaths.CONTACT_US())
});

export const ROUTER_ROUTE_CHANGE = '@@router/LOCATION_CHANGE';

export const RoutingHelpers = {
    checkIsRouterChange: action => action.type === ROUTER_ROUTE_CHANGE,
};