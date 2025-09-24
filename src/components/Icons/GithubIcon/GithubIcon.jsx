import * as React from "react";

export const GithubIcon = React.forwardRef(function GithubIcon(
  { size = 24, color = "currentColor", strokeWidth = 2, title = "GitHub", className, ...props },
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
      <circle cx="6" cy="6" r="2" />
      <circle cx="6" cy="18" r="2" />
      <circle cx="18" cy="12" r="2" />
      <path d="M8 6h4a4 4 0 0 1 4 4v0" />
      <path d="M8 18h4a4 4 0 0 0 4-4v0" />
      <line x1="6" y1="8" x2="6" y2="16" />
    </svg>
  );
});
