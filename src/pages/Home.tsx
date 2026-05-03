import { Box, Button, CardMedia, Grid, Typography } from "@mui/material";
import theme from "../../styles/theme";
import EastIcon from "@mui/icons-material/East";
import SliderMain from "../components/Slider";

const Home = () => {
  return (
    <>
      <Box sx={{ width: "100%", position: "relative" }}>
        <CardMedia
          component="img"
          src="https://f005.backblazeb2.com/file/susruthaportfolio/banner4.png"
          alt="Banner"
          sx={{
            height: {
              xs: 220,
              sm: 320,
              md: 450,
              lg: 580,
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
            width: "100%",
          }}
        >
          <Typography
            variant="h2"
            color="white"
            sx={{
              fontWeight: 700,
              letterSpacing: 5,
            }}
          >
            MASTER PAYMENTS.
          </Typography>
          <Typography
            variant="h2"
            color="secondary.main"
            sx={{
              fontWeight: 700,
              letterSpacing: 5,
            }}
          >
            BUILD YOUR FUTURE.
          </Typography>

          <Typography variant="h6" color="white" fontSize={18}>
            Become a{" "}
            <span
              style={{ color: theme.palette.secondary.main, fontWeight: 700 }}
            >
              Top 1%
            </span>{" "}
            payments specialist.
          </Typography>

          <Button
            disableRipple
            variant="contained"
            color="secondary"
            sx={{ mt: 3 }}
          >
            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
              <Typography
                sx={{ textTransform: "none", fontSize: 16, fontWeight: 600 }}
              >
                Start Your Payments Journey Today
              </Typography>
              <EastIcon />
            </Box>
          </Button>
        </Box>
      </Box>
      <Box className="container" mt={5}>
        <Grid container spacing={2} alignItems="center" justifyContent="center">
          <Grid size={12}></Grid>
          <Grid size={4}>
            <CardMedia
              className="merged-image"
              component="img"
              src={
                "https://f005.backblazeb2.com/file/susruthaportfolio/photo.jpeg"
              }
              alt="Profile"
              sx={{
                float: "left",
                width: 300,
                height: 320,
                objectFit: "cover",
                mr: 5,
                mb: 3,
                borderRadius: 50,
                mixBlendMode: "multiply",
                border: `4px solid ${theme.palette.secondary.main}`,
              }}
            />
          </Grid>
          <Grid size={8}>
            <Typography variant="h4" fontWeight={600} mb={2}>
              ABOUT ME
            </Typography>
            <Typography variant="body1" fontSize={16} lineHeight={1.8}>
              I am a Banking & Payments domain professional with experience
              working across banking and financial systems. Over the years, I’ve
              developed a strong passion for the payments domain—especially as
              it continues to evolve rapidly with new technologies and global
              standards. Today, the payments industry offers more opportunities
              than ever, driven by innovations like ISO 20022, real-time
              payments, and digital banking transformation. Through this
              platform, my goal is to simplify complex payment concepts and
              share practical, real-world knowledge that helps others build a
              strong foundation and grow confidently in the Banking IT and
              Payments domain.
            </Typography>
          </Grid>
        </Grid>
      </Box>
      <Box sx={{ backgroundColor: theme.palette.primary.main, py: 5 }}>
        <Box className="container" mb={3}>
          <Typography variant="h4" color="white">
            What I Offer
          </Typography>
          <SliderMain />
        </Box>
      </Box>
    </>
  );
};

export default Home;
