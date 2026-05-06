import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import { CardMedia } from "@mui/material";
import { useNavigate } from "react-router-dom";

export const pages = [
  { name: "Home", path: "/" },
  { name: "Profile", path: "/" },
  { name: "Fin Bites", path: "/fin-bites" },
  { name: "Useful Links", path: "/links" },
  { name: "Career Path", path: "/career-path" },
  { name: "Contact", path: "/contact" },
];

function Header() {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null,
  );
  const [clickedMenu, setClickedMenu] = React.useState<string>("");
  const history = useNavigate();
  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const scrollToSection = (className: string) => {
    const element = document.querySelector(`.${className}`);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <AppBar position="static" sx={{ height: 100 }}>
      <Container maxWidth="xl">
        <Box className="container">
          <Toolbar disableGutters>
            <Box
              display={"flex"}
              justifyContent={"space-between"}
              alignItems={"center"}
              width={"100%"}
            >
              <CardMedia
                component="img"
                src={
                  // "https://f005.backblazeb2.com/file/susruthaportfolio/FCP+Logo.png"
                  "https://f005.backblazeb2.com/file/susruthaportfolio/fcp-full.png"
                }
                alt="Logo"
                sx={{ width: 300, height: 100 }}
              />
              <Box
                sx={{
                  flexGrow: 1,
                  display: { xs: "flex", md: "none" },
                  justifyContent: "right",
                }}
              >
                <IconButton
                  size="large"
                  aria-label="account of current user"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  onClick={handleOpenNavMenu}
                  color="inherit"
                >
                  <MenuIcon />
                </IconButton>
                <Menu
                  id="menu-appbar"
                  anchorEl={anchorElNav}
                  anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "left",
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "left",
                  }}
                  open={Boolean(anchorElNav)}
                  onClose={handleCloseNavMenu}
                  sx={{ display: { xs: "block", md: "none" } }}
                >
                  {pages.map((page) => (
                    <MenuItem
                      key={page.name}
                      onClick={() => {
                        handleCloseNavMenu();
                        history(page.path);
                        setClickedMenu(page.name);
                        const profileMenu = pages.find(
                          (item) => item.name == "Profile",
                        );
                        if (profileMenu == page) {
                          scrollToSection("scroll-to-profile");
                        }
                      }}
                      disableRipple
                    >
                      <Typography sx={{ textAlign: "center" }}>
                        {page.name}
                      </Typography>
                    </MenuItem>
                  ))}
                </Menu>
              </Box>
              <Box
                sx={{
                  display: { xs: "none", md: "flex" },
                  alignItems: "center",
                }}
              >
                {pages.map((page) => (
                  <Button
                    disableRipple
                    key={page.name}
                    onClick={() => {
                      handleCloseNavMenu();
                      history(page.path);
                      const profileMenu = pages.find(
                        (item) => item.name == "Profile",
                      );
                      setClickedMenu(page.name);
                      if (profileMenu == page) {
                        scrollToSection("scroll-to-profile");
                      }
                    }}
                    sx={{
                      my: 2,
                      color: "white",
                      display: "block",
                      textDecoration: "none",
                      textTransform: "none",
                    }}
                  >
                    <Typography sx={{ textDecoration: "none", fontSize: 15 }}>
                      {page.name}
                    </Typography>
                  </Button>
                ))}
              </Box>
            </Box>
          </Toolbar>
        </Box>
      </Container>
    </AppBar>
  );
}
export default Header;
