// src/components/modals/w_cms.js
import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import { Modal, Box, Typography, Button, FormControl, FormLabel, RadioGroup, FormControlLabel, Radio, Checkbox, TextField, MenuItem } from '@mui/material';

function CrossPlatform({ open, onClose, service }) {
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
          Cross-Platform Development
        </Typography>
        <div className="bg-lght rounded-md p-2 mt-3 mb-2">
          <Typography variant="h5" sx={{ ...labelStyle }}>
            Why Choose Cross-Platform Development?
          </Typography>

          <Typography sx={{ ...subStyle }}>Seamless Multi-Device Experience:</Typography>
          <Typography sx={{ ...textStyle }}>
            Users expect apps that work effortlessly across different platforms. Our cross-platform development approach ensures a **consistent user experience** whether on **Web, iOS, or Android**, making your app accessible to a wider audience.
          </Typography>

          <Typography variant="subtitle1" sx={{ ...subStyle }}>Cost-Effective and Faster Development:</Typography>
          <Typography sx={{ ...textStyle }}>
            Developing separate apps for each platform can be costly and time-consuming. Cross-platform solutions **reduce development time and cost** by using a **single codebase**, ensuring **faster deployment** without sacrificing quality.
          </Typography>

          <Typography variant="subtitle1" sx={{ ...subStyle }}>Performance Optimization:</Typography>
          <Typography sx={{ ...textStyle }}>
            With modern cross-platform technologies like **React Native, Flutter, and Progressive Web Apps (PWAs)**, we build apps that **deliver near-native performance** with smooth animations and fast load times.
          </Typography>

          <Typography variant="subtitle1" sx={{ ...subStyle }}>Scalability and Future-Proofing:</Typography>
          <Typography sx={{ ...textStyle }}>
            As your business grows, your app needs to evolve too. Our solutions are **scalable and easy to maintain**, allowing future updates and feature additions without requiring a complete rebuild for each platform.
          </Typography>

          <Typography variant="subtitle1" sx={{ ...subStyle }}>Cloud Integration and Data Synchronization:</Typography>
          <Typography sx={{ ...textStyle }}>
            Keep user data **synced in real-time** across all devices with **cloud-based storage and API integrations**. Whether users switch between devices or use multiple platforms, they will always have access to the latest data.
          </Typography>

          <Typography variant="subtitle1" sx={{ ...subStyle }}>Offline Functionality:</Typography>
          <Typography sx={{ ...textStyle }}>
            Ensure **seamless usability** even without an internet connection. Our cross-platform apps include **offline mode capabilities**, allowing users to access key features and sync data once they’re back online.
          </Typography>

          <Typography variant="h6" sx={{ ...labelStyle, mt: 4 }}>
            Our Cross-Platform Development Process
          </Typography>

          <Typography variant="subtitle1" sx={{ ...subStyle }}>Strategy and Planning:</Typography>
          <Typography sx={{ ...textStyle }}>
            We analyze your business needs, audience, and market trends to create a **strategic roadmap** for your cross-platform application.
          </Typography>

          <Typography variant="subtitle1" sx={{ ...subStyle }}>UI/UX Design:</Typography>
          <Typography sx={{ ...textStyle }}>
            Our designers craft **intuitive and visually appealing interfaces** that offer a smooth, engaging experience on every device.
          </Typography>

          <Typography variant="subtitle1" sx={{ ...subStyle }}>Development and Integration:</Typography>
          <Typography sx={{ ...textStyle }}>
            We use the latest **cross-platform frameworks** to build high-performance apps while integrating **third-party services, APIs, and cloud-based systems**.
          </Typography>

          <Typography variant="subtitle1" sx={{ ...subStyle }}>Testing and Quality Assurance:</Typography>
          <Typography sx={{ ...textStyle }}>
            We rigorously test across multiple devices, operating systems, and screen sizes to **ensure consistency and stability**.
          </Typography>

          <Typography variant="subtitle1" sx={{ ...subStyle }}>Deployment and App Store Optimization:</Typography>
          <Typography sx={{ ...textStyle }}>
            We help publish your app on **Google Play, the Apple App Store, and the web**, following best practices for maximum visibility and engagement.
          </Typography>

          <Typography variant="subtitle1" sx={{ ...subStyle }}>Post-Launch Support and Updates:</Typography>
          <Typography sx={{ ...textStyle }}>
            Our work doesn’t stop after launch. We offer **continuous monitoring, updates, and improvements** to keep your app performing at its best.
          </Typography>

          <Typography variant="subtitle1" sx={{ ...subStyle }}>User Analytics and Growth Optimization:</Typography>
          <Typography sx={{ ...textStyle }}>
            Using **advanced analytics**, we track user engagement, behavior, and performance metrics to refine and enhance the app over time.
          </Typography>
        </div>
      </Box>
    </Modal>
  );

}

export default CrossPlatform;
