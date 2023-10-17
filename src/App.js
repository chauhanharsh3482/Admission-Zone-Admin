import React from "react";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Layout from "./Layout"
import Sidebar from "./components/Sidebar/Sidebar";
import Customtable from "./components/Customtable/Customtable";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />}>
        <Route path="" element={<Sidebar />} />
        <Route path='achievers' element={<Customtable />} />
      </Route>
    )
  );
  return <div>
    <RouterProvider router={router} />
  </div>;
}

export default App;
