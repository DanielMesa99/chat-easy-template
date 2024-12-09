/**
 * Object containing NativeWind classes for different themes (light and dark).
 * @property {string} bg - Background class for light and dark themes.
 * @property {string} on_bg - Text color class for light and dark themes.
 * @property {string} bg_primary - Primary container background class for light and dark themes.
 * @property {string} on_primary_bg - Primary container text color class for light and dark themes.
 * @property {string} bg_secondary - Secondary container background class for light and dark themes.
 * @property {string} on_secondary_bg - Secondary container text color class for light and dark themes.
 * @property {string} primary - Primary color class for light and dark themes.
 * @property {string} primary_full - Primary background class for light and dark themes.
 * @property {string} on_primary - Text color class for primary color in light and dark themes.
 * @property {string} secondary - Secondary color class for light and dark themes.
 * @property {string} secondary_full - Secondary background class for light and dark themes.
 * @property {string} on_secondary - Text color class for secondary color in light and dark themes.
 * @property {string} border_active - Border color class for active elements in light and dark themes.
 * @property {string} border_inactive - Border color class for inactive elements in light and dark themes.
 * @property {string} border_error - Border color class for error states in light and dark themes.
 * @property {string} error - Text color class for error states in light and dark themes.
 * @property {string} sub - Subtle text color class for light and dark themes.
 * @property {string} details - Details text color class for light and dark themes.
 */
const colorClass = {
  bg: 'bg-light-background dark:bg-dark-background',
  on_bg: 'text-light-onBackground dark:text-dark-onBackground',
  bg_primary: 'bg-light-primaryContainer dark:bg-dark-primaryContainer',
  on_primary_bg: 'color-light-onPrimaryContainer dark:color-dark-onPrimaryContainer',
  bg_secondary: 'bg-light-secondaryContainer dark:bg-dark-secondaryContainer',
  on_secondary_bg: 'color-light-onSecondaryContainer dark:color-dark-onSecondaryContainer',
  primary: 'color-light-primary dark:color-dark-primary',
  primary_full: 'bg-light-primary dark:bg-dark-primary',
  on_primary: 'color-light-onPrimary dark:color-dark-onPrimary',
  secondary: 'color-light-secondary dark:color-dark-secondary',
  secondary_full: 'bg-light-secondary dark:bg-dark-secondary',
  on_secondary: 'color-light-onSecondary dark:color-dark-onSecondary',
  border_active: 'border-light-primary dark:border-dark-primary',
  border_inactive: 'border-light-line dark:border-dark-line',
  border_error: 'border-light-error dark:border-dark-error',
  error: 'color-light-error dark:color-dark-error',
  sub: 'color-light-sub dark:color-dark-sub',
  details: 'text-light-details dark:text-dark-details',
  line: 'color-light-line dark:color-dark-line'
};

export { colorClass };
