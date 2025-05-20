import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home/Home";
import { router } from "./router"; // ✅ Use the router from router.tsx

function App() {
  return <RouterProvider router={router} />;
}

export default App;
