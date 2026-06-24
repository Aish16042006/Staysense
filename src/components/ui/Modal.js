import Button from "./Button";

/**
 * Reusable Modal Component
 */

export default function Modal({
  isOpen,
  title,
  children,
  onClose,
}) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/40 flex justify-center items-center">
      <div className="bg-white rounded-xl p-6 w-96 shadow-xl">
        <h2 className="text-2xl font-bold mb-4">
          {title}
        </h2>

        <div className="mb-6">
          {children}
        </div>

        <Button
          text="Close"
          variant="secondary"
          onClick={onClose}
        />
      </div>
    </div>
  );
}