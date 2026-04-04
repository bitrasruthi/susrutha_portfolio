import { IRoutes } from "../helpers/interfaces";
import Layout from "../layout";
import About from "../pages/About";
import Home from "../pages/Home";

export const routes = [
  {
    path: "/",
    component: Home,
    layout: Layout,
  },
  {
    path: "/about",
    component: About,
    layout: Layout,
  },
] as IRoutes[];
