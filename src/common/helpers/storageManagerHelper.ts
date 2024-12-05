import AsyncStorage from '@react-native-async-storage/async-storage';

/**
 * Helper module for handling storage, retrieval, and deletion of data in AsyncStorage.
 *
 * Provides a simple and reusable API for interacting with AsyncStorage efficiently.
 *
 * @module StorageHelper
 */

/**
 * Saves a value in AsyncStorage.
 *
 * If the value is not a string, it will be serialized to JSON before storing.
 *
 * @async
 * @param {string} key - The key under which the value will be stored.
 * @param {any} value - The value to store. If it's not a string, it will be converted to JSON.
 * @returns {Promise<void>} A promise that resolves when the value has been successfully saved.
 * @throws {Error} If an error occurs while saving the value.
 */
const saveItem = async (key: string, value: any): Promise<void> => {
  try {
    const valueToStore =
      typeof value === 'string' ? value : JSON.stringify(value);
    await AsyncStorage.setItem(key, valueToStore);
  } catch (error) {
    console.error(`Error saving to AsyncStorage with key "${key}": `, error);
    throw new Error(`Failed to save value to AsyncStorage: ${error}`);
  }
};

/**
 * Retrieves a value from AsyncStorage.
 *
 * If the stored value is a JSON string, it will be parsed and returned as an object.
 *
 * @async
 * @param {string} key - The key of the value to retrieve.
 * @returns {Promise<any | null>} A promise that resolves with the retrieved value (parsed from JSON if applicable) or `null` if the key does not exist.
 * @throws {Error} If an error occurs while retrieving the value.
 */
const getItem = async (key: string): Promise<any | null> => {
  try {
    const storedValue = await AsyncStorage.getItem(key);
    if (
      storedValue &&
      (storedValue.startsWith('{') || storedValue.startsWith('['))
    ) {
      return JSON.parse(storedValue);
    }
    return storedValue;
  } catch (error) {
    console.error(
      `Error retrieving from AsyncStorage with key "${key}": `,
      error,
    );
    throw new Error(`Failed to retrieve value from AsyncStorage: ${error}`);
  }
};

/**
 * Removes a value from AsyncStorage.
 *
 * @async
 * @param {string} key - The key of the value to remove.
 * @returns {Promise<void>} A promise that resolves when the value has been successfully removed.
 * @throws {Error} If an error occurs while removing the value.
 */
const removeItem = async (key: string): Promise<void> => {
  try {
    await AsyncStorage.removeItem(key);
  } catch (error) {
    console.error(
      `Error removing from AsyncStorage with key "${key}": `,
      error,
    );
    throw new Error(`Failed to remove value from AsyncStorage: ${error}`);
  }
};

/**
 * Clears all values stored in AsyncStorage.
 *
 * Use this with caution as it will remove all stored data.
 *
 * @async
 * @returns {Promise<void>} A promise that resolves when AsyncStorage has been successfully cleared.
 * @throws {Error} If an error occurs while clearing the storage.
 */
const clearStorage = async (): Promise<void> => {
  try {
    await AsyncStorage.clear();
  } catch (error) {
    console.error(`Error clearing AsyncStorage: `, error);
    throw new Error(`Failed to clear AsyncStorage: ${error}`);
  }
};

export { saveItem, getItem, removeItem, clearStorage };
