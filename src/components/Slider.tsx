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
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import MuiDialog from "./MuiDialog";
import RegisterForm from "../pages/Forms/RegisterForm";
import { useNavigate } from "react-router-dom";

type Props = {};

const expertIds = [1, 5];

const SliderMain = (props: Props) => {
  const data = courses;
  const [openDialog, setOpenDialog] = React.useState<any>({ isOpen: false });
  const [selectedCourse, setSelectedCourse] = React.useState<any>();
  const history = useNavigate();
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
          <Card sx={{ position: "relative" }}>
            <Box
              sx={{
                position: "absolute",
                top: 0,
                left: 0,
                backgroundColor: expertIds?.includes(course.id)
                  ? theme.palette.primary.main
                  : theme.palette.secondary.main,
                color: "white",
                px: 1,
                py: 0.5,
                borderBottomRightRadius: 30,
              }}
            >
              <Typography variant="h6" fontWeight={600} pr={2}>
                {expertIds?.includes(course.id)
                  ? "Core Concepts"
                  : "Beginner Friendly"}
              </Typography>
            </Box>
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
              <Box sx={{ display: "flex", alignItems: "top", mt: 2 }}>
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
              sx={{
                p: 2,
                gap: 1,
                display: { xs: "block", md: "flex" },
                justifyContent: "right",
              }}
            >
              <Button
                variant="outlined"
                fullWidth
                sx={{
                  borderColor: "secondary.light",
                  color: "secondary.light",
                  fontWeight: 600,
                  mb:{xs: 1, md: 0}
                }}
                onClick={() => {
                  history(`/course-details/${course.id}`);
                }}
              >
                Course Details
              </Button>
              <Button
                variant="contained"
                fullWidth
                sx={{
                  backgroundColor: "secondary.light",
                  color: "white",
                  fontWeight: 600,
                }}
                onClick={() => {
                  setOpenDialog({ isOpen: true, title: "Register" });
                  setSelectedCourse(course);
                }}
              >
                <Box display={"flex"} alignItems="center" gap={1}>
                  <ThumbUpIcon />
                  <Typography variant="button">Interested</Typography>
                </Box>
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
      {openDialog?.isOpen && (
        <MuiDialog
          openDialog={openDialog}
          setOpenDialog={setOpenDialog}
          actions={
            <Button
              type="submit"
              form="register-form"
              variant="contained"
              fullWidth
              sx={{ height: 40, width: 200 }}
            >
              Submit
            </Button>
          }
        >
          <RegisterForm courseId={selectedCourse?.id} />
        </MuiDialog>
      )}
    </Box>
  );
};

export default SliderMain;
