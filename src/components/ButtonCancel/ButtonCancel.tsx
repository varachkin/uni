import React from "react";
import { FaCircleXmark } from "react-icons/fa6";

interface ButtonCancelProps {
  children: React.ReactNode; // The content inside the button
  onClick: () => void; // Callback function for the button click event
  variant?: "secondary" | "remove" | undefined; // Variant options for the button
  disabled?: boolean; // Whether the button is disabled
  className?: string; // Additional CSS classes for the button
}

export const ButtonCancel: React.FC<ButtonCancelProps> = ({
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
      <FaCircleXmark /> {children}
    </button>
  );
};
