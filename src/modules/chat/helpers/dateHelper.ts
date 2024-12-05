/**
 * Formats the given timestamp to a more readable format.
 *
 * @helper
 * @example
 * // Example usage:
 * const date = formatDate(timestamp);
 *
 * @param {string} timestamp - The timestamp to be formatted.
 * @returns {string} The formatted date or time string.
 */
const formatDate = (timestamp: string): string => {
  const date = new Date(timestamp);
  const today = new Date();

  if (date.toDateString() === today.toDateString()) {
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  } else {
    return date.toLocaleDateString();
  }
};

/**
 * Formats the timestamp of a message into a human-readable time.
 * 
 * @helper
 * @example
 * // Example usage:
 * const date = getFormattedTime(date);
 * 
 * @param {Date} date - The timestamp of the message to be formatted.
 * @returns {string} The formatted time in 12-hour format (e.g., "10:30 AM").
 */
const getFormattedTime = (date: Date): string => {
  return date.toLocaleTimeString('es-SP', {
    hour: '2-digit',
    minute: '2-digit',
    hour12: true,
  });
};

export { formatDate, getFormattedTime };
