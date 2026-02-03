import { Suspense } from "react";
import { Outlet } from "react-router";
import { Layout } from "./components/Layout";

export function App() {
  return (
    <Layout>
      <Suspense fallback={<div style={{ padding: "2rem" }}>Loading...</div>}>
        <Outlet />
      </Suspense>
    </Layout>
  );
}
