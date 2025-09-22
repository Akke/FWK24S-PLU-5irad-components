import * as React from "react";

/**
 * CrossIcon
 * - size: number or string (default: 24)
 * - color: stroke color (default: currentColor so it inherits text color)
 * - strokeWidth: line thickness (default: 4 for "thick")
 * - title: accessible label; if omitted, icon is aria-hidden
 */
const CrossIcon = React.forwardRef(function CrossIcon(
  {
    size = 24,
    color = "currentColor",
    strokeWidth = 4, // thicker by default
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

export default CrossIcon;
