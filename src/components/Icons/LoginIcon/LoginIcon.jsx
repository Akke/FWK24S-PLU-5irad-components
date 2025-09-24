import * as React from "react";

/**
 * LoginIcon
 * - size: number or string (e.g., 24, "1.5rem")
 * - color: stroke color (defaults to currentColor so it inherits text color)
 * - strokeWidth: line thickness (defaults to 2)
 * - title: accessible label; if omitted, icon is aria-hidden
 */
const LoginIcon = React.forwardRef(function LoginIcon(
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
      {/* Door */}
      <path d="M14 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4" />
      {/* Arrow pointing into door */}
      <path d="M11 16l4-4-4-4" />
      <path d="M4 12h11" />
    </svg>
  );
});

export default LoginIcon;
