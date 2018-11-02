// Add all routes information here - staticPaths, routePaths, routingActions, routingHelpers and more....

export const staticRoutePaths = {};

export const RoutePaths = Object.freeze({});

export const RoutingActions = Object.freeze({});

export const ROUTER_ROUTE_CHANGE = '@@router/LOCATION_CHANGE';

export const RoutingHelpers = {
    checkIsRouterChange: action => action.type === ROUTER_ROUTE_CHANGE,
};