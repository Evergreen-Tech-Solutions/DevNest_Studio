import React from "react";
import { Modal, Box, Typography, Button } from "@mui/material";
import { FaCheckCircle } from "react-icons/fa";

function EcommercePackageModal({ open, onClose, package: selectedPackage }) {
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
          {selectedPackage?.title || "E-Commerce Website Package"}
        </Typography>

        <Typography variant="body1" sx={{ mb: 1 }}>
          <span style={{ color: "#e63946", fontWeight: "bold" }}>
            {selectedPackage?.salePrice || "C$2,000"}
          </span>{" "}
          <span
            style={{
              textDecoration: "line-through",
              color: "#aaa",
              fontSize: "0.9rem",
              marginLeft: 8,
            }}
          >
            {selectedPackage?.regularPrice || "C$4,000"}
          </span>
        </Typography>

        <Typography variant="h8" color="textSecondary">
          Launch your online store with all the tools to start selling fast.
        </Typography>

        {/* Features */}
        <Box mt={3} textAlign="left">
          <Typography variant="subtitle1" fontWeight="bold" gutterBottom>
            What’s Included:
          </Typography>
          <ul style={{ lineHeight: "1.8" }}>
            <li style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
              <FaCheckCircle color="#00a896" />
              Everything in the Starter Package
            </li>
            <li style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
              <FaCheckCircle color="#00a896" />
              Product Listings with Image Galleries
            </li>
            <li style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
              <FaCheckCircle color="#00a896" />
              Secure Checkout & Payment Gateways
            </li>
            <li style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
              <FaCheckCircle color="#00a896" />
              Inventory & Order Management
            </li>
            <li style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
              <FaCheckCircle color="#00a896" />
              Advanced SEO & Analytics Tools
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
            onClick={onClose}
          >
            Get Started – Only C$2,000
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

export default EcommercePackageModal;
