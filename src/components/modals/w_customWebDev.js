// src/components/modals/ServiceModal.js
import React from 'react';
import { Modal, Box, Typography, Button } from '@mui/material';

function ServiceModal({ open, handleClose, service }) {
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="service-modal-title"
      aria-describedby="service-modal-description"
    >
      <Box sx={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: 400, bgcolor: 'background.paper', boxShadow: 24, p: 4, borderRadius: 2 }}>
        <Typography id="service-modal-title" variant="h6" component="h2">
          {service.title}
        </Typography>
        <Typography id="service-modal-description" sx={{ mt: 2 }}>
          {service.description}
          {/* Include more details and pricing information here */}
        </Typography>
        <Button onClick={handleClose} style={{ marginTop: '20px' }}>Close</Button>
      </Box>
    </Modal>
  );
}

export default ServiceModal;
