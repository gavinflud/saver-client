import React from "react";
import DatePicker from "./date-picker-view";

/**
 * Container for the date picker view.
 */
class DatePickerContainer extends React.Component {
  /**
   * Calls the handler function with the first element of the array after changing.
   */
  handleDateChange = array => {
    this.props.handleDateChange(array[0]);
  };

  /**
   * Render the view.
   */
  render() {
    return (
      <DatePicker
        date={this.props.date}
        handleDateChange={this.handleDateChange}
      />
    );
  }
}

export default DatePickerContainer;
