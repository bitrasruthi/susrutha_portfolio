import React from "react";
import { slickSettings } from "../helpers/utils";
import Slider from "react-slick";
import { Box, Button, Card, Tooltip, Typography } from "@mui/material";
import theme from "../../styles/theme";
import LanguageIcon from "@mui/icons-material/Language";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import DoneIcon from "@mui/icons-material/Done";
import LiveTvIcon from "@mui/icons-material/LiveTv";

type Props = {};

const SliderMain = (props: Props) => {
  const CourseCard = () => {
    return (
      <Box sx={{ padding: 2 }}>
        <Tooltip
          arrow
          title={
            <Box p={1}>
              <Typography variant="h6" fontWeight={600}>
                What you'll learn:
              </Typography>
              <Box display={"flex"} alignItems="top" mt={1} mb={1}>
                <DoneIcon sx={{ mr: 1, mt: 0.5 }} />
                <Typography>
                  Master all core ISO 20022 payment messages - pain.001,
                  pain.002, pacs.008, pacs.002, pacs.004, camt.056, camt.029,
                  camt.054 etc. with complete understanding
                </Typography>
              </Box>
              <Box display={"flex"} alignItems="top" mt={1} mb={1}>
                <DoneIcon sx={{ mr: 1, mt: 0.5 }} />
                <Typography>
                  Understand settlement methods and correspondent banking -
                  INDA, INGA, COVE, CLRG settlement, nostro/vostro accounts, and
                  how banks actually move money globally
                </Typography>
              </Box>
              <Box display={"flex"} alignItems="top" mt={1} mb={1}>
                <DoneIcon sx={{ mr: 1, mt: 0.5 }} />
                <Typography>
                  Read and troubleshoot ISO 20022 messages - Decode XML
                  structure, interpret status codes, fix errors, and understand
                  complete end-to-end payment flows
                </Typography>
              </Box>
              <Box display={"flex"} alignItems="top" mt={1} mb={1}>
                <DoneIcon sx={{ mr: 1, mt: 0.5 }} />
                <Typography>
                  Apply practical skills immediately - Follow real payment
                  examples and learn automated reconciliation techniques used in
                  modern banking
                </Typography>
              </Box>
            </Box>
          }
          slotProps={{
            tooltip: {
              sx: {
                bgcolor: "#f3f3f3",
                color: "#000000",
                fontSize: "14px",
                borderRadius: "10px",
              },
            },
            arrow: {
              sx: {
                color: "#ffffff",
              },
            },
          }}
          placement="right"
        >
          <Card>
            <Typography
              variant="h5"
              fontWeight={600}
              sx={{
                backgroundColor: theme.palette.secondary.light,
                color: "white",
                px: 2,
                pt: 2,
                pb: 3,
                borderRadius: 1,
              }}
            >
              <Box sx={{ display: "flex", alignItems: "top" }}>
                <LanguageIcon sx={{ mr: 1, mt: 0.5 }} />
                <Typography variant="h5" fontWeight={600}>
                  Mastering ISO 20022: The Complete Payments Course
                </Typography>
              </Box>
              <Typography
                variant="body2"
                sx={{
                  ml: "auto",
                  mt: 3,
                  display: "flex",
                  justifyContent: "space-between",
                  color: "white",
                }}
              >
                <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
                  <LiveTvIcon sx={{ width: 15, height: 15 }} />
                  <Typography pt={0.3}>Live Session</Typography>
                </Box>
                <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
                  <AccessTimeIcon sx={{ width: 15, height: 15 }} />{" "}
                  <Typography pt={0.3}>8 hours</Typography>
                </Box>
              </Typography>
            </Typography>
            <Typography sx={{ p: 2 }}>
              A Practical Guide to ISO 20022: Master CBPR+ messages, XML,
              Message Schema, Core Parties, and Real Payment Flows
            </Typography>

            <Box
              sx={{ p: 2, gap: 1, display: "flex", justifyContent: "right" }}
            >
              <Button
                variant="outlined"
                sx={{
                  borderColor: "secondary.light",
                  color: "secondary.light",
                  fontWeight: 600,
                }}
              >
                Course Details
              </Button>
              <Button
                variant="contained"
                sx={{
                  backgroundColor: "secondary.light",
                  color: "white",
                  fontWeight: 600,
                }}
              >
                Enroll Now
              </Button>
            </Box>
          </Card>
        </Tooltip>
      </Box>
    );
  };
  return (
    <Box sx={{ width: "100%", overflow: "hidden" }}>
      <Slider {...slickSettings}>
        <div>
          <CourseCard />
        </div>{" "}
        <div>
          <CourseCard />
        </div>{" "}
        <div>
          <CourseCard />
        </div>{" "}
        <div>
          <CourseCard />
        </div>{" "}
        <div>
          <CourseCard />
        </div>
      </Slider>
    </Box>
  );
};

export default SliderMain;
