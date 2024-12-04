import { NavigationState } from '@react-navigation/native';

/**
 * Retrieves the name of the active route from the navigation state.
 * It traverses the navigation state to find the deepest active route.
 * 
 * @helper
 * @example
 * const currentRoute = getActiveRouteName(navigationState);
 * 
 * @param {NavigationState | undefined} state - The navigation state object from React Navigation.
 * @returns {string | undefined} - The name of the deepest active route, or undefined if no route is found.
 */
const getActiveRouteName = (state: NavigationState | undefined): string | undefined => {
    let currentState = state;

    while (currentState?.routes) {
        const route = currentState.routes[currentState.index];
        if (!route.state) {
            return route.name;
        }
        currentState = route.state as NavigationState | undefined; // Traverse deeper into nested state
    }

    return undefined;
};

export { getActiveRouteName };
