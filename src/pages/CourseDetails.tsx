import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Button,
  CardMedia,
  Grid,
  List,
  ListItem,
  ListItemText,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import theme from "../../styles/theme";
import { GetCourseDetailsById } from "../services/courseService";
import { useParams } from "react-router-dom";
import { htmlMarkup } from "../helpers/utils";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MenuBookIcon from "@mui/icons-material/MenuBook";

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
      <Box sx={{ position: "relative" }}>
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
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: { xs: "90%", md: "100%" },
          }}
        >
          <Typography
            color="white"
            sx={{
              width: { xs: "100%", md: "50%" },
              fontWeight: 700,
              letterSpacing: 2,
              fontSize: {
                xs: 20,
                lg: 35,
              },
            }}
          >
            {courseDetails?.title}
          </Typography>
          <Typography
            color="secondary.main"
            sx={{
              width: { xs: "100%", md: "70%" },
              fontWeight: 700,
              letterSpacing: 2,
              fontSize: {
                xs: 13,
                lg: 20,
              },
            }}
          >
            {courseDetails?.contentSubTitle}
          </Typography>
        </Box>
      </Box>
      <Box mt={4} className="container" sx={{ px: { xs: 2, lg: 0 } }}>
        <Typography variant="h4" fontWeight={600} color="primary.main" pb={2}>
          What You'll Learn:
        </Typography>
        <Box mb={5}>
          <Grid container spacing={2}>
            {courseDetails?.courseData?.map((section: any, index: number) => (
              <Grid size={12}>
                <Accordion
                  defaultExpanded
                  key={index}
                  sx={{
                    mb: 1,
                    borderRadius: 2,

                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon sx={{ color: "#fff" }} />}
                    sx={{
                      backgroundColor: theme.palette.secondary.light,
                      borderRadius: 1,
                    }}
                  >
                    <Box display={"flex"} gap={1} alignItems={"center"}>
                      <MenuBookIcon sx={{ color: "#fff" }} />
                      <Typography fontWeight={600} color="#fff">
                        {section.title}
                      </Typography>
                    </Box>
                  </AccordionSummary>

                  <AccordionDetails>
                    <List dense>
                      {section.points.map((point: any, i: number) => (
                        <ListItem key={i} sx={{ pl: 1 }}>
                          <ListItemText
                            primary={`• ${point}`}
                            primaryTypographyProps={{
                              fontSize: 14,
                              color: "#333",
                            }}
                          />
                        </ListItem>
                      ))}
                    </List>
                  </AccordionDetails>
                </Accordion>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Box>
    </Box>
  );
};

export default CourseDetails;
