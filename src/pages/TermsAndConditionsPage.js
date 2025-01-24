import React from "react";
import { Container, Typography, Box, Divider } from "@mui/material";
import Styles from "../styles/TermsAndConditionsPage.module.css";

function TermsAndConditionsPage() {
  return (
    <Container maxWidth="md" className={Styles.terms} sx={{ py: 6 }}>
      {/* Title Section */}
      <Box textAlign="center" sx={{ mb: 4, mt: 2 }}>
        <Typography variant="h3" component="h1" gutterBottom>
          Terms and Conditions
        </Typography>
        <Typography variant="body1">
          Welcome to The DevNest. By accessing our website or services, you
          agree to abide by the following terms and conditions.
        </Typography>
      </Box>

      <Divider sx={{ my: 4 }} />

      {/* Use of Our Website Section */}
      <Box sx={{ mb: 4 }}>
        <Typography variant="h4" component="h2" gutterBottom>
          Use of Our Website
        </Typography>
        <Typography variant="body1" paragraph>
          By using our website, you agree to:
        </Typography>
        <Typography variant="body1" paragraph>
          • Access the website for lawful purposes only and not engage in
          activities that may harm our services, infrastructure, or users.
        </Typography>
        <Typography variant="body1" paragraph>
          • Refrain from unauthorized use, reproduction, or distribution of our
          website content, as outlined in our Intellectual Property clause.
        </Typography>
        <Typography variant="body1" paragraph>
          Failure to comply with these terms may result in restriction or
          termination of access to our services.
        </Typography>
      </Box>

      <Divider sx={{ my: 4 }} />

      {/* Intellectual Property Section */}
      <Box sx={{ mb: 4 }}>
        <Typography variant="h4" component="h2" gutterBottom>
          Intellectual Property
        </Typography>
        <Typography variant="body1" paragraph>
          All content on this website, including but not limited to text,
          graphics, logos, and images, is the property of The DevNest and is
          protected by copyright laws.
        </Typography>
        <Typography variant="body1" paragraph>
          Unauthorized reproduction, distribution, or modification of any
          material on this website is strictly prohibited without prior written
          consent from The DevNest.
        </Typography>
      </Box>

      <Divider sx={{ my: 4 }} />

      {/* Disclaimer Section */}
      <Box sx={{ mb: 4 }}>
        <Typography variant="h4" component="h2" gutterBottom>
          Disclaimer
        </Typography>
        <Typography variant="body1" paragraph>
          The content and services provided by The DevNest are offered "as is"
          and without warranties of any kind, whether express or implied. We do
          not guarantee that our services will be uninterrupted, error-free, or
          secure.
        </Typography>
        <Typography variant="body1" paragraph>
          We are not liable for any direct, indirect, or incidental damages
          arising from the use of our website or services.
        </Typography>
      </Box>

      <Divider sx={{ my: 4 }} />

      {/* Updates to Terms Section */}
      <Box sx={{ mb: 4 }}>
        <Typography variant="h4" component="h2" gutterBottom>
          Updates to These Terms
        </Typography>
        <Typography variant="body1" paragraph>
          The DevNest reserves the right to update these terms and conditions at
          any time. Changes will be effective upon posting to our website, and
          continued use of our website constitutes acceptance of the updated
          terms.
        </Typography>
      </Box>

      <Divider sx={{ my: 4 }} />

      {/* Contact Us Section */}
      <Box textAlign="center" sx={{ mt: 4 }}>
        <Typography variant="h4" component="h2" gutterBottom>
          Contact Us
        </Typography>
        <Typography variant="body1" paragraph>
          For questions about these terms, please contact us:
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Email: contact@thedevnest.ca
        </Typography>
      </Box>

      <Typography
        variant="body2"
        color="text.secondary"
        textAlign="center"
        sx={{ mt: 6 }}
      >
        Last Updated: January 23, 2025
      </Typography>
    </Container>
  );
}

export default TermsAndConditionsPage;
