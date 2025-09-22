import * as React from "react";

/**
 * RestartIcon
 * - size: number or string (e.g., 24, "1.5rem")
 * - color: stroke color (defaults to currentColor so it inherits text color)
 * - strokeWidth: line thickness (defaults to 2)
 * - title: accessible label; if omitted, icon is aria-hidden
 */
const RestartIcon = React.forwardRef(function RestartIcon(
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
      <path d="M21 12a9 9 0 1 1-2.64-6.36" />
      <polyline points="21 3 21 9 15 9" />
    </svg>
  );
});

export default RestartIcon;
