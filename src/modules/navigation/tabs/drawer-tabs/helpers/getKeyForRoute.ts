/**
 * Helper to map a route to its corresponding translation key.
 *
 * @helper
 * @example
 * const key = getKeyForRoute(route);
 *
 * @param {string | undefined} route - The current route name.
 * @returns {string} - The key for the translation.
 */
const getKeyForRoute = (route: string | undefined): string => {
  const routeToKeyMap: Record<string, string> = {
    ChatHome: 'chats',
    Home: 'chats',
    Chats: 'chats',
    Stories: 'stories',
    Community: 'communities',
    Calls: 'calls',
  };

  return route ? routeToKeyMap[route] || '' : '';
};

export { getKeyForRoute };
