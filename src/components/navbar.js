export default function Navbar() {
  return (
    <nav className="bg-blue-600 text-white p-4 flex justify-between items-center shadow-md">
      <h1 className="text-2xl font-bold">StaySense AI</h1>

      <div className="space-x-6">
        <a
          href="/"
          className="hover:text-gray-200 hover:underline transition duration-300"
        >
          Home
        </a>

        <a
          href="/about"
          className="hover:text-gray-200 hover:underline transition duration-300"
        >
          About
        </a>

        <a
          href="/dashboard"
          className="hover:text-gray-200 hover:underline transition duration-300"
        >
          Dashboard
        </a>

        <a
          href="/login"
          className="hover:text-gray-200 hover:underline transition duration-300"
        >
          Login
        </a>
      </div>
    </nav>
  );
}