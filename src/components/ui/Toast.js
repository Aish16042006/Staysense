/**
 * Toast Notification
 */

export default function Toast({
  message = "Action completed successfully!",
}) {
  return (
    <div className="fixed bottom-6 right-6 bg-green-600 text-white px-5 py-3 rounded-lg shadow-lg">
      {message}
    </div>
  );
}