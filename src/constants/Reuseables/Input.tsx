import { InputHTMLAttributes } from 'react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  id: string;
  placeholder: string;
}

const Input: React.FC<InputProps> = ({
  label,
  id,
  type,
  placeholder,
  ...rest
}) => {
  return (
    <div className="flex flex-col mb-4">
      <label htmlFor={id} className="text-sm mb-[11px]">
        {label}
      </label>
      <input
        type={type}
        id={id}
        name={id}
        className="border border-gray-300 w-full rounded-md px-3 py-2 focus:outline-none focus:border-blue-500"
        placeholder={placeholder}
        {...rest}
      />
    </div>
  );
};

export default Input;
