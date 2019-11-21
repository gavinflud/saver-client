import React from "react";
import Flatpickr from "react-flatpickr";
import "./date-picker-view.css";

/**
 * Date picker view.
 *
 * @param {Object} props Properties passed by the calling component
 */
const DatePicker = props => {
  const options = {
    enableTime: false,
    dateFormat: "d F Y"
  };
  return (
    <div className="gf-widget gf-date-picker">
      <Flatpickr
        value={props.date}
        options={options}
        onChange={props.handleDateChange}
      />
    </div>
  );
};

export default DatePicker;
