// src/components/modals/w_cms.js
import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import { Modal, Box, Typography, Button, FormControl, FormLabel, RadioGroup, FormControlLabel, Radio, Checkbox, TextField, MenuItem } from '@mui/material';

function UiUx({ open, onClose, service }) {
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
        <Typography variant="h4" component="h2" className="text-gry text-center">
          UI/UX Design
        </Typography>
        <div className="bg-lght rounded-md p-2 mt-3 mb-2">
          <Typography variant="h5" sx={{ ...labelStyle }}>
            Why Invest in UI/UX Design?
          </Typography>

          <Typography sx={{ ...subStyle }}>Engaging and Intuitive User Experience:</Typography>
          <Typography sx={{ ...textStyle }}>
            A well-designed interface ensures users can navigate your application effortlessly. We focus on **intuitive layouts, smooth interactions, and seamless navigation**, making every interaction enjoyable and efficient.
          </Typography>

          <Typography variant="subtitle1" sx={{ ...subStyle }}>Visually Stunning Designs:</Typography>
          <Typography sx={{ ...textStyle }}>
            First impressions matter. Our UI designs are **aesthetically pleasing, modern, and aligned with your brand identity**, ensuring a visually engaging experience that captivates users from the first interaction.
          </Typography>

          <Typography variant="subtitle1" sx={{ ...subStyle }}>User-Centered Approach:</Typography>
          <Typography sx={{ ...textStyle }}>
            We prioritize **human-centered design** by analyzing user behavior, preferences, and pain points. Our process ensures that your product is tailored to the needs and expectations of your target audience.
          </Typography>

          <Typography variant="subtitle1" sx={{ ...subStyle }}>Cross-Platform Consistency:</Typography>
          <Typography sx={{ ...textStyle }}>
            Whether on **desktop, tablet, or mobile**, we design interfaces that offer a consistent and delightful experience across all devices and platforms.
          </Typography>

          <Typography variant="subtitle1" sx={{ ...subStyle }}>Accessibility and Inclusivity:</Typography>
          <Typography sx={{ ...textStyle }}>
            A great UI/UX should be accessible to everyone. We implement **WCAG-compliant accessibility features**, ensuring inclusivity for users of all abilities.
          </Typography>

          <Typography variant="subtitle1" sx={{ ...subStyle }}>Performance-Optimized Interfaces:</Typography>
          <Typography sx={{ ...textStyle }}>
            A slow or clunky UI can frustrate users. Our designs are **optimized for speed and efficiency**, reducing load times and enhancing the overall user journey.
          </Typography>

          <Typography variant="h6" sx={{ ...labelStyle, mt: 4 }}>
            Our UI/UX Design Process
          </Typography>

          <Typography variant="subtitle1" sx={{ ...subStyle }}>Research and User Insights:</Typography>
          <Typography sx={{ ...textStyle }}>
            We conduct **market research, competitor analysis, and user testing** to gather insights and define the best approach for your audience.
          </Typography>

          <Typography variant="subtitle1" sx={{ ...subStyle }}>Wireframing and Prototyping:</Typography>
          <Typography sx={{ ...textStyle }}>
            Our team creates **low-fidelity wireframes and interactive prototypes**, allowing stakeholders to visualize and test the user journey before full-scale development.
          </Typography>

          <Typography variant="subtitle1" sx={{ ...subStyle }}>UI Design and Branding:</Typography>
          <Typography sx={{ ...textStyle }}>
            We craft **stunning UI elements, typography, color schemes, and iconography**, ensuring the final product aligns with your brand's identity.
          </Typography>

          <Typography variant="subtitle1" sx={{ ...subStyle }}>User Testing and Iteration:</Typography>
          <Typography sx={{ ...textStyle }}>
            Before launch, we conduct **A/B testing and usability tests** to gather feedback, refine designs, and improve the overall experience.
          </Typography>

          <Typography variant="subtitle1" sx={{ ...subStyle }}>Implementation and Handoff:</Typography>
          <Typography sx={{ ...textStyle }}>
            Our team collaborates closely with developers to ensure a **smooth design-to-code transition**, maintaining design integrity throughout development.
          </Typography>

          <Typography variant="subtitle1" sx={{ ...subStyle }}>Post-Launch Optimization:</Typography>
          <Typography sx={{ ...textStyle }}>
            Design is an ongoing process. We monitor user behavior post-launch and **iterate based on real-world data** to continuously enhance the experience.
          </Typography>
        </div>
      </Box>
    </Modal>
  );

}

export default UiUx;
