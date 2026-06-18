import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

export default function Dashboard() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen p-10">
        <h1 className="text-4xl font-bold">Dashboard</h1>
        <p className="mt-4">
          AI insights and review analytics will be displayed here.
        </p>
      </main>
      <Footer />
    </>
  );
}