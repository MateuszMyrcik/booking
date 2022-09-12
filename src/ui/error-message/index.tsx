interface ErrorMessageComponentProps {
  label: string;
  className?: string;
}

export const ErrorMessageComponent: React.FC<ErrorMessageComponentProps> = ({
  label,
  className,
}) => (
  <div className={className}>
    <div
      className="p-4 text-red-700 border rounded border-red-900/10 bg-red-50"
      role="alert"
    >
      <strong className="text-sm font-medium">{label}</strong>
    </div>
  </div>
);
