// src/pages/Projects.js
import React from "react";
import darkModeVideo from "../assets/backgroundVids/darkMode_bg.mp4";
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Typography,
  Stack,
  IconButton,
  useTheme,
} from "@mui/material";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import darkVideo from "../assets/backgroundVids/darkMode_bg.mp4";
import ThreeBackground from "../components/ThreeBackground";

import WeddingProject from "../components/projects/Wedding_project";
import BakeryProject from "../components/projects/Bakery_project";

function Projects({ darkMode }) {
  const theme = useTheme();

  const projects = [WeddingProject, BakeryProject];

  return (
    <Box
      sx={{
        minHeight: "100vh",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <ThreeBackground />
      {/* Video for dark mode */}
      {/* <video
        autoPlay
        loop
        muted
        playsInline
        style={{
          pointerEvents: "none",
          display: darkMode ? "block" : "none",
          filter: "saturate(80%) brightness(65%)",
        }}
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source rel="preload" src={darkModeVideo} type="video/mp4" />
      </video>

      <video
        autoPlay
        loop
        muted
        playsInline
        style={{
          pointerEvents: "none",
          display: !darkMode ? "block" : "none",
          filter: "hue-rotate(195deg) saturate(80%) brightness(65%)",
        }}
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source rel="preload" src={darkModeVideo} type="video/mp4" />
      </video> */}

      {/* 🔹 Overlay for slight tint depending on mode */}
      <Box
        sx={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor:
            theme.palette.mode === "dark"
              ? "rgba(0,0,0,0.4)"
              : "rgba(255,255,255,0.4)",
          zIndex: -1,
        }}
      />

      {/* 🔹 Foreground content */}
      <Box
        sx={{
          py: { xs: 6, sm: 10 },
          px: { xs: 2, sm: 6, md: 12 },
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Stack spacing={6} sx={{ width: "100%" }}>
          {projects.map((project, index) => (
            <Card
              key={index}
              sx={{
                display: "flex",
                flexDirection: { xs: "column", md: "row" },
                width: "100%",
                borderRadius: 4,
                overflow: "hidden",
                backdropFilter: "blur(0px) saturate(180%)",
                backgroundColor:
                  theme.palette.mode === "dark"
                    ? "rgba(255, 255, 255, 0.06)"
                    : "rgba(255, 255, 255, 0.4)",
                border:
                  theme.palette.mode === "dark"
                    ? "1px solid rgba(255, 255, 255, 0.2)"
                    : "1px solid rgba(0, 0, 0, 0.1)",
                boxShadow: "0 8px 32px rgba(0,0,0,0.2)",
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
                "&:hover": {
                  transform: "translateY(-8px)",
                  boxShadow:
                    theme.palette.mode === "dark"
                      ? "0 12px 40px rgba(255, 255, 255, 0.4)"
                      : "0 12px 40px rgba(0,0,0,0.5)",
                },
              }}
            >
              <CardMedia
                component="img"
                image={project.image}
                alt={project.title}
                sx={{
                  width: project.imageOptions?.width || {
                    xs: "100%",
                    md: "40%",
                    lg: "50%",
                  },
                  objectFit: project.imageOptions?.objectFit || "cover",
                  objectPosition:
                    project.imageOptions?.objectPosition || "center",
                }}
              />
              <CardContent
                sx={{
                  flex: 1,
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  p: 4,
                }}
              >
                <Typography variant="h4" sx={{ mb: 2, fontWeight: 600 }}>
                  {project.title}
                </Typography>
                <Typography variant="h5" sx={{ mb: 2 }}>
                  {project.description}
                </Typography>
                <Typography variant="h6" sx={{ mb: 2 }}>
                  <strong>Tech Stack:</strong> {project.tech.join(", ")}
                </Typography>
                <Stack direction="row" spacing={2}>
                  {project.live && (
                    <IconButton
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      color="secondary"
                    >
                      <FaExternalLinkAlt />
                    </IconButton>
                  )}
                  {project.github && (
                    <IconButton
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      color="secondary"
                    >
                      <FaGithub />
                    </IconButton>
                  )}
                </Stack>
              </CardContent>
            </Card>
          ))}
        </Stack>
      </Box>
    </Box>
  );
}

export default Projects;
