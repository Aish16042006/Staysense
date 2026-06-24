/*
 * Reusable Button Component
 * Props:
 * - text: Button label
 * - onClick: Click handler
 * - type: button | submit | reset
 * - variant: primary | secondary
 */

export default function Button({
  text = "Button",
  onClick,
  type = "button",
  variant = "primary",
}) {
  const baseStyle =
    "px-6 py-3 rounded-lg font-semibold transition duration-300";

  const variants = {
    primary: "bg-blue-600 text-white hover:bg-blue-700",
    secondary: "bg-gray-200 text-gray-800 hover:bg-gray-300",
  };

  return (
    <button
      type={type}
      onClick={onClick}
      className={`${baseStyle} ${variants[variant]}`}
    >
      {text}
    </button>
  );
}