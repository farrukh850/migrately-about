import { RouterProvider } from "react-router-dom";
import { router } from "./router";
import Home from "./pages/Home/Home";

function App() {
  return <RouterProvider router={router} />;
}

export default App;