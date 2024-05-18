import React, { useState } from 'react';
import { GoEye, GoEyeClosed } from 'react-icons/go';

interface PasswordInputProps {
  label: string;
  id: string;
  placeholder: string;
}

const PasswordInput: React.FC<PasswordInputProps> = ({
  label,
  id,
  placeholder,
}) => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="flex flex-col mb-4">
      <label htmlFor={id} className="text-sm mb-[11px]">
        {label}
      </label>
      <div className="relative">
        <input
          type={showPassword ? 'text' : 'password'}
          id={id}
          name={id}
          className="border border-gray-300 w-full rounded-md px-3 py-2 pr-10 focus:outline-none focus:border-blue-500"
          placeholder={placeholder}
        />
        <button
          type="button"
          className="absolute inset-y-0 right-0 flex items-center px-3"
          onClick={togglePasswordVisibility}>
          {showPassword ? <GoEye /> : <GoEyeClosed />}
        </button>
      </div>
    </div>
  );
};

export default PasswordInput;
