import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

export default function About() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen p-10">
        <h1 className="text-4xl font-bold">About StaySense AI</h1>

        <p className="mt-4">
          StaySense AI helps homestay owners analyze guest reviews using Artificial Intelligence.
        </p>
      </main>

      <Footer />
    </>
  );
}