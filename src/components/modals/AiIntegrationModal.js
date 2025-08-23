import React from "react";
import { Modal, Box, Typography, Button } from "@mui/material";
import { FaCheckCircle } from "react-icons/fa";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: { xs: 350, sm: 550 },
  bgcolor: "background.paper",
  border: "2px solid #00a896",
  boxShadow: 24,
  p: 4,
  borderRadius: 2,
  textAlign: "center"
};

function AIIntegrationModal({ open, onClose, package: selectedPackage  }) {
  return (
    <Modal open={open} onClose={onClose}>
      <Box sx={style}>
        <Typography variant="h4" gutterBottom>
          {selectedPackage?.title || "AI Integration Services"}
        </Typography>

        <Typography
          variant="h6"
          sx={{ color: "#e63946", fontWeight: 600, mb: 1 }}
        >
          Starts at: C$750
        </Typography>
        <Typography variant="body2" color="textSecondary" gutterBottom>
          Tailored solutions for businesses of all sizes
        </Typography>

        <Typography variant="body1" sx={{ my: 2 , textAlign: "left"}}>
          Power up your workflows with cutting-edge automation:
        </Typography>

        <ul style={{ lineHeight: "1.8", paddingLeft: 0, marginBottom: 24 }}>
          <li style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
            <FaCheckCircle color="#00a896" />
            24/7 AI customer service chatbots
          </li>
          <li style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
            <FaCheckCircle color="#00a896" />
            Task automation for daily operations
          </li>
          <li style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
            <FaCheckCircle color="#00a896" />
            Product/service recommendation engines
          </li>
          <li style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
            <FaCheckCircle color="#00a896" />
            Predictive analytics & insights
          </li>
        </ul>

        {/* Call to Action */}
        <Box mt={4}>
          <Button
            variant="contained"
            color="primary"
            fullWidth
            sx={{ borderRadius: "12px", py: 1.2 }}
            onClick={onClose}
          >
            Get Started – From C$750
          </Button>
          <Button
            variant="text"
            onClick={onClose}
            sx={{ mt: 1.5, fontSize: "0.85rem", color: "#888" }}
          >
            Close
          </Button>
        </Box>
      </Box>
    </Modal>
  );
}

export default AIIntegrationModal;
