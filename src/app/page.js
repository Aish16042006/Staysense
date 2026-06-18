import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import Card from "@/components/card";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <>
      <Navbar />

      <Hero />

      <div className="grid md:grid-cols-2 gap-6 p-8">
        <Card />
        <Card />
      </div>

      <Footer />
    </>
  );
}