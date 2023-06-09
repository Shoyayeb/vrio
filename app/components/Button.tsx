"use client";

import clsx from "clsx";

interface ButtonProps {
  type?: "button" | "submit" | "reset" | undefined;
  fullWidth?: boolean;
  disabled?: boolean;
  danger?: boolean;
  secondary?: boolean;
  onClick?: () => void;
  children?: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({
  type,
  fullWidth,
  children,
  disabled,
  danger,
  secondary,
  onClick,
}) => {
  return (
    <div>
      <button
        onClick={onClick}
        type={type}
        disabled={disabled}
        className={clsx(
          `flex justify-center rounded-md px-3 py-2 text-sm font-semibold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2`,
          disabled && `opacity-50 cursor-not-allowed`,
          fullWidth && `w-full`,
          secondary ? `text-gray-900` : `text-white`,
          danger &&
            `bg-rose-500 hover:bg-rose-600 focus-visible:outline-rose-600`,
          !secondary &&
            !danger &&
            `bg-sky-500 hover:bg-sky-600 focus-visible:bg-sky-600`
        )}
      >
        {children}
      </button>
    </div>
  );
};

export default Button;
