import { Outlet, createRootRoute } from "@tanstack/react-router";
import { Header } from "../Component/Header";
import { Footer } from "../Component/Footer";

export const Route = createRootRoute({
  component: RootComponent,
});

function RootComponent() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}
