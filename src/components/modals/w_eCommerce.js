// src/components/modals/w_eCommerce.js
import React from 'react';
import { Modal, Box, Typography, Button } from '@mui/material';

function ECommerce({ open, onClose, service }) {
  return (
    <Modal open={open} onClose={onClose} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <Box style={{ backgroundColor: 'white', padding: '20px', borderRadius: '10px', maxWidth: '600px', width: '90%', outline: 'none' }}>
        <Typography variant="h6" component="h2" style={{ marginBottom: '15px' }}>{service.title}</Typography>
        
        {(
          <>
            <Typography variant="subtitle1" component="h3">Options Available:</Typography>
            <ul>
              <li>Responsive Design</li>
              <li>E-commerce Integration</li>
              <li>Content Management Systems (CMS)</li>
              <li>Custom Functionality</li>
              <li>SEO service</li>
              {/* Add more options as necessary */}
            </ul>

            <Typography variant="subtitle1" component="h3" style={{ marginTop: '10px' }}>Benefits:</Typography>
            <ul>
              <li>Fully customized to your business needs</li>
              <li>Improved user experience</li>
              <li>Enhanced SEO and online visibility</li>
              <li>Scalable and flexible for future growth</li>
              {/* Add more benefits as necessary */}
            </ul>

            <Typography variant="subtitle1" component="h3" style={{ marginTop: '10px' }}>Pricing:</Typography>
            <p>Starting at $5,000 for basic websites. Complex projects with custom functionalities may vary in price.</p>
            <p>Please <strong>contact us</strong> for a detailed quote based on your specific requirements.</p>
          </>
        )}

        <Button onClick={onClose} style={{ marginTop: '20px', display: 'block', marginLeft: 'auto', marginRight: 'auto' }}>Close</Button>
      </Box>
    </Modal>
  );
}

export default ECommerce;
