import { Box, Button, CardMedia, Grid, Typography } from "@mui/material";
import theme from "../../styles/theme";
import EastIcon from "@mui/icons-material/East";
import SliderMain from "../components/Slider";
import learning from "../assets/icons/learning.png";
import face from "../assets/icons/face.png";
import guide from "../assets/icons/guide.png";
import skill from "../assets/icons/skill.png";
import noCode from "../assets/icons/no-code.png";
import target from "../assets/icons/target.png";

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
                lg: 50,
              },
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
              fontSize: {
                xs: 20,
                lg: 50,
              },
            }}
          >
            BUILD YOUR FUTURE.
          </Typography>

          <Typography variant="h6" color="white" fontSize={{ xs: 12, md: 18 }}>
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
                sx={{
                  textTransform: "none",
                  fontSize: { xs: 12, md: 16 },
                  fontWeight: 600,
                }}
              >
                Start Your Payments Journey Today
              </Typography>
              <EastIcon />
            </Box>
          </Button>
        </Box>
      </Box>
      <Box className="container">
        <Box mt={5} sx={{ mx: { xs: 1 } }}>
          <Grid
            container
            spacing={2}
            alignItems="center"
            justifyContent="center"
          >
            <Grid size={12} sx={{ display: { xs: "block", md: "none" } }}>
              <Typography variant="h4" fontWeight={600} mb={2}>
                About Me
              </Typography>
            </Grid>
            <Grid size={{ xs: 12, sm: 6, md: 4 }}>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: { xs: "center", md: "flex-start" },
                }}
              >
                <CardMedia
                  className="merged-image"
                  component="img"
                  src="https://f005.backblazeb2.com/file/susruthaportfolio/photo.jpeg"
                  alt="Profile"
                  sx={{
                    width: { xs: 200, md: 300 },
                    height: { xs: 200, md: 300 },
                    objectFit: "cover",
                    mr: { xs: 0, md: 5 },
                    mb: 3,
                    borderRadius: 50,
                    mixBlendMode: "multiply",
                    border: `4px solid ${theme.palette.secondary.main}`,
                  }}
                />
              </Box>
            </Grid>
            <Grid size={{ xs: 12, sm: 6, md: 8 }}>
              <Typography
                variant="h4"
                fontWeight={600}
                mb={2}
                sx={{ display: { xs: "none", md: "block" } }}
              >
                About Me
              </Typography>
              <Typography
                variant="body1"
                fontSize={{ xs: 12, md: 16 }}
                lineHeight={1.8}
              >
                I am a Banking & Payments domain professional with experience
                working across banking and financial systems. Over the years,
                I’ve developed a strong passion for the payments
                domain—especially as it continues to evolve rapidly with new
                technologies and global standards. Today, the payments industry
                offers more opportunities than ever, driven by innovations like
                ISO 20022, real-time payments, and digital banking
                transformation. Through this platform, my goal is to simplify
                complex payment concepts and share practical, real-world
                knowledge that helps others build a strong foundation and grow
                confidently in the Banking IT and Payments domain.
              </Typography>
            </Grid>
          </Grid>
        </Box>
      </Box>
      <Box
        sx={{
          backgroundColor: theme.palette.primary.main,
          py: 5,
          px: { xs: 1, md: 0 },
        }}
      >
        <Box className="container" mb={3}>
          <Typography variant="h4" color="white">
            What We Offer
          </Typography>
          <SliderMain />
        </Box>
      </Box>
      <Box className="container">
        <Box className="container" py={5} sx={{ mx: { xs: 1, md: 0 } }}>
          <Typography variant="h4" fontWeight={600} mb={5}>
            Why We Are Unique?
          </Typography>
          <Grid container spacing={2} mt={1}>
            <Grid size={{ xs: 12, sm: 6 }}>
              <Box display={"flex"} gap={1} alignItems={"flex-start"} mb={3}>
                <img src={learning} alt="Learning" width={30} height={30} />
                <Typography variant="h5" mb={3}>
                  Clear learning path — no confusion, structured guidance
                </Typography>
              </Box>
              <Box display={"flex"} gap={1} alignItems={"flex-start"} mb={3}>
                <img src={face} alt="Face" width={30} height={30} />
                <Typography variant="h5" mb={3}>
                  Your doubts are addressed during one-to-one sessions
                </Typography>
              </Box>
              <Box display={"flex"} gap={1} alignItems={"flex-start"} mb={3}>
                <img src={target} alt="Target" width={30} height={30} />
                <Typography variant="h5" mb={3}>
                  Focused learning for the banking & payments domain — no need
                  to search for the scope
                </Typography>
              </Box>
            </Grid>
            <Grid size={{ xs: 12, sm: 6 }}>
              <Box display={"flex"} gap={1} alignItems={"flex-start"} mb={3}>
                <img src={guide} alt="Guide" width={30} height={30} />
                <Typography variant="h5" mb={3}>
                  Mentoring and guidance toward payments-focused roles
                </Typography>
              </Box>
              <Box display={"flex"} gap={1} alignItems={"flex-start"} mb={3}>
                <img src={skill} alt="Skill" width={30} height={30} />
                <Typography variant="h5" mb={3}>
                  Designed for those aiming to build skills in banking &
                  payments
                </Typography>
              </Box>
              <Box display={"flex"} gap={1} alignItems={"flex-start"} mb={3}>
                <img src={noCode} alt="No Code" width={30} height={30} />
                <Typography variant="h5" mb={3}>
                  Simple explanations — no coding required
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </>
  );
};

export default Home;
