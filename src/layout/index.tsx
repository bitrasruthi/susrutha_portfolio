import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import { Box } from "@mui/material";

const Layout = () => {
  return (
    <>
      <Header />
      <Box className="container">
        <Outlet />
      </Box>
    </>
  );
};

export default Layout;
