import * as React from "react";

const PlusIcon = React.forwardRef(function PlusIcon(
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
      <line x1="12" y1="5" x2="12" y2="19" />
      <line x1="5" y1="12" x2="19" y2="12" />
    </svg>
  );
});

export default PlusIcon;
