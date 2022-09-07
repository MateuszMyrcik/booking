import { useController, UseControllerProps } from "react-hook-form";

type ISelectComponentProps = {
  label: string;
  options: { label: string }[];
};
type FormValues = {
  [x: string]: any;
} & any;

export const SelectComponent = (
  props: UseControllerProps<FormValues> & ISelectComponentProps
) => {
  const {
    field: { value, onChange },
  } = useController(props);
  const { label, options } = props;
  return (
    <>
      <div className="flex items-center py-2">
        <label className="block text-xs font-medium text-gray-500 pr-4">
          {label}
        </label>

        <select
          className=" mt-1 text-sm border-2 border-gray-200 rounded"
          name={label}
          value={value}
          onChange={onChange}
          required
        >
          {options.map(({ label }) => (
            <option key={label} value={label}>
              {label}
            </option>
          ))}
        </select>
      </div>
    </>
  );
};
