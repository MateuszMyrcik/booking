interface IButtonComponent {
  label: string;
  btnClickEvent?: () => void;
  secondType?: boolean;
}
export const ButtonComponent: React.FC<IButtonComponent> = ({
  label,
  btnClickEvent,
  secondType,
}) => {
  return (
    <button
      type="button"
      onClick={btnClickEvent}
      className={`px-5 py-2 text-sm font-medium rounded-lg
      ${
        !secondType
          ? "text-white bg-blue-600 hover:bg-blue-300"
          : "text-black bg-white hover:bg-gray-100"
      } `}
    >
      {label}
    </button>
  );
};
