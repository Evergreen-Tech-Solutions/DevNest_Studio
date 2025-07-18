// src/components/modals/w_cms.js
import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import { Modal, Box, Typography, Button, FormControl, FormLabel, RadioGroup, FormControlLabel, Radio, Checkbox, TextField, MenuItem } from '@mui/material';

function TestingQa({ open, onClose, service }) {
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
    maxWidth: '55%',
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
          Testing, Q/A, Deployment & Maintenance
        </Typography>
        <div className="bg-lght rounded-md p-2 mt-3 mb-2">
          <Typography variant="h5" sx={{ ...labelStyle }}>
            Why Are Testing, Deployment & Maintenance Essential?
          </Typography>

          <Typography sx={{ ...subStyle }}>Flawless Performance Assurance:</Typography>
          <Typography sx={{ ...textStyle }}>
            Ensuring a bug-free and seamless experience is critical. Our **quality assurance (Q/A) process rigorously tests your application across different devices, browsers, and platforms** to identify and resolve any issues before launch.
          </Typography>

          <Typography variant="subtitle1" sx={{ ...subStyle }}>Security and Stability Checks:</Typography>
          <Typography sx={{ ...textStyle }}>
            Security vulnerabilities can be a major risk. Our team conducts **penetration testing, encryption validation, and compliance audits** to ensure your platform is **safe from cyber threats and data breaches**.
          </Typography>

          <Typography variant="subtitle1" sx={{ ...subStyle }}>Cross-Browser and Device Compatibility:</Typography>
          <Typography sx={{ ...textStyle }}>
            Every user interacts with your application differently. We perform **cross-browser testing and mobile responsiveness checks**, ensuring that your site or app functions **flawlessly on all devices and screen sizes**.
          </Typography>

          <Typography variant="subtitle1" sx={{ ...subStyle }}>Performance Optimization:</Typography>
          <Typography sx={{ ...textStyle }}>
            Slow applications can drive users away. We run **load testing, stress testing, and performance optimizations** to **reduce load times, enhance speed, and ensure smooth functionality under high traffic conditions**.
          </Typography>

          <Typography variant="subtitle1" sx={{ ...subStyle }}>Seamless Deployment Process:</Typography>
          <Typography sx={{ ...textStyle }}>
            We handle all aspects of deployment, ensuring a **smooth transition from development to production**. Whether launching on **web servers, cloud platforms, or app stores**, we manage all configurations and backend setups.
          </Typography>

          <Typography variant="subtitle1" sx={{ ...subStyle }}>Continuous Monitoring and Support:</Typography>
          <Typography sx={{ ...textStyle }}>
            Our job doesn’t stop at deployment. We offer **real-time monitoring, proactive issue resolution, and performance tracking** to ensure your system **runs efficiently with minimal downtime**.
          </Typography>

          <Typography variant="h6" sx={{ ...labelStyle, mt: 4 }}>
            Our Testing, Deployment & Maintenance Process
          </Typography>

          <Typography variant="subtitle1" sx={{ ...subStyle }}>Automated and Manual Testing:</Typography>
          <Typography sx={{ ...textStyle }}>
            We combine **automated testing tools** (e.g., Selenium, Jest, Cypress) with **manual testing** to cover every possible use case and edge scenario.
          </Typography>

          <Typography variant="subtitle1" sx={{ ...subStyle }}>User Acceptance Testing (UAT):</Typography>
          <Typography sx={{ ...textStyle }}>
            Before launch, we work closely with stakeholders and real users to perform **UAT sessions, ensuring the product meets all business and functional requirements**.
          </Typography>

          <Typography variant="subtitle1" sx={{ ...subStyle }}>Error Tracking and Debugging:</Typography>
          <Typography sx={{ ...textStyle }}>
            We integrate **real-time error tracking tools** (like Sentry or LogRocket) to capture bugs and unexpected behaviors, allowing us to **quickly fix issues post-launch**.
          </Typography>

          <Typography variant="subtitle1" sx={{ ...subStyle }}>CI/CD Pipeline Integration:</Typography>
          <Typography sx={{ ...textStyle }}>
            We leverage **Continuous Integration/Continuous Deployment (CI/CD) pipelines** to automate deployments, making updates smoother and reducing manual errors.
          </Typography>

          <Typography variant="subtitle1" sx={{ ...subStyle }}>Ongoing Updates & Feature Enhancements:</Typography>
          <Typography sx={{ ...textStyle }}>
            Technology evolves, and so should your platform. Our **continuous maintenance services** ensure your application stays updated with the latest features, security patches, and performance optimizations.
          </Typography>

          <Typography variant="subtitle1" sx={{ ...subStyle }}>Analytics and Feedback-Based Improvements:</Typography>
          <Typography sx={{ ...textStyle }}>
            Post-launch, we use **user behavior analytics, heatmaps, and feedback tools** to analyze engagement and refine features, ensuring the **best possible experience for users**.
          </Typography>
        </div>
      </Box>
    </Modal>
  );

}

export default TestingQa;
