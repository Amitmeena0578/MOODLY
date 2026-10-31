import { useEffect } from "react";
import { RouterProvider, useRouter } from "./lib/router";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { Home } from "./pages/Home";
import { ProductPage } from "./pages/Product";
import { PrintPage } from "./pages/Print";
import { getProduct } from "./data/products";

function Routes() {
  const { route } = useRouter();

  useEffect(() => {
    const title =
      route.name === "home"
        ? "MOODLY — Wear your mood. Small-batch tees from Jaipur."
        : route.name === "print"
          ? "Print your mood. — MOODLY"
          : `${getProduct(route.slug)?.name ?? "Product"} — MOODLY`;
    document.title = title;
  }, [route]);

  return (
    <main className="min-h-screen bg-[#F5F0E8] text-[#141414]">
      <Header />
      {route.name === "home" && <Home />}
      {route.name === "product" && <ProductPage slug={route.slug} />}
      {route.name === "print" && <PrintPage />}
      <Footer />
    </main>
  );
}

export default function App() {
  return (
    <RouterProvider>
      <Routes />
    </RouterProvider>
  );
}
