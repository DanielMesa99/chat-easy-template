import { TFunction } from 'i18next';

/**
 * The general interface for the props of the components and screens.
 * This general interface defines the properties passed to the components or screens including a TFunction for translations.
 *
 * @interface BaseProps
 */
interface BaseProps {
  t: TFunction<'translation', undefined>;
}

export { BaseProps };
