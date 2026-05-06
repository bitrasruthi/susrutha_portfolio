import { IRoutes } from "../helpers/interfaces";
import Layout from "../layout";
import About from "../pages/About";
import CourseDetails from "../pages/CourseDetails";
import Home from "../pages/Home";

export const routes = [
  {
    path: "/",
    component: Home,
    layout: Layout,
  },
  {
    path: "/course-details/:id",
    component: CourseDetails,
    layout: Layout,
  },
] as IRoutes[];
