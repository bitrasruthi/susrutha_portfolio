import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import { Box } from "@mui/material";
import Footer from "../components/Footer";

const Layout = () => {
  return (
    <>
      <Header />
      <Box>
        <Outlet />
      </Box>
      <Footer />
    </>
  );
};

export default Layout;
