// Logo — wordmark with the sparkline running through the letters.
// Built as a single SVG so the text and the line always share the same
// coordinate space (no risk of the line drifting past the last letter).
//
// Technique: light text is the base layer (always visible) — this is what
// shows below the curve. A dark copy of the same text is clipped to only
// the region above the curve, so letters above the line turn dark while
// letters below stay light. The polyline is drawn last, on top of
// everything, so it's never hidden behind the text.
export default function Logo({
  className = "",
  lightColor = "#f2efe9",
  darkColor = "#6b6e76",
  lineColor = "#d9a23b",
}: {
  className?: string;
  lightColor?: string;
  darkColor?: string;
  lineColor?: string;
}) {
  // Coordinates tuned for "ZÉ PIERNO" in Sora 800 at this exact viewBox.
  // The curve's rightmost point lands just inside the final "O", not past it.
  const curvePoints = "2,32 20,29 38,31 60,19 82,23 106,12 178,4";
  // SVG's y-axis grows downward, so the region "above the curve" (visually,
  // the top of the letters) is the area with SMALLER y values — from y=0 up
  // to the curve. That's the region we want in the dark color.
  const aboveLineClip =
    "2,0 2,32 20,29 38,31 60,19 82,23 106,12 178,4 178,0";

  return (
    <svg
      viewBox="0 0 192 48"
      className={className}
      role="img"
      aria-label="Zé Pierno"
    >
      <defs>
        <clipPath id="logo-above-line">
          <polygon points={aboveLineClip} />
        </clipPath>
      </defs>

      <text
        x="2"
        y="36"
        fontFamily="Sora, sans-serif"
        fontWeight="800"
        fontSize="34"
        letterSpacing="-0.3"
        fill={lightColor}
      >
        ZÉ PIERNO
      </text>

      <g clipPath="url(#logo-above-line)">
        <text
          x="2"
          y="36"
          fontFamily="Sora, sans-serif"
          fontWeight="800"
          fontSize="34"
          letterSpacing="-0.3"
          fill={darkColor}
        >
          ZÉ PIERNO
        </text>
      </g>

      <polyline
        points={curvePoints}
        fill="none"
        stroke={lineColor}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
