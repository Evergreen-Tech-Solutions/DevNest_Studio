import React from "react";
import { Box, Typography, Container, Grid, Avatar, Link } from "@mui/material";
import { FaLinkedin, FaGithub, FaGlobe } from "react-icons/fa";

function OurTeamPage() {
  return (
    <Container maxWidth="lg" sx={{ mt: 4 }}>
      {/* Page Title */}
      <Box id="top" py={4} textAlign="center">
        <Typography variant="h3" gutterBottom>
          Meet Our Team
        </Typography>
        <Typography variant="body1">
          Learn more about the talented individuals driving DevNest Studio.
        </Typography>
      </Box>

      {/* Jameson's Section */}
      <Box id="jameson" py={4}>
        <Grid container spacing={4} alignItems="center">
          {/* Placeholder for Jameson's Image */}
          <Grid item xs={12} md={4} textAlign="center">
            <Avatar
              alt="Jameson"
              src="" // Replace with Jameson's image URL
              sx={{
                width: 150,
                height: 150,
                margin: "0 auto",
                bgcolor: "primary.main",
                fontSize: "2rem",
              }}
            >
              J
            </Avatar>
          </Grid>

          {/* Jameson's Bio */}
          <Grid item xs={12} md={8}>
            <Typography variant="h4" gutterBottom>
              Jameson
            </Typography>
            <Typography variant="body1" paragraph>
              Jameson is an expert in software engineering, specializing in AI
              and backend development. With years of experience building
              scalable systems, he brings technical excellence and creativity to
              every project.
            </Typography>
            <Typography variant="body1" paragraph>
              He is passionate about leveraging technology to solve real-world
              problems and is constantly exploring new innovations in artificial
              intelligence, cloud computing, and data science.
            </Typography>
            <Typography variant="body1" paragraph>
              Outside of work, Jameson enjoys contributing to open-source
              projects and mentoring aspiring developers. He believes in the
              power of collaboration and is committed to delivering impactful
              digital solutions.
            </Typography>

            {/* Social Media Links */}
            <Box display="flex" gap={2} mt={2}>
              <Link
                href="https://www.linkedin.com/in/jameson" // Replace with actual LinkedIn URL
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Jameson's LinkedIn"
              >
                <FaLinkedin size={24} />
              </Link>
              <Link
                href="https://github.com/jameson" // Replace with actual GitHub URL
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Jameson's GitHub"
              >
                <FaGithub size={24} />
              </Link>
              <Link
                href="https://jameson-portfolio.com" // Replace with actual portfolio URL
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Jameson's Portfolio"
              >
                <FaGlobe size={24} />
              </Link>
            </Box>
          </Grid>
        </Grid>
      </Box>

      {/* Milad's Section */}
      <Box id="milad" py={4}>
        <Grid container spacing={4} alignItems="center">
          {/* Placeholder for Milad's Image */}
          <Grid item xs={12} md={4} textAlign="center">
            <Avatar
              alt="Milad"
              src="" // Replace with Milad's image URL
              sx={{
                width: 150,
                height: 150,
                margin: "0 auto",
                bgcolor: "primary.main",
                fontSize: "2rem",
              }}
            >
              M
            </Avatar>
          </Grid>

          {/* Milad's Bio */}
          <Grid item xs={12} md={8}>
            <Typography variant="h4" gutterBottom>
              Milad
            </Typography>
            <Typography variant="body1" paragraph>
              Milad is a visionary leader with expertise in UI/UX design and
              frontend development. His keen eye for design ensures that every
              project is both functional and visually appealing.
            </Typography>
            <Typography variant="body1" paragraph>
              With a background in graphic design and a passion for user
              experience, Milad creates intuitive interfaces that delight users
              and drive engagement.
            </Typography>
            <Typography variant="body1" paragraph>
              In his free time, Milad explores emerging trends in web design and
              enjoys collaborating with clients to bring their creative visions
              to life.
            </Typography>

            {/* Social Media Links */}
            <Box display="flex" gap={2} mt={2}>
              <Link
                href="https://www.linkedin.com/in/milad" // Replace with actual LinkedIn URL
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Milad's LinkedIn"
              >
                <FaLinkedin size={24} />
              </Link>
              <Link
                href="https://github.com/milad" // Replace with actual GitHub URL
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Milad's GitHub"
              >
                <FaGithub size={24} />
              </Link>
              <Link
                href="https://milad-portfolio.com" // Replace with actual portfolio URL
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Milad's Portfolio"
              >
                <FaGlobe size={24} />
              </Link>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}

export default OurTeamPage;
