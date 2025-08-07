import React, { useState } from 'react';
import {
  Modal,
  Box,
  Typography,
  useMediaQuery,
  useTheme
} from '@mui/material';

function DigitalProductDevelopment({ open, onClose }) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const [websiteType, setWebsiteType] = useState('');
  const [numPages, setNumPages] = useState('');
  const [features, setFeatures] = useState({
    responsiveDesign: false,
    ecomIntegration: false,
    seoService: false,
    cmsIntegration: false,
  });
  const [showContactForm, setShowContactForm] = useState(false);

  const toggleContactForm = () => {
    setShowContactForm(!showContactForm);
  };

  const boxStyle = {
    backgroundColor: '#b6e1e0',
    padding: '20px',
    borderRadius: '10px',
    width: isMobile ? '95vw' : '55%',
    height: isMobile ? '90vh' : '85%',
    overflowY: 'auto',
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

  return (
    <Modal open={open} onClose={onClose} className="flex items-center justify-center p-4">
      <Box sx={boxStyle}>
        <Typography variant="h4" component="h2" className='text-gry text-center'>
          Custom Web Development
        </Typography>

        <div className="bg-lght rounded-md p-2 mt-3 mb-2">
          <Typography variant="h5" sx={labelStyle}>Why Choose Custom Web Development?</Typography>

          <Typography sx={subStyle}>Tailored Solutions:</Typography>
          <Typography sx={textStyle}>
            Every business has unique requirements, and a custom web development service ensures that every aspect of your website is designed to fulfill those specific needs—from the overall layout and user experience to specialized functionalities and backend processes.
          </Typography>

          <Typography sx={subStyle}>Scalability and Flexibility:</Typography>
          <Typography sx={textStyle}>
            As your business evolves, your website should adapt to new challenges and opportunities. Custom websites are built with scalability in mind, allowing for seamless updates, feature additions, and integrations with other systems and applications.
          </Typography>

          <Typography sx={subStyle}>Optimized Performance:</Typography>
          <Typography sx={textStyle}>
            Custom websites can be optimized for performance, with faster load times and a smoother user journey. This is crucial for keeping visitors engaged and can also contribute positively to your search engine rankings.
          </Typography>

          <Typography sx={subStyle}>Enhanced Security:</Typography>
          <Typography sx={textStyle}>
            With custom web development, you get a site built with the latest security features, tailored to protect your specific content and data, which is especially important for e-commerce and sites handling sensitive user information.
          </Typography>

          <Typography sx={subStyle}>Brand Consistency:</Typography>
          <Typography sx={textStyle}>
            Your website is a digital extension of your brand. Custom development ensures that your site accurately reflects your brand's aesthetics and ethos, creating a cohesive experience that reinforces your brand identity.
          </Typography>

          <Typography variant="h6" sx={{ ...labelStyle, mt: 4 }}>
            Our Custom Web Development Process
          </Typography>

          <Typography sx={subStyle}>Discovery and Planning:</Typography>
          <Typography sx={textStyle}>
            We gather all the necessary information, including your goals, target audience, and competitor analysis. This helps us create a strategic plan that aligns with your vision.
          </Typography>

          <Typography sx={subStyle}>Design and User Experience:</Typography>
          <Typography sx={textStyle}>
            Our designers craft a unique look and feel for your site that enhances usability while keeping your users engaged.
          </Typography>

          <Typography sx={subStyle}>Development:</Typography>
          <Typography sx={textStyle}>
            Our developers bring the designs to life, coding the functionality that powers your site. We focus on clean, maintainable code that adheres to industry standards.
          </Typography>

          <Typography sx={subStyle}>Testing and Quality Assurance:</Typography>
          <Typography sx={textStyle}>
            Rigorous testing ensures that every feature works as intended, with a seamless experience across all devices and browsers.
          </Typography>

          <Typography sx={subStyle}>Launch and Beyond:</Typography>
          <Typography sx={textStyle}>
            After the final checks, your website goes live. We offer ongoing support, maintenance, and updates to keep your site at the forefront of digital excellence.
          </Typography>

          <Typography sx={subStyle}>Analytics and Optimization:</Typography>
          <Typography sx={textStyle}>
            Post-launch, we analyze user behavior to refine and optimize the site, ensuring it continuously meets the needs of your visitors.
          </Typography>
        </div>
      </Box>
    </Modal>
  );
}

export default DigitalProductDevelopment;
