import * as React from "react";

/**
 * CloseIcon
 * - size: number or string (e.g., 24, "1.5rem")
 * - color: stroke color (defaults to currentColor so it inherits text color)
 * - strokeWidth: line thickness (defaults to 2)
 * - title: accessible label; if omitted, icon is aria-hidden
 */
const CloseIcon = React.forwardRef(function CloseIcon(
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
      <line x1="5" y1="5" x2="19" y2="19" />
      <line x1="19" y1="5" x2="5" y2="19" />
    </svg>
  );
});

export default CloseIcon;
