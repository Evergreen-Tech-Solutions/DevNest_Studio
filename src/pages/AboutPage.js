import React from "react";
import Styles from "../styles/AboutPage.module.css";
import aboutImage from "../images/aboutImage.jpg";
import {
  Typography,
  Container,
  Box,
  Grid,
  Button,
  useTheme,
} from "@mui/material";
import { Link } from "react-router-dom";
import { useEffect } from "react";

function AboutPage({ darkMode }) {
  const theme = useTheme();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className={theme.palette.mode === "dark" ? Styles.darkMode : ""}>
      <Container maxWidth="lg">
        <Box py={3} textAlign="center" className={Styles.introSection}>
          <Typography
            variant="h2"
            gutterBottom
            className={Styles.title}
            sx={{
              color: theme.palette.text.primary, // Adjust title color dynamically
            }}
          >
            Welcome to The DevNest
          </Typography>
          <Typography
            variant="h5"
            paragraph
            className={Styles.subtitle}
            sx={{ color: theme.palette.text.secondary }} // Adjust subtitle for better contrast
          >
            Where your digital aspirations become our mission.
          </Typography>
        </Box>
        <Grid container spacing={5}>
          <Grid item md={6}>
            <Typography paragraph className={Styles.bodyText}>
              Rooted in the vibrant landscapes of British Columbia, our
              collective spans from the scenic shores of Vancouver Island to the
              bustling streets of the Lower Mainland. We are a collective of
              software developers, web designers, and marketing experts united
              by a shared commitment to empowering businesses with tailor-made
              web and app solutions.
            </Typography>
            <Box className={Styles.sectionBackground}>
              <Typography variant="body1" paragraph className={Styles.bodyText}>
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
            <Typography variant="body1" paragraph className={Styles.bodyText}>
              At The DevNest, collaboration is the cornerstone of our success.
              Recognizing that every small business has its unique story and set
              of challenges, we dedicate time to understanding your specific
              needs.
            </Typography>

            <Typography
              variant="h6"
              gutterBottom
              className={Styles.bodySubtitle}
            >
              Begin your digital journey with The DevNest
            </Typography>
            <Button
              variant="contained"
              color="secondary"
              size="large"
              href="/ourteam"
              sx={{ fontWeight: "bold" }}
            >
              Meet Our Team
            </Button>
          </Grid>
          <Grid
            item
            md={6}
            xs={12} // Ensures full width on smaller screens
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                height: "100%",
                width: "100%",
                margin: "0 auto", // Ensures centering for all screen sizes
                textAlign: "center", // Keeps text alignment centered
              }}
            >
              <Box
                sx={{
                  width: "100%",
                  maxWidth: "350px",
                  aspectRatio: "3 / 5",
                  overflow: "hidden",
                  borderRadius: "12px",
                  boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
                  backgroundColor: theme.palette.background.paper,
                }}
              >
                <img
                  src={aboutImage}
                  alt="Description"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                  }}
                />
              </Box>
            </Box>
            <Box
              textAlign="center"
              sx={{
                width: "100%",
                marginTop: "-1rem",
              }}
            >
              <Typography
                variant="subtitle1"
                paragraph
                className={Styles.bodyText}
              >
                <Link
                  to="/ourteam#top"
                  className="link"
                  style={{
                    textDecoration: "none",
                    color:
                      theme.palette.mode === "dark"
                        ? "#90caf9"
                        : theme.palette.primary.main, // Light blue for dark mode
                  }}
                  onMouseEnter={(e) =>
                    (e.target.style.textDecoration = "underline")
                  }
                  onMouseLeave={(e) => (e.target.style.textDecoration = "none")}
                >
                  Our Founders
                </Link>
                ,{" "}
                <Link
                  to="/ourteam#jameson"
                  className="link"
                  style={{
                    textDecoration: "none",
                    color:
                      theme.palette.mode === "dark"
                        ? "#90caf9"
                        : theme.palette.primary.main, // Light blue for dark mode
                  }}
                  onMouseEnter={(e) =>
                    (e.target.style.textDecoration = "underline")
                  }
                  onMouseLeave={(e) => (e.target.style.textDecoration = "none")}
                >
                  Jameson
                </Link>{" "}
                and{" "}
                <Link
                  to="/ourteam#milad"
                  className="link"
                  style={{
                    textDecoration: "none",
                    color:
                      theme.palette.mode === "dark"
                        ? "#90caf9"
                        : theme.palette.primary.main, // Light blue for dark mode
                  }}
                  onMouseEnter={(e) =>
                    (e.target.style.textDecoration = "underline")
                  }
                  onMouseLeave={(e) => (e.target.style.textDecoration = "none")}
                >
                  Milad
                </Link>{" "}
                in Cathedral Grove.
              </Typography>
            </Box>
          </Grid>
        </Grid>

        {/* Call to Action Section */}
        <Box
          mt={8}
          textAlign="center"
          className={Styles.ctaSection}
          sx={{
            backgroundColor: theme.palette.background.ctaSection,
            color: theme.palette.text.primary,
          }}
        >
          <Typography variant="h4" gutterBottom>
            Ready to Transform Your Business?
          </Typography>
          <Typography variant="h6" paragraph>
            Contact us today to start your digital transformation journey.
          </Typography>
          <Button
            variant="contained"
            color="primary"
            size="large"
            href="/contact"
            sx={{ fontWeight: "bold" }}
          >
            Get in Touch
          </Button>
        </Box>
      </Container>
    </div>
  );
}

export default AboutPage;
