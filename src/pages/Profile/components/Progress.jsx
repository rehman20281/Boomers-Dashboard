// Progress.jsx
import React from "react";
import clsx from "clsx"; // optional

export default function Progress({
  value = 0,            // 0..100
  height = "h-2",       // e.g. "h-1.5", "h-3"
  rounded = "rounded-full",
  color = "bg-blue-600",
  showLabel = true,
  className = "",
  label = "Progress",
}) {
  const v = Math.min(100, Math.max(0, value)); // clamp 0..100

  return (
    <div className={clsx("w-full", className)}>
      {showLabel && (
        <div className="mb-2 flex items-center justify-between">
          <span className="text-sm font-medium text-gray-700">{label}</span>
          <span className="text-sm tabular-nums text-gray-600">{v}%</span>
        </div>
      )}

      <div
        className={clsx("w-full bg-gray-200", height, rounded)}
        role="progressbar"
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={v}
      >
        <div
          className={clsx(height, rounded, color, "transition-all duration-300")}
          style={{ width: `${v}%` }}
        />
      </div>
    </div>
  );
}
