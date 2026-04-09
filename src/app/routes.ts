import { createBrowserRouter } from "react-router-dom";

import RootLayout from "./RootLayout";

import Home from "./pages/Home";
import About from "./pages/About";

import Portfolio from "./pages/Portfolio";
import PortfolioCategory from "./pages/PortfolioCategory";
import PortfolioList from "./pages/PortfolioList";
import PortfolioDetail from "./pages/PortfolioDetail";

import Services from "./pages/Services";
import ServiceDetail from "./pages/ServiceDetail";

import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      { index: true, Component: Home },

      { path: "about", Component: About },

      { path: "portfolio", Component: Portfolio },

      { path: "portfolio/:category", Component: PortfolioCategory },

      { path: "portfolio/:category/:type", Component: PortfolioList },

      // 🔥 FIX DI SINI
      { path: "portfolio/:category/:type/:id", Component: PortfolioDetail },

      { path: "services", Component: Services },
      { path: "services/:slug", Component: ServiceDetail },

      { path: "contact", Component: Contact },

      { path: "*", Component: NotFound },
    ],
  },
]);