export default function Hero() {
  return (
    <section className="text-center py-20 bg-gray-100">
      <h2 className="text-5xl font-bold text-gray-900">
        Smart AI for Homestays
      </h2>

      <p className="mt-6 text-lg text-gray-600 max-w-2xl mx-auto">
        Analyze guest reviews with AI and improve customer satisfaction.
      </p>

      <a
  href="/dashboard"
  className="inline-block mt-8 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition duration-300"
>
  Get Started
</a>
    </section>
  );
}