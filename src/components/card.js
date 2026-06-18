export default function Card() {
  return (
    <div className="border rounded-xl p-6 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 bg-white">
      <h3 className="text-xl font-semibold">
        AI Sentiment Analysis
      </h3>

      <p className="mt-2 text-gray-600">
        Analyze guest reviews and classify them into positive, neutral, or negative sentiments.
      </p>
    </div>
  );
}