import React from "react";
import { Modal, Box, Typography } from "@mui/material";
import ContactForm from "../ContactForm"; // Reusing the existing ContactForm

function CustomPackageModal({ open, onClose, darkMode }) {
  return (
    <Modal open={open} onClose={onClose}>
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: 450,
          bgcolor: "background.paper",
          boxShadow: 24,
          p: 4,
          borderRadius: 2,
        }}
      >
        <Typography variant="h4" gutterBottom textAlign="center">
          Custom Package Inquiry
        </Typography>
        <Typography variant="body1" paragraph textAlign="center">
          Let us know your requirements, and we’ll craft a solution tailored to
          your needs.
        </Typography>
        <ContactForm darkMode={darkMode} />
      </Box>
    </Modal>
  );
}

export default CustomPackageModal;
