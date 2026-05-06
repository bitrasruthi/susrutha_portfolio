import { Box, Typography } from "@mui/material";
import React from "react";
import theme from "../../styles/theme";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

type Props = {};

const Subheader = (props: Props) => {
  return (
    <Box
      sx={{
        backgroundColor: theme.palette.secondary.main,
        color: theme.palette.primary.main,
        py: 1,
      }}
    >
      <Box
        className="container"
        display={{ xs: "block", sm: "flex" }}
        justifyContent={"space-between"}
        textAlign={{ xs: "center", sm: "inherit" }}
      >
        <Box ml={{ xs: 0, sm: 3 }}>
          <Typography fontWeight={700}>
            Industry Ready Concepts are Coming up...!
          </Typography>
        </Box>
        <Box display={{ xs: "block", sm: "flex" }} gap={1}>
          <Box display={"flex"} justifyContent={"center"} alignItems={"center"}>
            <WhatsAppIcon sx={{ color: "green" }} />:
            <Typography pl={0.5}>
              <span
                style={{
                  cursor: "pointer",
                  fontWeight: 700,
                  textDecoration: "underline",
                }}
                onClick={() => {
                  window.open(`https://wa.me/${"+918125394443"}`, "_blank");
                }}
              >
                +91 81253 94443
              </span>
            </Typography>
          </Box>
          <Typography display={{ xs: "none", md: "block" }}>|</Typography>
          <Typography>
            Contact:{" "}
            <span
              style={{
                cursor: "pointer",
                fontWeight: 700,
                textDecoration: "underline",
              }}
              onClick={() => {
                window.open(
                  `mailto:` + "susrutha@fintechcareerpath.com",
                  "_self",
                );
              }}
            >
              susrutha@fintechcareerpath.com
            </span>
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Subheader;
