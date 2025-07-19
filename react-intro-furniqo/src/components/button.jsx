import React from "react";

export default function Button({
  children,
  type = "button",
  className = "btn btn-warning",
  icon,
  onClick,
  ...props
}) {
  return (
    <button type={type} className={className} onClick={onClick} {...props}>
      {icon && <i className={`${icon} me-2`} />}
      {children}
    </button>
  );
}
