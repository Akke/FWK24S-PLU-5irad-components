import * as React from "react";

const RegisterIcon = React.forwardRef(function RegisterIcon(
  {
    size = 24,
    color = "currentColor",
    strokeWidth = 2,
    title,
    className,
    ...props
  },
  ref
) {
  const ariaProps = title
    ? { role: "img", "aria-label": title }
    : { "aria-hidden": true };

  return (
    <svg
      ref={ref}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      {...ariaProps}
      {...props}
    >
      {title ? <title>{title}</title> : null}
      {/* User circle */}
      <circle cx="12" cy="7" r="4" />
      {/* Body base (optional, subtle) */}
      <path d="M6 21v-2a4 4 0 0 1 4-4h0a4 4 0 0 1 4 4v2" />
      {/* Plus sign for registration */}
      <line x1="19" y1="8" x2="19" y2="14" />
      <line x1="16" y1="11" x2="22" y2="11" />
    </svg>
  );
});

export default RegisterIcon;
