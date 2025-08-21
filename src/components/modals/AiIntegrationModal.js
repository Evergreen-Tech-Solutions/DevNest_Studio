import React from "react";
import { Modal, Box, Typography, Button } from "@mui/material";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #00a896",
  boxShadow: 24,
  p: 4,
  borderRadius: 2,
};

function AIIntegrationModal({ open, onClose }) {
  return (
    <Modal open={open} onClose={onClose}>
      <Box sx={style}>
        <Typography variant="h5" component="h2" gutterBottom>
          AI Integration Services
        </Typography>
        <Typography variant="body1" sx={{ mb: 2 }}>
          Unlock the power of artificial intelligence for your business. We offer:
        </Typography>
        <ul style={{ paddingLeft: "1.2rem", marginBottom: "1rem" }}>
          <li>AI-powered chatbots for customer support</li>
          <li>Automation of repetitive tasks</li>
          <li>Smart recommendation engines</li>
          <li>Predictive analytics and reporting</li>
        </ul>
        <Typography variant="body2" color="textSecondary" sx={{ mb: 2 }}>
          Contact us to explore how AI can streamline and grow your operations.
        </Typography>
        <Button variant="contained" color="primary" onClick={onClose}>
          Close
        </Button>
      </Box>
    </Modal>
  );
}

export default AIIntegrationModal; 
