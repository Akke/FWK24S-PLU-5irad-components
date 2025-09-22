import * as React from "react";

/**
 * CircleIcon
 * - size: number or string (e.g., 24, "1.5rem")
 * - color: stroke color (defaults to currentColor so it inherits text color)
 * - strokeWidth: line thickness (defaults to 2)
 * - filled: whether to fill the circle (default: false)
 * - title: accessible label; if omitted, icon is aria-hidden
 */
const CircleIcon = React.forwardRef(function CircleIcon(
  {
    size = 24,
    color = "currentColor",
    strokeWidth = 2,
    filled = false,
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
      fill={filled ? color : "none"}
      stroke={filled ? "none" : color}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      {...ariaProps}
      {...props}
    >
      {title ? <title>{title}</title> : null}
      <circle cx="12" cy="12" r="9" />
    </svg>
  );
});

export default CircleIcon;
