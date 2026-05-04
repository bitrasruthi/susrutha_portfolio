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
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { CardMedia } from "@mui/material";

const pages = [
  "Home",
  "Profile",
  "Professional Experience",
  "Projects & Case Studies",
  "Core Skills",
  "Certifications",
  "Contact",
];

function Header() {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null,
  );

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar position="static" sx={{ height: 80 }}>
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
                sx={{ width: 200, height: 80 }}
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
                    <MenuItem key={page} onClick={handleCloseNavMenu}>
                      <Typography sx={{ textAlign: "center" }}>
                        {page}
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
                    key={page}
                    onClick={handleCloseNavMenu}
                    sx={{
                      my: 2,
                      color: "white",
                      display: "block",
                      textDecoration: "none",
                      textTransform: "none",
                    }}
                  >
                    <Typography sx={{ textDecoration: "none", fontSize: 12 }}>
                      {page}
                    </Typography>
                  </Button>
                ))}
              </Box>
              {/* <LinkedInIcon /> */}
            </Box>
          </Toolbar>
        </Box>
      </Container>
    </AppBar>
  );
}
export default Header;
