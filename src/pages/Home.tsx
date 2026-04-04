import { Box, CardMedia, Typography } from "@mui/material";
import photo from "../assets/photo.jpeg";
import theme from "../../styles/theme";

const Home = () => {
  return (
    <Box mt={5}>
      <CardMedia
        component="img"
        src={photo}
        alt="Profile"
        sx={{
          float: "right",
          width: 300,
          height: 320,
          objectFit: "cover",
          ml: 5,
          mb: 3,
          borderRadius: 1,
        }}
      />

      <Typography variant="h5" color="secondary.main" gutterBottom>
        Welcome to my website
      </Typography>

      <Typography lineHeight={2}>
        I am a Payments Business Analyst with over 15 years of experience.
        <br />
        <br />
        I decided to run this website as over the years I have become passionate
        about payments.
        <br />
        <br />
        Especially now, I think that the payment industry is more attractive
        than ever before.
        <br />
        <br />
        One of the main factors is ISO 20022 – a new standard that has gained
        momentum.
        <br />
        <br />
        If you would like to contact me, you can do it via my{" "}
        <a
          href="https://www.linkedin.com/in/susrutha"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            textDecoration: "none",
            color: theme.palette.primary.main,
          }}
        >
          LinkedIn
        </a>{" "}
        account.
        <br />
        <br />
        <strong>What is ISO 20022?</strong>
        <br />
        <br />
        In short, it is a methodology to develop standard messages for all
        financial areas. You can learn about ISO 20022 in ISO 20022 for dummies.
        <br />
        <br />
        You can also visit the ISO 20022 official website www.iso20022.org.
        However, visiting the ISO 20022 website is only the starting point.
        There are many ways ISO 20022-compliant messages are implemented in the
        market.
        <br />
        <br />
        The way ISO 20022 is used in cross-border payments, high-value payments
        systems, or retail payment systems varies a lot. The purpose of this
        website is not to provide a comprehensive course about payments or to
        explain the basics.
        <br />
        <br />
        It’s more about analysis of the payment messages/schemes/systems which
        are based on the ISO 20022 standard. I assume that the reader has some
        basic knowledge about payments.
        <br />
        <br />
        Having said that, I am committed to making things as simple as possible,
        so they are understandable to a wide audience. As a basis for my
        analysis, I use publicly available documents and information.
        <br />
        <br />
        Needless to say, the information provided on this website reflects only
        my personal opinion based on the analyzed documents. If the content of
        this website helps anyone to become more familiar with the topic of
        payments, I would be more than happy.
      </Typography>

      <Box sx={{ clear: "both" }} />
    </Box>
  );
};

export default Home;
