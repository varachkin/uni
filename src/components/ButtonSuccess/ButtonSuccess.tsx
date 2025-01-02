import React from "react";
import { FaCircleCheck } from "react-icons/fa6";

interface ButtonSuccessProps {
  children: React.ReactNode; // The content inside the button
  onClick: () => void; // Callback function for the button click event
  variant?: "secondary" | "remove" | undefined; // Variant options for the button
  disabled?: boolean; // Whether the button is disabled
  className?: string; // Additional CSS classes for the button
}

export const ButtonSuccess: React.FC<ButtonSuccessProps> = ({
  children,
  onClick,
  variant,
  disabled = false,
  className = "",
}) => {
  return (
    <button
      disabled={disabled}
      className={`button ${className} ${
        variant && variant === "secondary"
          ? "light"
          : variant === "remove"
          ? "warning"
          : disabled
          ? "disabled"
          : ""
      }`}
      onClick={onClick}
    >
      {children} <FaCircleCheck />
    </button>
  );
};
