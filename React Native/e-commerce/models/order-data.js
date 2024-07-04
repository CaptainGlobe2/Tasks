import moment from 'moment'

// moment is a popular JavaScript library used for parsing, validating, manipulating, and formatting dates and times in JavaScript. It provides a straightforward way to work with dates and times, offering functionalities like:

// Parsing and Formatting: Convert dates between different formats and parse dates from strings.

// Manipulation: Add or subtract time units (days, months, years, etc.) to/from dates.

// Displaying: Format dates for display in various languages and styles.

// Comparing: Compare dates to determine their relative order (before, after, or equal).

// Localization: Support for displaying dates in different time zones and languages.

// Duration: Calculate the difference between two dates in various time units (days, hours, etc.).

class Order {
  constructor(id, items, totalAmount, date) {
    this.id = id
    this.items = items
    this.totalAmount = totalAmount
    this.date = date
  }

  get readableDate() {
    return moment(this.date).format('MMMM Do YYYY, hh:mm')
  }
}

export default Order
