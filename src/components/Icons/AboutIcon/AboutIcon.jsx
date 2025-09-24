import * as React from "react";

export const AboutIcon = React.forwardRef(function AboutIcon(
  { size = 24, color = "currentColor", strokeWidth = 2, title, className, ...props },
  ref
) {
  const aria = title ? { role: "img", "aria-label": title } : { "aria-hidden": true };
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
      {...aria}
      {...props}
    >
      {title ? <title>{title}</title> : null}
      <circle cx="12" cy="12" r="9" />
      <line x1="12" y1="8" x2="12" y2="8" />         {/* dot */}
      <path d="M11 12h1v4h1" />                       {/* stem of “i” */}
    </svg>
  );
});
