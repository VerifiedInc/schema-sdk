/**
 * Enumerates the types of inputs that we use to collect data from users.
 * Used to determine the type of input to render in the UI for a given credential type.
 */
export enum InputType {
  Text = 'Text', // text input
  Number = 'Number', // number input
  Date = 'Date', // date input
  DateTime = 'DateTime', // date and time input
  Select = 'Select', // a dropdown of predefined options
  Email = 'Email', // email input
  Phone = 'Phone', // custom input for phone numbers
  SSN = 'SSN', // custom input for social security numbers
  Image = 'Image', // file input allowing only images
  File = 'File' // file input
}
