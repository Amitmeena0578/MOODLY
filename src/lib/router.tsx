import { createContext, useContext, useEffect, useState, type ReactNode } from "react";

export type Route =
  | { name: "home" }
  | { name: "product"; slug: string }
  | { name: "print" };

function parseHash(hash: string): Route {
  const clean = hash.replace(/^#/, "") || "/";
  if (clean === "/" || clean === "") return { name: "home" };
  if (clean === "/print") return { name: "print" };
  const productMatch = clean.match(/^\/p\/(.+)$/);
  if (productMatch) return { name: "product", slug: productMatch[1] };
  return { name: "home" };
}

interface RouterContextValue {
  route: Route;
  navigate: (path: string) => void;
}

const RouterContext = createContext<RouterContextValue | null>(null);

export function RouterProvider({ children }: { children: ReactNode }) {
  const [route, setRoute] = useState<Route>(() => parseHash(window.location.hash));

  useEffect(() => {
    const onHashChange = () => {
      setRoute(parseHash(window.location.hash));
      window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
    };
    window.addEventListener("hashchange", onHashChange);
    return () => window.removeEventListener("hashchange", onHashChange);
  }, []);

  const navigate = (path: string) => {
    window.location.hash = path;
  };

  return <RouterContext.Provider value={{ route, navigate }}>{children}</RouterContext.Provider>;
}

export function useRouter() {
  const ctx = useContext(RouterContext);
  if (!ctx) throw new Error("useRouter must be used within RouterProvider");
  return ctx;
}
