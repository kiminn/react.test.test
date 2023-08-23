// reactrouter.com
// npm i react-router-dom

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './App.css';
import Create from "./create";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Create title='Create!'/>
    },
  ]);
  return (
    <RouterProvider router={router} />
  );
}

export default App;
