import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import theme from "../../styles/theme";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

type Props = {};

const pages = [
  "Home",
  "Profile",
  "Professional Experience",
  "Projects & Case Studies",
  "Core Skills",
  "Certifications",
  "Contact",
];

const Footer = (props: Props) => {
  return (
    <Box sx={{ backgroundColor: theme.palette.secondary.main }}>
      <Box className="container" py={4} textAlign={"center"}>
        <Grid container>
          <Grid size={4}>
            <Grid container direction="column" spacing={1} textAlign="left">
              {pages.slice(0, 4)?.map((page, index) => (
                <Grid key={index}>
                  <Typography
                    color="white"
                    fontSize={12}
                    sx={{ cursor: "pointer" }}
                  >
                    {page}
                  </Typography>
                </Grid>
              ))}
            </Grid>
            </Grid>
          <Grid size={4}>
            <Grid container direction="column" spacing={1} textAlign="left">
              {pages.slice( 4)?.map((page, index) => (
                <Grid key={index}>
                  <Typography
                    color="white"
                    fontSize={12}
                    sx={{ cursor: "pointer" }}
                  >
                    {page}
                  </Typography>
                </Grid>
              ))}
            </Grid>
          </Grid>

          <Grid
            size={4}
            display="flex"
            justifyContent="left"
            alignItems="start"
          >
            <LinkedInIcon sx={{ color: "white", width: 30, height: 30 }} />
          </Grid>
        </Grid>
        <Typography color="#635c5c" fontSize={14}>
          &copy; {new Date().getFullYear()} Fintech Career Path. All rights
          reserved.
        </Typography>
      </Box>
    </Box>
  );
};

export default Footer;
