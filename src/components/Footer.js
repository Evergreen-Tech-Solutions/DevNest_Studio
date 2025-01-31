import React from "react";
import {
  Box,
  Container,
  Typography,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";

function Footer() {
  const currentYear = new Date().getFullYear();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: "primary.main",
        py: 2,
        color: theme.palette.text.primary,
        position: "sticky", // Sticks the footer at the bottom
        bottom: 0,
        zIndex: 10,
      }}
    >
      <Container
        maxWidth="lg"
        sx={{
          display: "flex",
          flexDirection: isMobile ? "column" : "row",
          justifyContent: isMobile ? "center" : "space-between",
          alignItems: "center",
          textAlign: isMobile ? "center" : "left",
          gap: 3,
        }}
      >
        {/* Resources Section */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
            gap: 2,
            justifyContent: "center",
            "& a": {
              color: "inherit",
              transition: "color 0.3s ease-in-out",
              "&:hover": {
                color: "#20b2aa",
              },
            },
          }}
        >
          <Link to="/faq" className="link">
            FAQ
          </Link>
          <Link to="/acknowledgements" className="link">
            Acknowledgements
          </Link>
          <Link to="/privacy" className="link">
            Privacy Policy
          </Link>
          <Link to="/terms" className="link">
            Terms and Conditions
          </Link>
        </Box>

        {/* Social Media Section */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 1,
          }}
        >
          <Box
            sx={{
              display: "flex",
              gap: 2,
              justifyContent: "center",
              "& a": {
                color: "inherit",
                transition: "color 0.3s ease-in-out",
                "&:hover": {
                  color: "#20b2aa",
                },
              },
            }}
          >
            <a
              href="https://www.linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin size={22} />
            </a>
            <a
              href="https://www.github.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub size={22} />
            </a>
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram size={22} />
            </a>
          </Box>
        </Box>

        {/* Footer Text */}
        <Typography
          variant="body1"
          sx={{
            mb: isMobile ? 2 : 0,
            fontFamily: "Quicksand, serif",
          }}
        >
          © {currentYear} DevNest Studio
        </Typography>
      </Container>
    </Box>
  );
}

export default Footer;
