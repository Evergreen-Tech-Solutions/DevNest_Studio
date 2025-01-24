import React from "react";
import { Container, Typography, Box, Divider } from "@mui/material";
import Styles from "../styles/AcknowledgementsPage.module.css";

function AcknowledgementsPage() {
  return (
    <Container maxWidth="md" className={Styles.acknowledgements} sx={{ py: 6 }}>
      {/* Page Title */}
      <Box textAlign="center" sx={{ mb: 4, mt: 2 }}>
        <Typography variant="h3" component="h1" gutterBottom>
          Acknowledgments
        </Typography>
        <Typography variant="body1">
          We would like to extend our gratitude to all contributors, partners,
          and supporters who made this project possible.
        </Typography>
      </Box>

      <Divider sx={{ my: 4 }} />

      {/* Special Thanks Section */}
      <Typography variant="h4" gutterBottom>
        Special Thanks
      </Typography>
      <Typography variant="body1" paragraph>
        A heartfelt thanks to our team members, collaborators, and clients for
        their unwavering dedication and support.
      </Typography>
      <Typography variant="body1" paragraph>
        We’d also like to thank our families and friends for their encouragement
        and patience as we worked to make The DevNest a reality.
      </Typography>

      <Divider sx={{ my: 4 }} />

      {/* Resources and Tools Section */}
      <Typography variant="h4" gutterBottom>
        Resources and Tools
      </Typography>
      <Typography variant="body1" paragraph>
        This project was built using open-source technologies, libraries, and
        tools, including:
      </Typography>
      <ul>
        <li>
          <Typography variant="body1">
            <strong>ReactJS</strong>: The foundation of our web development.
          </Typography>
        </li>
        <li>
          <Typography variant="body1">
            <strong>Material UI</strong>: For creating sleek and modern
            components.
          </Typography>
        </li>
        <li>
          <Typography variant="body1">
            <strong>Google Fonts</strong>: Providing the typography that powers
            the website's design.
          </Typography>
        </li>
      </ul>

      <Divider sx={{ my: 4 }} />

      {/* Icon Credits Section */}
      <Typography variant="h4" gutterBottom>
        Icon Credits
      </Typography>
      <Typography variant="body1" paragraph>
        <a
          href="https://www.flaticon.com/"
          title="icons"
          target="_blank"
          rel="noopener noreferrer"
          className="link"
        >
          Icons created by Freepik - Flaticon
        </a>
      </Typography>

      <Divider sx={{ my: 4 }} />

      {/* Contact Section */}
      <Typography variant="h4" gutterBottom>
        Contact Us
      </Typography>
      <Typography variant="body1" paragraph>
        If you have any questions or concerns regarding this page, feel free to
        reach out to us at{" "}
        <a href="mailto:contact@thedevnest.ca" className="link">
          contact@thedevnest.ca
        </a>
        .
      </Typography>
    </Container>
  );
}

export default AcknowledgementsPage;
