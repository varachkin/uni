import React, { ReactNode } from "react";
import Loader from "../Loader/Loader";

interface ButtonProps {
  children: ReactNode;
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void | undefined;
  variant?: "secondary" | "remove";
  disabled?: boolean;
  className?: string;
  id?: string;
  isLoading?: boolean
}

export const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  variant,
  disabled = false,
  isLoading,
  className = "",
}) => {
  const buttonClass = `button ${className} ${disabled ? "disabled" : ""
    } ${variant === "secondary"
      ? "light"
      : variant === "remove"
        ? "warning"
        : disabled
          ? "disabled"
          : ""
    }`;

  return (
    <button
      disabled={disabled}
      className={buttonClass}
      onClick={onClick}
    >
      {isLoading ? <Loader /> : children}
    </button>
  );
};
