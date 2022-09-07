import { useController, UseControllerProps } from "react-hook-form";

type ICheckboxComponentProps = {
  label: string;
};

type FormValues = {
  [x: string]: any;
} & any;

export const CheckboxComponent = (
  props: UseControllerProps<FormValues> & ICheckboxComponentProps
) => {
  const {
    field: { value, onChange },
  } = useController(props);

  return (
    <div className="flex items-center py-2">
      <label className="block text-xs font-medium text-gray-500 pr-4">
        {props.label}
      </label>

      <input
        checked={value}
        onChange={onChange}
        className="p-3 mt-1 text-sm border-2 border-gray-200 rounded"
        type="checkbox"
      />
    </div>
  );
};
