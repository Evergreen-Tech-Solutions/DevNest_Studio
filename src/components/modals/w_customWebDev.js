import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import { Modal, Box, Typography, Button, FormControl, FormLabel, RadioGroup, FormControlLabel, Radio, Checkbox, TextField, MenuItem } from '@mui/material';



function CustomWebDevModal({ open, onClose }) {
  const [websiteType, setWebsiteType] = useState('');
  const [numPages, setNumPages] = useState('');
  const [features, setFeatures] = useState({
    responsiveDesign: false,
    ecomIntegration: false,
    seoService: false,
    cmsIntegration: false,
  });
  const [designComplexity, setDesignComplexity] = useState('');
  const [contactDetails, setContactDetails] = useState({
    name: '',
    email: '',
    phoneNumber: '',
    message: '',
  });
  const [showContactForm, setShowContactForm] = useState(false);

  const handleFeatureChange = (event) => {
    setFeatures({ ...features, [event.target.name]: event.target.checked });
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setContactDetails(prevDetails => ({ ...prevDetails, [name]: value }));
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
    total += numPages * 200;
    return total;
  };

  // Handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    const submissionData = {
      websiteType,
      numPages,
      features,
      designComplexity,
      ...contactDetails,
      estimatedCost: calculateTotal()
    };
    console.log('Form Submission:', submissionData);
    
    emailjs.send('service_kqj97nd', 'template_1fsd2fr', submissionData, 'ZuAY0cJ381FVYv2Oz')
      .then((result) => {
        console.log('Email successfully sent!', result.text);
        onClose(); 
      }, (error) => {
        console.log('Failed to send email:', error.text);
      });
  };

  const toggleContactForm = () => {
    setShowContactForm(!showContactForm);
  };

  const boxStyle = {
    backgroundColor: '#b6e1e0',
    padding: '20px',
    borderRadius: '10px',
    maxWidth: '85%',
    maxHeight: '85%',
    overflow: 'auto',
    outline: 'none',
  };


  const textStyle = {
    color: '#3f3f3f',
    marginBottom: '10px',
  };

  const labelStyle = {
    color: '#3f3f3f',
    marginBottom: '10px',
    fontWeight: 'bold',
    textDecoration: 'underline',
    fontSize: '1.5rem',
  };

  const subStyle = {
    color: '#3f3f3f',
    marginBottom: '10px',
    fontSize: '1.25rem',
    fontWeight: 'bold',
  };

  const radioStyles = {
    '&.Mui-checked': {
      color: '#e57373',
    }
  };

  return (
    <Modal open={open} onClose={onClose} className="flex items-center justify-center p-4">
      <Box sx={boxStyle}>
        <div><button onClick={onClose} className="text-dark bg-red-400 px-2 py-1 rounded-md mb-2">X</button></div>
        <Typography variant="h4" component="h2" className='text-gry text-center'>Custom Web Development</Typography>
        <div className="bg-lght rounded-md p-2 mt-3 mb-2">
          <Typography variant="body2" sx={{ ...textStyle }}>Please select the options that best describe your requirements.</Typography>
          <Typography variant="h5" sx={{ ...labelStyle }}>Why Choose Custom Web Development?</Typography>

          <Typography sx={{ ...subStyle }}>Tailored Solutions:</Typography>
          <Typography sx={{ ...textStyle }}>Every business has unique requirements, and a custom web development service ensures that every aspect of your website is designed to fulfill those specific needs—from the overall layout and user experience to specialized functionalities and backend processes.</Typography>

          <Typography variant="subtitle1" sx={{ ...subStyle }}>Scalability and Flexibility:</Typography>
          <Typography sx={{ ...textStyle }}>As your business evolves, your website should adapt to new challenges and opportunities. Custom websites are built with scalability in mind, allowing for seamless updates, feature additions, and integrations with other systems and applications.</Typography>

          <Typography variant="subtitle1" sx={{ ...subStyle }}>Optimized Performance:</Typography>
          <Typography sx={{ ...textStyle }}>Custom websites can be optimized for performance, with faster load times and a smoother user journey. This is crucial for keeping visitors engaged and can also contribute positively to your search engine rankings.</Typography>

          <Typography variant="subtitle1" sx={{ ...subStyle }}>Enhanced Security:</Typography>
          <Typography sx={{ ...textStyle }}>With custom web development, you get a site built with the latest security features, tailored to protect your specific content and data, which is especially important for e-commerce and sites handling sensitive user information.</Typography>

          <Typography variant="subtitle1" sx={{ ...subStyle }}>Brand Consistency:</Typography>
          <Typography sx={{ ...textStyle }}>Your website is a digital extension of your brand. Custom development ensures that your site accurately reflects your brand's aesthetics and ethos, creating a cohesive experience that reinforces your brand identity.</Typography>

          <Typography variant="h6" sx={{ ...labelStyle, mt: 4 }}>Our Custom Web Development Process</Typography>

          <Typography variant="subtitle1" sx={{ ...subStyle }}>Discovery and Planning:</Typography>
          <Typography sx={{ ...textStyle }}>We gather all the necessary information, including your goals, target audience, and competitor analysis. This helps us create a strategic plan that aligns with your vision.</Typography>

          <Typography variant="subtitle1" sx={{ ...subStyle }}>Design and User Experience:</Typography>
          <Typography sx={{ ...textStyle }}>Our designers craft a unique look and feel for your site that enhances usability while keeping your users engaged.</Typography>

          <Typography variant="subtitle1" sx={{ ...subStyle }}>Development:</Typography>
          <Typography sx={{ ...textStyle }}>Our developers bring the designs to life, coding the functionality that powers your site. We focus on clean, maintainable code that adheres to industry standards.</Typography>

          <Typography variant="subtitle1" sx={{ ...subStyle }}>Testing and Quality Assurance:</Typography>
          <Typography sx={{ ...textStyle }}>Rigorous testing ensures that every feature works as intended, with a seamless experience across all devices and browsers.</Typography>

          <Typography variant="subtitle1" sx={{ ...subStyle }}>Launch and Beyond:</Typography>
          <Typography sx={{ ...textStyle }}>After the final checks, your website goes live. We offer ongoing support, maintenance, and updates to keep your site at the forefront of digital excellence.</Typography>

          <Typography variant="subtitle1" sx={{ ...subStyle }}>Analytics and Optimization:</Typography>
          <Typography sx={{ ...textStyle }}>Post-launch, we analyze user behavior to refine and optimize the site, ensuring it continuously meets the needs of your visitors.</Typography>
        </div>
        <FormControl component="fieldset" className="mb-4">
          <FormLabel component="legend" sx={{ ...labelStyle }}>Quote Builder</FormLabel>
          <FormLabel component="legend" className='text-gry mt-3'>Type of Website</FormLabel>
          <RadioGroup row value={websiteType} onChange={(e) => setWebsiteType(e.target.value)}>
            <FormControlLabel value="business" control={<Radio sx={radioStyles} />} label="Business Landing Page" sx={{ ...textStyle }} />
            <FormControlLabel value="ecommerce" control={<Radio sx={radioStyles} />} label="E-commerce & Online Shop" sx={{ ...textStyle }} />
            <FormControlLabel value="portfolio" control={<Radio sx={radioStyles} />} label="Portfolio" sx={{ ...textStyle }} />
            <FormControlLabel value="blog" control={<Radio sx={radioStyles} />} label="Blog" sx={{ ...textStyle }} />
          </RadioGroup>
        </FormControl>

        <TextField
          select
          label="Number of Pages"
          value={numPages}
          onChange={(e) => setNumPages(e.target.value)}
          className="mb-4 bg-lght w-full rounded-md"
          sx={{ ...subStyle }}
        >
          {[1, 5, 10, 15, 20].map((option) => (
            <MenuItem key={option} value={option}>
              {option}
            </MenuItem>
          ))}
        </TextField>

        <div className=" bg-transparent-1 bg-lght rounded-md p-2 mb-2 mt-2" >
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
            <FormControlLabel value="premium" control={<Radio sx={radioStyles} />} label="Premium" />
          </RadioGroup>
        </FormControl>
        <div className="bg-lght rounded-md p-2">
          <Typography variant="subtitle3" component="h1" className='text-gry text-2xl'>Estimated Total Cost: <span className='text-red-700'>CA${calculateTotal()}</span></Typography>
          <Typography variant="body2" sx={{ ...textStyle }}>This is an estimated cost based on your selections. Please contact us for a detailed quote based on your specific requirements.</Typography>
        </div>
        <div className="bg-drkblu text-xl px-4 py-2 mt-3 mb-2 hover:bg-red-400 rounded-md w-full text-center">
          <Button onClick={toggleContactForm} className="w-full">
            {showContactForm ? 'Hide Contact Form' : 'Get a Quote'}
          </Button>
        </div>
        {showContactForm && (
          <Box
            component="form"
            noValidate
            autoComplete="off"
            onSubmit={handleSubmit}
            sx={{
              mt: 2,
              mb: 2,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              width: '100%'
            }}
          >
            <TextField
              fullWidth
              label="Name"
              name="name"
              required
              variant="outlined"
              value={contactDetails.name}
              onChange={handleInputChange}
              sx={{ mb: 2, backgroundColor: '#defcfc', borderRadius: '8px' }}
            />
            <TextField
              fullWidth
              label="Email"
              name="email"
              required
              variant="outlined"
              value={contactDetails.email}
              onChange={handleInputChange}
              sx={{ mb: 2, backgroundColor: '#defcfc', borderRadius: '8px' }}
            />
            <TextField
              fullWidth
              label="Phone Number"
              name="phoneNumber"
              variant="outlined"
              value={contactDetails.phoneNumber}
              onChange={handleInputChange}
              sx={{ mb: 2, backgroundColor: '#defcfc', borderRadius: '8px' }}
            />
            <TextField
              fullWidth
              label="Message"
              name="message"
              variant="outlined"
              value={contactDetails.message}
              onChange={handleInputChange}
              sx={{ mb: 2, backgroundColor: '#defcfc', borderRadius: '8px' }}
            />
            <Button
              type="submit"
              variant="contained"
              sx={{
                width: '200px',
                color: '#defcfc',
                mt: 3,
                bgcolor: 'rgb(7 13 89)',
                '&:hover': {
                  bgcolor: 'rgb(248 113 113)',
                }
              }}
            >
              Submit
            </Button>
          </Box>
        )}
      </Box>
    </Modal>
  );
}

export default CustomWebDevModal;
