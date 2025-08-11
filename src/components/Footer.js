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

  const footerContent = (
    <Container
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 1.5,
        py: isMobile ? 0 : 2,
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
        <a
          href="https://www.linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin size={24} />
        </a>
        <a
          href="https://www.github.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub size={24} />
        </a>
        <a
          href="https://www.instagram.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagram size={24} />
        </a>
      </Box>

      {/* Footer Text */}
      <Typography
        variant="body2"
        sx={{
          fontFamily: "Quicksand, serif",
          fontSize: "1rem",
          color: theme.palette.mode === "dark" ? "#ffffffb3" : "#444",
          mt: 1,
        }}
      >
        © {currentYear} DevNest Studio
      </Typography>
    </Container>
  );

  return (
    <>
      {/* Mobile Only: Floating Hamburger */}
      {isMobile && (
        <>
          <IconButton
            onClick={() => setOpen(true)}
            sx={{
              position: "fixed",
              bottom: 16,
              right: 16,
              zIndex: 1301,
              backgroundColor:
                theme.palette.mode === "light"
                  ? "#00a89763"
                  : "primary.main",
              color: "#00a896",
              backdropFilter: "blur(6px)",
              boxShadow: "0 2px 6px #00a89763",
              borderRadius: "12px",
              "&:hover": {
                backgroundColor:
                  theme.palette.mode === "light"
                    ? "#00a89763"
                    : "primary.dark",
              },
            }}
          >
            <MenuIcon />
          </IconButton>

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
            <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
              <IconButton onClick={() => setOpen(false)}>
                <CloseIcon />
              </IconButton>
            </Box>
            {footerContent}
          </Drawer>
        </>
      )}

      {/* Desktop Only: Static Footer */}
      {!isMobile && (
        <Box
          component="footer"
          sx={{
            mt: 2,
            backgroundColor: "background.default",
            color: "text.primary",
            borderTop: "1px solid #e0e0e0",
          }}
        >
          {footerContent}
        </Box>
      )}
    </>
  );
}

export default Footer;
