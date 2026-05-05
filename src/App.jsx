import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import Github, { githubinfoloader } from "./components/Github/Github";

// Layout (Header + Footer wrap)
function Layout({ children }) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}

// Router config
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout><Home /></Layout>,
  },
  {
    path: "/github/:username",
    element: <Layout><Github /></Layout>,
    loader: githubinfoloader,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;