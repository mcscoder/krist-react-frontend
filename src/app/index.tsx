import { AppProvider } from "src/app/app-provider";

import { useMemo } from "react";
import { RouterProvider } from "react-router-dom";
import { createRouter } from "src/app/routes";

const AppRouter = () => {
  const router = useMemo(() => createRouter(), []);
  return <RouterProvider router={router} />;
};

function App() {
  return (
    <AppProvider>
      <h1>App</h1>
      <AppRouter />
    </AppProvider>
  );
}

export default App;
