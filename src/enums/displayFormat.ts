/**
 * Enumerated display format values.
 * These serve as indicators of how the data ought to be displayed to the user
 */
export enum DisplayFormat {
  Date = 'Date', // a particular day
  DateTime = 'DateTime', // date with time of day
  String = 'String',
  Number = 'Number',
  PhoneNumber = 'Phone',
  SSN = 'SSN',
  Address = 'Address',
  CurrencyAmount = 'CurrencyAmount', // e.g. GBP 40000
  CurrencyRange = 'CurrencyRange', // e.g. USD min5000_max7500
  Boolean = 'Boolean',
  State = 'State', // e.g. TX
  Image = 'Image'
}
