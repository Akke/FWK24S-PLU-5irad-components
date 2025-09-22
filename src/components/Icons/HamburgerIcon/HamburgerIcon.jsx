import * as React from "react";

/**
 * HamburgerIcon
 * - size: number or string (e.g., 24, "1.5rem")
 * - color: stroke color (defaults to currentColor so it inherits text color)
 * - strokeWidth: line thickness (defaults to 2)
 * - title: accessible label; if omitted, icon is aria-hidden
 */
const HamburgerIcon = React.forwardRef(function HamburgerIcon(
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
      <line x1="3" y1="6.5"  x2="21" y2="6.5" />
      <line x1="3" y1="12"   x2="21" y2="12"  />
      <line x1="3" y1="17.5" x2="21" y2="17.5"/>
    </svg>
  );
});

export default HamburgerIcon;
