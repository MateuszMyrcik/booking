import { useController, UseControllerProps } from "react-hook-form";
import { InputType } from "../form-dialog";

type IInputComponentType = {
  label: string;
  type: InputType;
};

type FormValues = {
  [x: string]: any;
} & any;
export const InputComponent = (
  props: UseControllerProps<FormValues> & IInputComponentType
) => {
  const {
    field: { value, onChange },
  } = useController(props);
  const { label, type } = props;
  return (
    <div>
      <label className="block text-xs font-medium text-gray-500">{label}</label>

      <input
        className="w-full p-3 mt-1 text-sm border-2 border-gray-200 rounded"
        type={type}
        onChange={onChange}
        value={value}
        required
      />
    </div>
  );
};
