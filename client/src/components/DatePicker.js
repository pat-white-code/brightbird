import React from "react";
import { KeyboardDatePicker } from "@material-ui/pickers";
import moment from 'moment';

function DatePicker(props) {
  // const [selectedDate, handleDateChange] = useState(new Date());

  return (

      <KeyboardDatePicker
        clearable
        value={props.dob}
        placeholder={moment().format('MM/DD/YYYY')}
        onChange={date => {if(!date){return} console.log(date); props.setDob(date.format('YYYY-MM-DD'))}}
        maxDate={new Date()}
        format="MM/DD/YYYY"
      />

  );
}

export default DatePicker;