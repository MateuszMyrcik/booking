import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { ButtonComponent } from "../button";
import { useForm, SubmitHandler, Controller } from "react-hook-form";
import {
  Checkbox,
  FormControlLabel,
  InputLabel,
  NativeSelect,
} from "@mui/material";

interface FormDialogComponentProps {
  btnLabel: string;
  title: string;
  contentText: string;
  children: React.ReactElement;
  formInputs: IFormInput[];
  onFormSubmit: (data: any) => {};
}

export interface IFormInput {
  label: string;
  type: InputType;
  id: string;
  defaultValue?: string;
  options?: { label: string }[];
}

export type InputType =
  | "text"
  | "image"
  | "checkbox"
  | "select"
  | "number"
  | "url";

export const FormDialogComponent = ({
  btnLabel,
  title,
  contentText,
  formInputs,
  children,
  onFormSubmit,
}: FormDialogComponentProps) => {
  const [open, setOpen] = React.useState(false);
  const {
    register,
    handleSubmit,
    formState: { isValid, isSubmitSuccessful },
  } = useForm();

  const onSubmit: SubmitHandler<any> = (data) => {
    if (isSubmitSuccessful) {
      // handleClose();
      onFormSubmit(data);
    }
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const getInputField = ({
    id,
    label,
    type,
    defaultValue,
    options,
  }: IFormInput) => {
    switch (type) {
      case "checkbox":
        return (
          <div className="flex items-center py-2">
            <label
              className="block text-xs font-medium text-gray-500 pr-4"
              htmlFor={id}
            >
              {label}
            </label>

            <input
              {...register(id)}
              className="p-3 mt-1 text-sm border-2 border-gray-200 rounded"
              id={id}
              type="checkbox"
            />
          </div>
        );
      case "select":
        return (
          <>
            <div className="flex items-center py-2">
              <label
                className="block text-xs font-medium text-gray-500 pr-4"
                htmlFor={id}
              >
                {label}
              </label>

              <select
                {...register(id)}
                className=" mt-1 text-sm border-2 border-gray-200 rounded"
                id={id}
                name={label}
                required
              >
                {options?.map(({ label }) => (
                  <option key={label} value={label}>
                    {label}
                  </option>
                ))}
              </select>
            </div>
          </>
        );

      default:
        return (
          <div>
            <label
              className="block text-xs font-medium text-gray-500"
              htmlFor={id}
            >
              {label}
            </label>

            <input
              {...register(id)}
              className="w-full p-3 mt-1 text-sm border-2 border-gray-200 rounded"
              id={id}
              type={type}
              required
            />
          </div>
        );
    }
  };

  return (
    <div className="flex">
      <ButtonComponent
        btnClickEvent={handleClickOpen}
        label={btnLabel}
      ></ButtonComponent>

      <Dialog className="" open={open} onClose={handleClose}>
        <form className="w-96" onSubmit={handleSubmit(onSubmit)}>
          <DialogTitle>{title}</DialogTitle>
          <DialogContent>
            <DialogContentText>{contentText}</DialogContentText>
            {children}
            {formInputs.map((input) => getInputField(input))}
          </DialogContent>

          <DialogActions sx={{ justifyContent: "center" }}>
            <Button onClick={handleClose}>Cancel</Button>
            <Button type="submit">Add</Button>
          </DialogActions>
        </form>
      </Dialog>
    </div>
  );
};
