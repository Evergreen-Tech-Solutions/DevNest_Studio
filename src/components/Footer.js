import React, { useState } from "react";
import {
  Box,
  Container,
  Typography,
  useTheme,
  useMediaQuery,
  IconButton,
  Drawer,
  Divider,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";

function Footer() {
  const currentYear = new Date().getFullYear();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const [open, setOpen] = useState(false);

  if (!isMobile) return null;

  return (
    <>
      {/* Hamburger Icon (Fixed Bottom-Right) */}
      <IconButton
        onClick={() => setOpen(true)}
        sx={{
          position: "fixed",
          bottom: 16,
          right: 16,
          zIndex: 1301,
          backgroundColor: "primary.main",
          color: "white",
          "&:hover": {
            backgroundColor: "primary.dark",
          },
        }}
      >
        <MenuIcon />
      </IconButton>

      {/* Bottom Drawer */}
      <Drawer
        anchor="bottom"
        open={open}
        onClose={() => setOpen(false)}
        PaperProps={{
          sx: {
            borderTopLeftRadius: 12,
            borderTopRightRadius: 12,
            padding: 3,
            backgroundColor: "background.paper",
          },
        }}
      >
        {/* Close Button */}
        <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
          <IconButton onClick={() => setOpen(false)}>
            <CloseIcon />
          </IconButton>
        </Box>

        {/* Footer Content */}
        <Container
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 3,
          }}
        >
          {/* Links */}
          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              gap: 2,
              justifyContent: "center",
              "& a": {
                color: "text.primary",
                textDecoration: "none",
                fontWeight: 500,
                fontSize: "1rem",
                transition: "color 0.3s ease-in-out",
                "&:hover": {
                  color: "#20b2aa",
                },
              },
            }}
          >
            <Link to="/faq">FAQ</Link>
            <Link to="/acknowledgements">Acknowledgements</Link>
            <Link to="/privacy">Privacy Policy</Link>
            <Link to="/terms">Terms & Conditions</Link>
          </Box>

          <Divider sx={{ width: "100%" }} />

          {/* Social Icons */}
          <Box
            sx={{
              display: "flex",
              gap: 3,
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
            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
              <FaLinkedin size={24} />
            </a>
            <a href="https://www.github.com" target="_blank" rel="noopener noreferrer">
              <FaGithub size={24} />
            </a>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
              <FaInstagram size={24} />
            </a>
          </Box>

          {/* Footer Text */}
          <Typography
            variant="body2"
            sx={{
              fontFamily: "Quicksand, serif",
              fontSize: "0.9rem",
              color: "text.white",
              mt: 2,
            }}
          >
            © {currentYear} DevNest Studio
          </Typography>
        </Container>
      </Drawer>
    </>
  );
}

export default Footer;
