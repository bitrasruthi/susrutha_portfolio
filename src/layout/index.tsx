import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import { Box } from "@mui/material";
import Footer from "../components/Footer";
import Subheader from "../components/Subheader";

const Layout = () => {
  return (
    <>
      <Header />
      <Subheader />
      <Box>
        <Outlet />
      </Box>
      <Box>
        <Footer />
      </Box>
    </>
  );
};

export default Layout;
