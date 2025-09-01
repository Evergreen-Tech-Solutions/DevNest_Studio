import React from "react";
import { Modal, Box, Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { FaCheckCircle } from "react-icons/fa";

function BusinessOptimizationModal({
  open,
  onClose,
  package: selectedPackage,
}) {
  const navigate = useNavigate();

  const handleRedirect = () => {
    onClose();
    navigate(`/contact?package=${selectedPackage?.id || "business"}`);
  };

  return (
    <Modal open={open} onClose={onClose}>
      <Box
        sx={{
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
          textAlign: "center",
        }}
      >
        <Typography variant="h5" fontWeight="normal" gutterBottom>
          {selectedPackage?.title || "Business Optimization Package"}
        </Typography>

        <Typography variant="body1" sx={{ mb: 1 }}>
          <span style={{ color: "#e63946", fontWeight: "bold" }}>
            {selectedPackage?.salePrice || "Contact for Quote"}
          </span>
        </Typography>

        <Typography variant="h8" color="textSecondary">
          Streamline operations and promote your brand for growth.
        </Typography>

        <Box mt={3} textAlign="left">
          <Typography variant="subtitle1" fontWeight="bold" gutterBottom>
            What’s Included:
          </Typography>
          <ul style={{ lineHeight: "1.8" }}>
            {[
              "Business Process Automation Workflows",
              "Social Media & Email Campaign Integration",
              "Custom Marketing Dashboards",
              "Client Outreach & Retargeting Setup",
              "Automation Tools Integration (Zapier, Integromat, etc.)",
            ].map((item) => (
              <li
                key={item}
                style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}
              >
                <FaCheckCircle color="#00a896" />
                {item}
              </li>
            ))}
          </ul>
        </Box>

        <Box mt={4}>
          <Button
            variant="contained"
            color="primary"
            fullWidth
            sx={{ borderRadius: "12px", py: 1.2 }}
            onClick={handleRedirect}
          >
            Get Started – Contact Us
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

export default BusinessOptimizationModal;
