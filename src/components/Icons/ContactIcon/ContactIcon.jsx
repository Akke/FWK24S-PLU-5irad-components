import * as React from "react";

export const ContactIcon = React.forwardRef(function ContactIcon(
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
      <rect x="3" y="5" width="18" height="14" rx="2" ry="2" />
      <path d="M3 7l9 6 9-6" />
    </svg>
  );
});
