import { useContext } from 'react';

/* Custom dependencies **/
import { GlobalContext, GlobalContextProps } from '../GlobalContext';

/**
 * Custom hook to use the global context.
 *
 * @hook
 * @example
 * // Example usage:
 * const { isScrollingDown, setIsScrollingDown } = useGlobalContext();
 *
 * @returns {GlobalContextProps} The global context value.
 * @throws {Error} If used outside of GlobalProvider.
 */
const useGlobalContext = (): GlobalContextProps => {
    const context = useContext(GlobalContext);
    if (!context) {
        throw new Error('useGlobalContext must be used within a GlobalProvider');
    }
    return context;
};

export { useGlobalContext };
