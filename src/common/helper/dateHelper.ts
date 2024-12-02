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

export { formatDate };
