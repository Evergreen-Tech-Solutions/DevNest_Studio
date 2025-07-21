import { Box, Typography, Container, Grid, Avatar, Link } from "@mui/material";
import { FaLinkedin, FaGithub, FaGlobe } from "react-icons/fa";
// Import images
import miladImage from "../images/milad.jpg";
import jamesonImage from "../images/jameson.jpg";

function OurTeamPage({ darkMode }) {
  return (
    <Container maxWidth="lg" sx={{ mt: 4 }}>
      {/* Page Title */}
      <Box id="top" py={4} textAlign="center">
        <Typography variant="h3" gutterBottom>
          Meet Our Team
        </Typography>
        <Typography variant="body1">
          Learn more about the talented individuals driving The DevNest.
        </Typography>
      </Box>

      {/* Jameson's Section */}
      <Box id="jameson" py={4}>
        <Grid container spacing={4} alignItems="center">
          {/* Jameson's Image */}
          <Grid item xs={12} md={4} textAlign="center">
            <Avatar
              alt="Jameson"
              src={jamesonImage}
              sx={{
                width: 350,
                height: 350,
                margin: "0 auto",
                bgcolor: "primary.main",
                fontSize: "2rem",
                boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.2)", // Add drop shadow
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
            <Typography
              variant="subtitle1"
              gutterBottom
              sx={{
                fontWeight: "bold",
                letterSpacing: 1.2, // Add spacing for emphasis
                fontSize: "1.2rem", // Slightly larger font size
              }}
            >
              Co-Founder / Lead Developer
            </Typography>
            <Typography variant="body1" paragraph>
              Jameson was born near Montreal, Quebec, but his journey has taken
              him across Canada. After a few brief stops in Ontario as a young
              child, he spent most of his formative years in Edmonton, Alberta,
              where he developed a strong work ethic and a passion for
              innovation. In 2018, he made Vancouver Island his home, embracing
              the beautiful nature and laid-back lifestyle.
            </Typography>
            <Typography variant="body1" paragraph>
              As Co-Founder and Lead Developer at The DevNest, Jameson is known
              for his ability to streamline complex systems and implement
              efficient, scalable solutions. With a passion for finding the
              simplest and smartest way to solve problems, he is constantly
              exploring cutting-edge technologies to deliver solutions that are
              both powerful and intuitive.
            </Typography>
            <Typography variant="body1" paragraph>
              Drawing on a diverse background in sales and customer service,
              Jameson has a unique talent for bridging the gap between technical
              teams and non-technical stakeholders. He is a big-picture thinker
              with an eye for strategy and loves transforming abstract ideas
              into tangible, impactful results. Whether it's backend
              architecture, AI integration, or full-stack development, Jameson
              brings a pragmatic and results-driven approach to every project.
            </Typography>
            <Typography variant="body1" paragraph>
              Jameson is a self-proclaimed coffee snob who takes great joy in
              brewing the perfect cup. He's also a passionate music lover who
              enjoys attending live shows and discovering hidden gems in the
              music world. Jameson's technical expertise, curiosity, and
              approachable nature make him an indispensable part of The DevNest
              team.
            </Typography>

            {/* Social Media Links */}
            <Box display="flex" gap={2} mt={2}>
              <Link
                href="https://www.linkedin.com/in/jamesonstickle"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Jameson's LinkedIn"
                style={{
                  color: darkMode ? "white" : "black", // Adjust color based on theme
                }}
              >
                <FaLinkedin size={24} />
              </Link>
              <Link
                href="https://jamstick.ca"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Jameson's Portfolio"
                style={{
                  color: darkMode ? "white" : "black", // Adjust color based on theme
                }}
              >
                <FaGlobe size={24} />
              </Link>
              <Link
                href="https://github.com/jamesonstickle"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Jameson's GitHub"
                style={{
                  color: darkMode ? "white" : "black", // Adjust color based on theme
                }}
              >
                <FaGithub size={24} />
              </Link>
            </Box>
          </Grid>
        </Grid>
      </Box>

      {/* Milad's Section */}
      <Box id="milad" py={4}>
        <Grid container spacing={4} alignItems="center">
          {/* Milad's Image */}
          <Grid item xs={12} md={4} textAlign="center">
            <Avatar
              alt="Milad"
              src={miladImage}
              sx={{
                width: 350,
                height: 350,
                margin: "0 auto",
                bgcolor: "primary.main",
                fontSize: "2rem",
                boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.2)", // Add drop shadow
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
            <Typography
              variant="subtitle1"
              gutterBottom
              sx={{
                fontWeight: "bold",
                letterSpacing: 1.2, // Add spacing for emphasis
                fontSize: "1.2rem", // Slightly larger font size
              }}
            >
              Co-Founder / Lead Designer
            </Typography>
            <Typography variant="body1" paragraph>
              Milad, born in the historic city of Shiraz, Iran, brings a rich
              tapestry of international experience to The DevNest. His
              professional journey has taken him across Turkey, Malaysia,
              Germany, Poland, and Italy, before settling in the bustling tech
              hub of Vancouver, Canada. With a background that includes roles
              such as QA advisor and managing an internet café in his early
              career, Milad's resourcefulness and entrepreneurial spirit are
              evident in every project he undertakes.
            </Typography>
            <Typography variant="body1" paragraph>
              As Co-Founder and Lead Designer at The DevNest, Milad is
              passionate about crafting intuitive and visually stunning user
              experiences. His keen eye for detail and mastery of front-end
              design ensure every project he touches achieves the perfect
              balance of form and function. Milad's dedication to making things
              not only work seamlessly but also look exceptional is at the heart
              of his approach to design.
            </Typography>
            <Typography variant="body1" paragraph>
              Milad loves to channel his creativity into 3D printing, where he
              designs everything from quirky collectibles to innovative,
              functional items that improve the lives of those around him. His
              blend of technical expertise, artistic sensibility, and global
              perspective makes him an invaluable part of The DevNest team.
            </Typography>

            {/* Social Media Links */}
            <Box display="flex" gap={2} mt={2}>
              <Link
                href="https://www.linkedin.com/in/milad-fotoohnejad"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Milad's LinkedIn"
                style={{
                  color: darkMode ? "white" : "black", // Adjust color based on theme
                }}
              >
                <FaLinkedin size={24} />
              </Link>

              <Link
                href="https://www.miladf.pro/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Milad's Portfolio"
                style={{
                  color: darkMode ? "white" : "black", // Adjust color based on theme
                }}
              >
                <FaGlobe size={24} />
              </Link>
              <Link
                href="https://github.com/Milad-fotoohnejad"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Milad's GitHub"
                style={{
                  color: darkMode ? "white" : "black", // Adjust color based on theme
                }}
              >
                <FaGithub size={24} />
              </Link>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}

export default OurTeamPage;
