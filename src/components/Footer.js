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
        }}
      >
        <Typography variant="body1" sx={{ mb: isMobile ? 2 : 0, fontFamily: "Quicksand, serif",}}>
          © {currentYear} DevNest Studio
        </Typography>
      </Container>
    </Box>
  );
}

export default Footer;
