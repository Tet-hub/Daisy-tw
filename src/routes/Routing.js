import React from "react";
import HomePage from "../pages/HomePage";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const RoutePath = [
  { path: "/", element: <HomePage /> },
  //   { path: "/service", element: <ServicePage /> },
  //   { path: "/about", element: <AboutPage /> },
];

const Routing = () => {
  return (
    <BrowserRouter>
      <Routes>
        {RoutePath.map(({ path, element }, index) => (
          <Route key={index} path={path} element={element} />
        ))}
      </Routes>
    </BrowserRouter>
  );
};

export default Routing;
