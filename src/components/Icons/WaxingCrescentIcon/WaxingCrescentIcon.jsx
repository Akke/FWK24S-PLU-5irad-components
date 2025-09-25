import React from "react";

/**
 * WaxingCrescentIcon
 * - size: px size of the icon (default 24)
 * - color: fill color (default 'currentColor')
 * - offset: how far the subtracting circle is shifted left; larger = thinner crescent (default 6)
 * - title: accessible label
 */
export default function WaxingCrescentIcon({
  size = 24,
  color = "currentColor",
  offset = 6,
  title = "Waxing crescent moon",
  ...props
}) {
  // Note: if you render many of these, consider passing a unique maskId prop.
  const maskId = `waxing-crescent-mask-${size}-${offset}`;

  const r = 10;        // moon radius
  const cx = 12;       // center x
  const cy = 12;       // center y

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      role="img"
      aria-label={title}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <title>{title}</title>
      <defs>
        {/* White = keep, Black = cut out */}
        <mask id={maskId}>
          <rect x="0" y="0" width="24" height="24" fill="white" />
          {/* Start with a full white circle */}
          <circle cx={cx} cy={cy} r={r} fill="white" />
          {/* Subtract a circle shifted LEFT to leave a RIGHT-hand crescent (waxing) */}
          <circle cx={cx - offset} cy={cy} r={r} fill="black" />
        </mask>
      </defs>

      {/* Fill the crescent with currentColor (or custom color) */}
      <rect x="0" y="0" width="24" height="24" fill="none" />
      <circle cx={cx} cy={cy} r={r} fill={color} mask={`url(#${maskId})`} />
    </svg>
  );
}
