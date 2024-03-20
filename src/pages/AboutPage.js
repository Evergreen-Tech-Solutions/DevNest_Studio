import React from "react";
import Styles from "../styles/AboutPage.module.css";
import aboutImage from "../images/aboutImage.png";
import { Typography, Container, Box, Grid } from "@mui/material";

function AboutPage() {
  return (
    <div className={Styles.aboutPage}>
      <Container maxWidth="lg">
        <Box py={8} textAlign="center" className={Styles.introSection}>
          <Typography
            variant="h2"
            color="primary"
            gutterBottom
            className={Styles.title}
          >
            Welcome to DevNest Studio
          </Typography>
          <Typography
            variant="h5"
            paragraph
            className={Styles.subtitle}
          >
            Where your digital aspirations become our mission.
          </Typography>
        </Box>
        <Grid container spacing={5}>
          <Grid item md={6}>
            <Typography
              paragraph
              color="textPrimary"
              className={Styles.bodyText}
            >
              Rooted in the vibrant landscapes of British Columbia, our
              collective spans from the scenic shores of Vancouver Island to the
              bustling streets of the Lower Mainland. We are a collective of
              software developers, web designers, and marketing experts united
              by a shared commitment to empowering businesses with tailor-made
              web and app solutions.
            </Typography>
            <Box className={Styles.sectionBackground}>
              <Typography
                variant="body1"
                paragraph
                color="textPrimary"
                className={Styles.bodyText}
              >
                Our team is adept in a wide spectrum of technologies, employing
                various programming languages and adhering to industry-leading
                practices such as object-oriented programming, relational
                database management, and systems design. Whether it's developing
                responsive websites, creating custom applications for iOS and
                Android, or leveraging the latest advancements in AI and
                business process automation, we've got the expertise to navigate
                the complexities of your digital projects. Our approach is
                bespoke, crafted to not only meet but exceed your expectations
                with solutions that are both innovative and reliable.
              </Typography>
            </Box>
            <Typography
              variant="body1"
              paragraph
              color="textPrimary"
              className={Styles.bodyText}
            >
              At DevNest Studio, collaboration is the cornerstone of our
              success. Recognizing that every small business has its unique
              story and set of challenges, we dedicate time to understanding
              your specific needs.
            </Typography>
          </Grid>
          <Grid item md={6}>
            <Box
              sx={{
                display: "flex", // Enables the use of Flexbox
                alignItems: "center", // Centers the content vertically
                justifyContent: "center", // Centers the content horizontally
                height: "100%", // Ensures the Box takes full height of its parent
                width: "100%", // Ensures the Box takes full width of its parent
                mt: "-5.5rem",
              }}
            >
              <img
                src={aboutImage}
                alt="Description"
                style={{
                  maxHeight: "75%", // Limits the image height to 75% of the Box
                  maxWidth: "75%", // Limits the image width to 75% of the Box
                  borderRadius: "12px",
                  objectFit: "cover",
                }}
              />
            </Box>
            <Box textAlign="center" sx={{ width: "100%", marginTop: "auto" }}>
              {/* Adjusts to fit below the image */}
              <Typography
                variant="h6"
                color="textPrimary"
                gutterBottom
                className={Styles.bodySubtitle}
              >
                Begin your digital journey with DevNest Studio
              </Typography>
              <Typography
                variant="subtitle1"
                paragraph
                className={Styles.bodyText}
              >
                Let's partner together to create something truly remarkable.
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default AboutPage;
