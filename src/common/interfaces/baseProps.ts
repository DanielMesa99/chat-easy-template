import { TFunction } from 'i18next';

/** Custom dependencies **/
import { ColorScheme } from '../../configs';

/**
 * The general interface for the props of the components and screens.
 * This general interface defines the properties passed to the components, tabs navigator or screens including a TFunction for translations and colors scheme.
 *
 * @interface BaseProps
 */
interface BaseProps {
  t: TFunction<'translation', undefined>;
  themeColors?: ColorScheme
}

export { BaseProps };
