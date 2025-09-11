import {
  Box,
  Typography,
  Container,
  Grid,
  Avatar,
  Link,
  useTheme,
} from "@mui/material";
import { FaLinkedin, FaGithub, FaGlobe } from "react-icons/fa";
// Import images
import miladImage from "../images/milad.jpg";
import jamesonImage from "../images/jameson.jpg";
import ladanImage from "../images/ladan.jpg";

function OurTeamPage({ darkMode }) {
  const theme = useTheme();

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
                boxShadow: "0px 20px 15px rgba(0, 0, 0, 0.2)",
              }}
            >
              J
            </Avatar>
          </Grid>
          <Grid item xs={12} md={8}>
            <Typography variant="h4" gutterBottom>
              Jameson Stickle
            </Typography>
            <Typography
              variant="subtitle1"
              gutterBottom
              sx={{
                fontWeight: "bold",
                letterSpacing: 1.2,
                fontSize: "1.2rem",
              }}
            >
              Co-Founder / Back-End Developer
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
              As Co-Founder and Back-End Developer at The DevNest, Jameson is
              known for his ability to streamline complex systems and implement
              efficient, scalable solutions. With a passion for finding the
              simplest and smartest way to solve problems, he is constantly
              exploring cutting-edge technologies to deliver solutions that are
              both powerful and intuitive.
            </Typography>
            <Typography variant="body1" paragraph>
              Jameson is a self-proclaimed coffee snob who takes great joy in
              brewing the perfect cup. He's also a passionate music lover who
              enjoys attending live shows and discovering hidden gems in the
              music world. Jameson's technical expertise, curiosity, and
              approachable nature make him an indispensable part of The DevNest
              team.
            </Typography>
            <Box display="flex" gap={2} mt={2}>
              <Link
                href="https://www.linkedin.com/in/jamesonstickle"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Jameson's LinkedIn"
                sx={{
                  color: theme.palette.text.primary,
                  transition: "color 0.3s ease-in-out",
                  "&:hover": {
                    color: theme.palette.divider,
                  },
                }}
              >
                <FaLinkedin size={24} />
              </Link>
              <Link
                href="https://jamstick.ca"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Jameson's Portfolio"
                sx={{
                  color: theme.palette.text.primary,
                  transition: "color 0.3s ease-in-out",
                  "&:hover": {
                    color: theme.palette.divider,
                  },
                }}
              >
                <FaGlobe size={24} />
              </Link>
              <Link
                href="https://github.com/jamesonstickle"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Jameson's GitHub"
                sx={{
                  color: theme.palette.text.primary,
                  transition: "color 0.3s ease-in-out",
                  "&:hover": {
                    color: theme.palette.divider,
                  },
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
                boxShadow: "0px 20px 15px rgba(0, 0, 0, 0.2)",
              }}
            >
              M
            </Avatar>
          </Grid>
          <Grid item xs={12} md={8}>
            <Typography variant="h4" gutterBottom>
              Milad Fotoohnejad
            </Typography>
            <Typography
              variant="subtitle1"
              gutterBottom
              sx={{
                fontWeight: "bold",
                letterSpacing: 1.2,
                fontSize: "1.2rem",
              }}
            >
              Co-Founder / Front-End Developer
            </Typography>
            <Typography variant="body1" paragraph>
              Milad, born in the historic city of Shiraz, Iran, brings a rich
              tapestry of international experience to The DevNest. With a degree
              in Industrial Engineering, he began his career as a QC Manager,
              where he honed his analytical and process optimization skills. His
              journey has taken him across Turkey, Malaysia, Germany, Poland,
              France, and Italy, not only in pursuit of professional growth, but
              also personal development. As an <a href="https://aiesec.org/about-us" className="text-teal-600 hover:underline"target="_blank" rel="noopener noreferrer">AIESECer</a>, Milad engaged in
              meaningful volunteer work in Poland, demonstrating a deep
              commitment to cultural exchange and social impact. Now based in
              the bustling tech hub of Vancouver, Canada, he continues to blend
              global insight with technical expertise.
            </Typography>
            <Typography variant="body1" paragraph>
              As Co-Founder and Front-End Developer at The DevNest, Milad is
              passionate about crafting intuitive and visually stunning user
              experiences. His keen eye for detail and mastery of front-end
              design ensure every project he touches achieves the perfect
              balance of form and function. His multidisciplinary background
              empowers him to lead with both empathy and precision, driving
              innovation and excellence at every stage of the development
              lifecycle.
            </Typography>

            <Box display="flex" gap={2} mt={2}>
              <Link
                href="https://www.linkedin.com/in/milad-fotoohnejad"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Milad's LinkedIn"
                sx={{
                  color: theme.palette.text.primary,
                  transition: "color 0.3s ease-in-out",
                  "&:hover": {
                    color: theme.palette.divider,
                  },
                }}
              >
                <FaLinkedin size={24} />
              </Link>
              <Link
                href="https://www.miladf.pro/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Milad's Portfolio"
                sx={{
                  color: theme.palette.text.primary,
                  transition: "color 0.3s ease-in-out",
                  "&:hover": {
                    color: theme.palette.divider,
                  },
                }}
              >
                <FaGlobe size={24} />
              </Link>
              <Link
                href="https://github.com/Milad-fotoohnejad"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Milad's GitHub"
                sx={{
                  color: theme.palette.text.primary,
                  transition: "color 0.3s ease-in-out",
                  "&:hover": {
                    color: theme.palette.divider,
                  },
                }}
              >
                <FaGithub size={24} />
              </Link>
            </Box>
          </Grid>
        </Grid>
      </Box>

      {/* Ladan's Section */}
      <Box id="ladan" py={4}>
        <Grid container spacing={4} alignItems="center">
          <Grid item xs={12} md={4} textAlign="center">
            <Avatar
              alt="Ladan"
              src={ladanImage}
              sx={{
                width: 350,
                height: 350,
                margin: "0 auto",
                bgcolor: "primary.main",
                fontSize: "2rem",
                boxShadow: "0px 20px 15px rgba(0, 0, 0, 0.2)",
              }}
            >
              L
            </Avatar>
          </Grid>
          <Grid item xs={12} md={8}>
            <Typography variant="h4" gutterBottom>
              Ladan Berg
            </Typography>
            <Typography
              variant="subtitle1"
              gutterBottom
              sx={{
                fontWeight: "bold",
                letterSpacing: 1.2,
                fontSize: "1.2rem",
              }}
            >
              Market Research & Business Strategy Lead
            </Typography>
            <Typography variant="body1" paragraph>
              Ladan, originally from Shiraz, Iran, brings a wealth of expertise
              in market research, consumer insights, and business strategy to
              The DevNest. She holds an MBA in Marketing from the National
              University of Malaysia and has built a dynamic career spanning
              market research, strategic consulting, and business education. Now
              based in British Columbia's Lower Mainland, Ladan is passionate
              about helping businesses make data-driven decisions that fuel
              sustainable growth.
            </Typography>
            <Typography variant="body1" paragraph>
              Her professional journey includes serving as Manager of Marketing
              Insights at Hootsuite, where she led strategic research
              initiatives to guide marketing and product decisions, and as
              Research Director at Leger, where she oversaw competitive
              intelligence, buyer persona development, and industry research for
              top-tier clients. Most recently, she joined Later as a Senior
              Market Researcher at the forefront of social and influencer
              marketing. Her analytical approach and keen ability to distill
              complex data into meaningful business insights make her an
              invaluable asset to both startups and established enterprises.
            </Typography>
            <Typography variant="body1" paragraph>
              Beyond research, Ladan is an educator and mentor, sharing her
              expertise as an Instructor at Vancouver Community College and
              University Canada West, where she teaches courses in Fundamentals
              of Marketing, Business Communications, Business Management
              Essentials, and Small Business Management for MBA students. Her
              passion for education, combined with real-world industry
              experience, equips her students with the tools they need to thrive
              in the modern business landscape. Ladan enjoys exploring new
              market trends, mentoring entrepreneurs, and discovering innovative
              business models. Her deep expertise in consumer behavior, data
              analysis, and marketing strategy ensures that The DevNest stays
              ahead of the curve in delivering research-backed, strategic
              solutions to its clients.
            </Typography>

            <Box display="flex" gap={2} mt={2}>
              <Link
                href="https://www.linkedin.com/in/ladanfotoohi/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Ladan's LinkedIn"
                sx={{
                  color: theme.palette.text.primary,
                  transition: "color 0.3s ease-in-out",
                  "&:hover": {
                    color: theme.palette.divider,
                  },
                }}
              >
                <FaLinkedin size={24} />
              </Link>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}

export default OurTeamPage;
