import { lazy, Suspense } from "react";
const HomePage = lazy(() => import("./pages/HomePage"));
function App() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Suspense fallback={<div>LOADING ...</div>}>
        <HomePage />
      </Suspense>
    </div>
  );
}

export default App;
