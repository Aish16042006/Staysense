import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

export default function Login() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen p-10">
        <h1 className="text-4xl font-bold">
          Login
        </h1>

        <p className="mt-4">
          Login to access the StaySense AI dashboard.
        </p>
      </main>

      <Footer />
    </>
  );
}