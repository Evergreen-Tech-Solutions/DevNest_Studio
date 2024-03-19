import React, { useState } from 'react';
import { Modal, Box, Typography, Button, FormControl, FormLabel, RadioGroup, FormControlLabel, Radio, Checkbox, TextField, MenuItem } from '@mui/material';


function CustomWebDevModal({ open, onClose, darkMode }) {
  const [websiteType, setWebsiteType] = useState('');
  const [numPages, setNumPages] = useState('');
  const [features, setFeatures] = useState({
    responsiveDesign: false,
    ecomIntegration: false,
    seoService: false,
    cmsIntegration: false,
  });
  const [designComplexity, setDesignComplexity] = useState('');

  const handleFeatureChange = (event) => {
    setFeatures({ ...features, [event.target.name]: event.target.checked });
  };

  const calculateTotal = () => {
    let total = 5000; // Starting base price
    if (websiteType === 'ecommerce') {
      total += 2000;
    }
    if (features.responsiveDesign) {
      total += 1000;
    }
    if (features.ecomIntegration) {
      total += 1500;
    }
    if (features.seoService) {
      total += 500;
    }
    if (features.cmsIntegration) {
      total += 1000;
    }
    if (designComplexity === 'advanced') {
      total += 2000;
    }
    if (designComplexity === 'premium') {
      total += 5000;
    }
    return total;
  };

  const boxStyle = {
    backgroundColor: '#b6e1e0', 
    padding: '20px',
    borderRadius: '10px',
    maxWidth: '600px',
    width: '90%',
    outline: 'none',
  };

  const textStyle = {
    color: darkMode ? '#59cb91' : '#3f3f3f',
  };

  const radioStyles = {
    '&.Mui-checked': {
      color: '#070d59',
    }
  };

  return (
    <Modal open={open} onClose={onClose} className="flex items-center justify-center p-4">
      <Box sx={boxStyle}>
        <Typography variant="h6" component="h2" sx={{ ...textStyle }}>Custom Web Development</Typography>
        
        <FormControl component="fieldset" className="mb-4">
          <FormLabel component="legend" sx={{ ...textStyle }}>Type of Website</FormLabel>
          <RadioGroup row value={websiteType} onChange={(e) => setWebsiteType(e.target.value)}>
            <FormControlLabel value="business" control={<Radio sx={radioStyles} />} label="Business" sx={{ ...textStyle }} />
            <FormControlLabel value="ecommerce" control={<Radio sx={radioStyles} />} label="E-commerce" sx={{ ...textStyle }} />
            <FormControlLabel value="portfolio" control={<Radio sx={radioStyles} />} label="Portfolio" sx={{ ...textStyle }} />
            <FormControlLabel value="blog" control={<Radio sx={radioStyles} />} label="Blog" sx={{ ...textStyle }} />
          </RadioGroup>
        </FormControl>

        <TextField
          select
          label="Number of Pages"
          value={numPages}
          onChange={(e) => setNumPages(e.target.value)}
          className="mb-4 w-full"
          sx={{ ...textStyle }}
        >
          {[1, 5, 10, 15, 20].map((option) => (
            <MenuItem key={option} value={option}>
              {option}
            </MenuItem>
          ))}
        </TextField>

        <div className="mb-4" >
          <FormLabel component="legend">Features & Functionality</FormLabel>
          <FormControlLabel
            control={<Checkbox checked={features.responsiveDesign} onChange={handleFeatureChange} name="responsiveDesign" />}
            label="Responsive Design"
            sx={{ ...textStyle }}
          />
          <FormControlLabel
            control={<Checkbox checked={features.ecomIntegration} onChange={handleFeatureChange} name="ecomIntegration" />}
            label="E-commerce Integration"
            sx={{ ...textStyle }}
          />
          <FormControlLabel
            control={<Checkbox checked={features.seoService} onChange={handleFeatureChange} name="seoService" />}
            label="SEO Services"
            sx={{ ...textStyle }}
          />
          <FormControlLabel
            control={<Checkbox checked={features.cmsIntegration} onChange={handleFeatureChange} name="cmsIntegration" />}
            label="CMS Integration"
            sx={{ ...textStyle }}
          />
        </div>

        <FormControl component="fieldset" className="mb-4" sx={{ ...textStyle }}>
          <FormLabel component="legend">Design Complexity</FormLabel>
          <RadioGroup row value={designComplexity} onChange={(e) => setDesignComplexity(e.target.value)}>
            <FormControlLabel value="basic" control={<Radio sx={radioStyles} />} label="Basic" />
            <FormControlLabel value="advanced" control={<Radio sx={radioStyles} />} label="Advanced" />
            <FormControlLabel value="premium" control={<Radio  />} label="Premium" />
          </RadioGroup>
        </FormControl>

        <Typography variant="subtitle1" component="h3" sx={{ ...textStyle }}>Estimated Total Cost: ${calculateTotal()}</Typography>
        <Typography variant="body2" sx={{ ...textStyle }}>This is an estimated cost based on your selections. Please contact us for a detailed quote based on your specific requirements.</Typography>

        <Button onClick={onClose} sx={{ ...textStyle }}>Close</Button>
      </Box>
    </Modal>
  );
}

export default CustomWebDevModal;
