// DesignLifecycleModal.js
import React from "react";
import { Modal, Box, Typography, Button } from "@mui/material";
import { FaCheckCircle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function DesignLifecycleModal({
  open,
  onClose,
  package: selectedPackage,
  onSelectPackage,
}) {
  const handleSelectAndClose = () => {
    if (onSelectPackage && selectedPackage?.id) {
      onSelectPackage(selectedPackage.id);
    }
    onClose();
  };
  const navigate = useNavigate();

  const handleRedirect = () => {
    onClose();
    navigate("/contact?package=design");
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
        {/* Title & Price */}
        <Typography variant="h5" fontWeight="normal" gutterBottom>
          {selectedPackage?.title || "Design, Quality & Lifecycle Package"}
        </Typography>

        <Typography variant="body1" sx={{ mb: 1 }}>
          <span style={{ color: "#e63946", fontWeight: "bold" }}>
            {selectedPackage?.salePrice || "Contact for Quote"}
          </span>
        </Typography>

        <Typography variant="h8" color="textSecondary">
          Professional design, quality control, and long-term support for your
          product.
        </Typography>

        {/* Features */}
        <Box mt={3} textAlign="left">
          <Typography variant="subtitle1" fontWeight="bold" gutterBottom>
            What’s Included:
          </Typography>
          <ul style={{ lineHeight: "1.8" }}>
            <li
              style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}
            >
              <FaCheckCircle color="#00a896" />
              UI/UX Design & Branding Systems
            </li>
            <li
              style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}
            >
              <FaCheckCircle color="#00a896" />
              User Testing & Quality Assurance
            </li>
            <li
              style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}
            >
              <FaCheckCircle color="#00a896" />
              Staging Pipelines & Deployment Support
            </li>
            <li
              style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}
            >
              <FaCheckCircle color="#00a896" />
              Maintenance Plans & Version Updates
            </li>
          </ul>
        </Box>

        {/* Call to Action */}
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

export default DesignLifecycleModal;
