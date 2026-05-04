import React from "react";
import { slickSettings } from "../helpers/utils";
import Slider from "react-slick";
import { Box, Button, Card, Tooltip, Typography } from "@mui/material";
import theme from "../../styles/theme";
import LanguageIcon from "@mui/icons-material/Language";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import DoneIcon from "@mui/icons-material/Done";
import LiveTvIcon from "@mui/icons-material/LiveTv";
import courses from "../helpers/courses.json";

type Props = {};

const SliderMain = (props: Props) => {
  const data = courses;
  const CourseCard = ({ course }: { course: any }) => {
    return (
      <Box sx={{ padding: 2 }}>
        <Tooltip
          arrow
          title={
            <Box p={1}>
              <Typography variant="h6" fontWeight={600}>
                What you'll learn:
              </Typography>
              {course?.whatYouWillLearn.map((point: string, index: number) => (
                <Box
                  display={"flex"}
                  alignItems="top"
                  mt={1}
                  mb={1}
                  key={index}
                >
                  <DoneIcon sx={{ mr: 1, mt: 0.5 }} />
                  <Typography>{point}</Typography>
                </Box>
              ))}
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
                <LanguageIcon sx={{ mt: 2.5 }} />
                <Typography
                  variant="h5"
                  fontWeight={600}
                  sx={{
                    p: 2,
                    overflow: "hidden",
                    display: "-webkit-box",
                    WebkitBoxOrient: "vertical",
                    WebkitLineClamp: 3,
                    textOverflow: "ellipsis",
                    lineHeight: "1.4em",
                    maxHeight: "3.2em",
                    minHeight: "3.2em",
                  }}
                >
                  {course.title}
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
            <Typography
              sx={{
                p: 2,
                overflow: "hidden",
                display: "-webkit-box",
                WebkitBoxOrient: "vertical",
                WebkitLineClamp: 3,
                textOverflow: "ellipsis",
                lineHeight: "1.4em",
                maxHeight: "2.8em",
                minHeight: "2.8em",
                mb: 2,
              }}
            >
              {course.description}
            </Typography>
            <Box p={1} sx={{ display: { xs: "block", md: "none" } }}>
              <Typography variant="h6" fontWeight={600}>
                What you'll learn:
              </Typography>
              {course?.whatYouWillLearn.map((point: string, index: number) => (
                <Box
                  display={"flex"}
                  alignItems="top"
                  mt={1}
                  mb={1}
                  key={index}
                >
                  <DoneIcon sx={{ mr: 1, mt: 0.5 }} />
                  <Typography>{point}</Typography>
                </Box>
              ))}
            </Box>

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
        {data?.courses?.length > 0 &&
          data?.courses?.map((course: any) => (
            <div>
              <CourseCard course={course} />
            </div>
          ))}
      </Slider>
    </Box>
  );
};

export default SliderMain;
