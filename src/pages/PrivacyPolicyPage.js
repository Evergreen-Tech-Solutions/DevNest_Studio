import React from "react";
import {
  Container,
  Typography,
  Box,
  Divider,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import Styles from "../styles/PrivacyPolicyPage.module.css";

function PrivacyPolicyPage() {
  return (
    <Container maxWidth="md" className={Styles.privacyPolicy} sx={{ py: 6 }}>
      {/* Title Section */}
      <Box textAlign="center" sx={{ mb: 4, mt: 2 }}>
        <Typography variant="h3" component="h1" gutterBottom>
          Privacy Policy
        </Typography>
        <Typography variant="body1">
          Your privacy is important to us. This Privacy Policy explains how we
          collect, use, and protect your personal information when you visit our
          website or use our services.
        </Typography>
      </Box>

      <Divider sx={{ my: 4 }} />

      {/* Information We Collect Section */}
      <Box sx={{ mb: 4 }}>
        <Typography variant="h4" component="h2" gutterBottom>
          Information We Collect
        </Typography>
        <Typography variant="body1" paragraph>
          We may collect the following types of information:
        </Typography>
        <List>
          <ListItem>
            <ListItemText primary="Personal Information: Name, email, phone number, and other details you provide when contacting us or using our services." />
          </ListItem>
          <ListItem>
            <ListItemText primary="Usage Data: Information such as IP address, browser type, and pages visited, collected automatically to improve our website." />
          </ListItem>
          <ListItem>
            <ListItemText primary="Cookies: Small data files stored on your device to enhance user experience and track site performance." />
          </ListItem>
        </List>
      </Box>

      <Divider sx={{ my: 4 }} />

      {/* How We Use Your Information Section */}
      <Box sx={{ mb: 4 }}>
        <Typography variant="h4" component="h2" gutterBottom>
          How We Use Your Information
        </Typography>
        <Typography variant="body1" paragraph>
          Your personal information is used to:
        </Typography>
        <List>
          <ListItem>
            <ListItemText primary="Provide and maintain our services." />
          </ListItem>
          <ListItem>
            <ListItemText primary="Respond to inquiries and provide customer support." />
          </ListItem>
          <ListItem>
            <ListItemText primary="Analyze and improve website functionality and user experience." />
          </ListItem>
          <ListItem>
            <ListItemText primary="Send promotional communications, if you opt-in." />
          </ListItem>
          <ListItem>
            <ListItemText primary="Comply with legal obligations and resolve disputes." />
          </ListItem>
        </List>
      </Box>

      <Divider sx={{ my: 4 }} />

      {/* How We Protect Your Information Section */}
      <Box sx={{ mb: 4 }}>
        <Typography variant="h4" component="h2" gutterBottom>
          How We Protect Your Information
        </Typography>
        <Typography variant="body1" paragraph>
          We implement industry-standard security measures to safeguard your
          information, including:
        </Typography>
        <List>
          <ListItem>
            <ListItemText primary="Data encryption and secure storage." />
          </ListItem>
          <ListItem>
            <ListItemText primary="Restricted access to sensitive information." />
          </ListItem>
          <ListItem>
            <ListItemText primary="Regular security audits and updates." />
          </ListItem>
        </List>
        <Typography variant="body2" color="text.secondary">
          Please note that while we strive to protect your information, no
          method of transmission over the internet or electronic storage is 100%
          secure.
        </Typography>
      </Box>

      <Divider sx={{ my: 4 }} />

      {/* Your Rights Section */}
      <Box sx={{ mb: 4 }}>
        <Typography variant="h4" component="h2" gutterBottom>
          Your Rights
        </Typography>
        <Typography variant="body1" paragraph>
          Depending on your location, you may have the following rights
          regarding your personal information:
        </Typography>
        <List>
          <ListItem>
            <ListItemText primary="The right to access and receive a copy of your data." />
          </ListItem>
          <ListItem>
            <ListItemText primary="The right to request correction or deletion of your data." />
          </ListItem>
          <ListItem>
            <ListItemText primary="The right to object to data processing or withdraw consent." />
          </ListItem>
        </List>
        <Typography variant="body1" paragraph>
          To exercise these rights, contact us at:
          <Typography variant="body2" color="text.secondary" component="span">
            {" "}
            contact@thedevnest.ca
          </Typography>
        </Typography>
      </Box>

      <Divider sx={{ my: 4 }} />

      {/* Policy Updates Section */}
      <Box sx={{ mb: 4 }}>
        <Typography variant="h4" component="h2" gutterBottom>
          Policy Updates
        </Typography>
        <Typography variant="body1" paragraph>
          This Privacy Policy may be updated periodically to reflect changes in
          our practices or for other operational, legal, or regulatory reasons.
          The "Last Updated" date at the bottom of this page indicates when the
          policy was last revised.
        </Typography>
      </Box>

      <Divider sx={{ my: 4 }} />

      {/* Contact Us Section */}
      <Box textAlign="center" sx={{ mt: 4 }}>
        <Typography variant="h4" component="h2" gutterBottom>
          Contact Us
        </Typography>
        <Typography variant="body1" paragraph>
          If you have any questions about this Privacy Policy, please contact
          us:
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

export default PrivacyPolicyPage;
