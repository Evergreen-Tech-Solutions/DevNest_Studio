import React from "react";
import { Modal, Box, Typography, Button } from "@mui/material";

function EcommercePackageModal({ open, onClose, package: selectedPackage }) {
  return (
    <Modal open={open} onClose={onClose}>
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: 400,
          bgcolor: "background.paper",
          boxShadow: 24,
          p: 4,
          borderRadius: 2,
        }}
      >
        <Typography variant="h4" gutterBottom>
          {selectedPackage?.title}
        </Typography>
        <Typography variant="h6" color="textSecondary" gutterBottom>
          <span className="text-red-500">
            Sale Price: {selectedPackage?.salePrice}
          </span>
          <br />
          <span className="text-gray-500 line-through">
            Regular Price: {selectedPackage?.regularPrice}
          </span>
        </Typography>
        <Typography variant="body1" paragraph>
          ✅ Everything in the Starter Package
        </Typography>
        <Typography variant="body1" paragraph>
          ✅ Full eCommerce functionality
        </Typography>
        <Typography variant="body1" paragraph>
          ✅ Payment processing setup
        </Typography>
        <Typography variant="body1" paragraph>
          ✅ Product management system
        </Typography>
        <Typography variant="body1" paragraph>
          ✅ Advanced SEO optimization
        </Typography>
        <Button onClick={onClose} variant="contained" sx={{ mt: 2 }}>
          Close
        </Button>
      </Box>
    </Modal>
  );
}

export default EcommercePackageModal;
