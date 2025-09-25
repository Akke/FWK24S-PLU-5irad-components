import React from "react";

/**
 * SunIcon
 * - size: overall icon size in px (default 24)
 * - color: ray + fill color (default 'currentColor')
 * - strokeWidth: ray thickness (default 1.6)
 * - title: accessible label
 */
export default function SunIcon({
  size = 24,
  color = "currentColor",
  strokeWidth = 1.6,
  title = "Sun",
  ...props
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      role="img"
      aria-label={title}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      stroke={color}
      strokeWidth={strokeWidth}
      {...props}
    >
      <title>{title}</title>

      {/* Sun core */}
      <circle cx="12" cy="12" r="5" fill={color} stroke="none" />

      {/* Rays */}
      <g strokeLinecap="round">
        {/* cardinal */}
        <line x1="12" y1="1.5"  x2="12" y2="4.5" />
        <line x1="12" y1="19.5" x2="12" y2="22.5" />
        <line x1="1.5"  y1="12" x2="4.5" y2="12" />
        <line x1="19.5" y1="12" x2="22.5" y2="12" />

        {/* diagonals */}
        <line x1="4.22"  y1="4.22"  x2="6.34" y2="6.34" />
        <line x1="17.66" y1="17.66" x2="19.78" y2="19.78" />
        <line x1="17.66" y1="6.34"  x2="19.78" y2="4.22" />
        <line x1="4.22"  y1="19.78" x2="6.34" y2="17.66" />
      </g>
    </svg>
  );
}
