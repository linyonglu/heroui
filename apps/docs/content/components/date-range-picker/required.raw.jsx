import {DateRangePicker} from "@heroui/react";
import {parseDate} from "@heroui/shared-utils";

export default function App() {
  return (
    <DateRangePicker
      isRequired
      className="max-w-xs"
      defaultValue={{
        start: parseDate("2024-04-01"),
        end: parseDate("2024-04-08"),
      }}
      label="Stay duration"
    />
  );
}
