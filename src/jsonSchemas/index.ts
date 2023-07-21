import { TObject, TProperties } from '@sinclair/typebox';

/**
 * Interface to assist with typings of the UnumID schema definitions, which will always have $id defined.
 */
export interface UnumJsonSchema extends TObject<TProperties> {
  $id: string; // UnumID schema definitions will always have a valid $id property
}
