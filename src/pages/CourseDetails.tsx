import { Box, Button, CardMedia, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import theme from "../../styles/theme";
import { GetCourseDetailsById } from "../services/courseService";
import { useParams } from "react-router-dom";

const CourseDetails = () => {
  const { id } = useParams();
  const [courseDetails, setCourseDetails] = useState<any>();

  useEffect(() => {
    if (id) {
      const result = GetCourseDetailsById(Number(id));
      if (result) {
        setCourseDetails(result);
      }
    }
  }, [id]);

  console.log(courseDetails);

  return (
    <Box>
      <Box>
        <CardMedia
          component="img"
          src="https://f005.backblazeb2.com/file/susruthaportfolio/banner4.png"
          alt="Banner"
          sx={{
            height: {
              xs: 220,
              sm: 320,
              md: 450,
              lg: 300,
            },
            objectFit: "cover",
            display: "block",
            overflow: "hidden",
          }}
        />
        <Box
          className="container"
          sx={{
            position: "absolute",
            top: { xs: "65%", md: "30%" },
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: { xs: "90%", md: "100%" },
          }}
        >
          <Typography
            color="white"
            sx={{
              fontWeight: 700,
              letterSpacing: 5,
              fontSize: {
                xs: 20,
                lg: 30,
              },
            }}
          >
            {courseDetails?.title}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default CourseDetails;
