import * as React from "react";
import TextField from "@mui/material/TextField";
import {
  DateRangePicker,
  DateRange,
} from "@mui/x-date-pickers-pro/DateRangePicker";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import Box from "@mui/material/Box";
import dayjs from "dayjs";

interface IDateRangeComponent {
  onChange: (arg: any) => void;
  unavailabilityRange: { from: Date; to: Date }[];
}

const DateRangeComponent: React.FC<IDateRangeComponent> = ({
  onChange,
  unavailabilityRange,
}) => {
  const [value, setValue] = React.useState<DateRange<Date>>([null, null]);

  const isDisabled = (date: Date) => {
    return unavailabilityRange?.some(({ from, to }) => {
      if (dayjs(date).isAfter(from) && dayjs(date).isBefore(to)) {
        return true;
      }
    });
  };

  return (
    <LocalizationProvider
      dateAdapter={AdapterDateFns}
      localeText={{ start: "Check-in", end: "Check-out" }}
    >
      <DateRangePicker
        value={value}
        disablePast={true}
        shouldDisableDate={isDisabled}
        onChange={(newValue) => {
          onChange(newValue);
          setValue(newValue);
        }}
        renderInput={(startProps, endProps) => (
          <React.Fragment>
            <TextField {...startProps} />
            <Box sx={{ mx: 2 }}> to </Box>
            <TextField {...endProps} />
          </React.Fragment>
        )}
      />
    </LocalizationProvider>
  );
};

export default DateRangeComponent;
