// src/components/modals/w_eCommerce.js
import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import { Modal, Box, Typography, Button, FormControl, FormLabel, RadioGroup, FormControlLabel, Radio, Checkbox, TextField, MenuItem } from '@mui/material';


function ECommerce({ open, onClose, service }) {
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
          E-commerce Solutions
        </Typography>
        <div className="bg-lght rounded-md p-2 mt-3 mb-2">
          <Typography variant="h5" sx={{ ...labelStyle }}>
            Why Choose Our E-commerce Solutions?
          </Typography>

          <Typography sx={{ ...subStyle }}>Seamless Shopping Experience:</Typography>
          <Typography sx={{ ...textStyle }}>
            A smooth and intuitive user journey is essential for any online store. Our e-commerce solutions prioritize a frictionless shopping experience, from product discovery to checkout, ensuring that customers can navigate your store effortlessly.
          </Typography>

          <Typography variant="subtitle1" sx={{ ...subStyle }}>Scalability for Growth:</Typography>
          <Typography sx={{ ...textStyle }}>
            Whether you're a startup or an established brand, our solutions grow with you. We develop e-commerce platforms that handle increasing product catalogs, customer traffic, and business expansions without compromising performance.
          </Typography>

          <Typography variant="subtitle1" sx={{ ...subStyle }}>Secure Payment Integration:</Typography>
          <Typography sx={{ ...textStyle }}>
            Trust is key in online transactions. We integrate secure payment gateways, ensuring customers' sensitive data is protected while providing multiple payment options, including credit cards, PayPal, Apple Pay, and cryptocurrency.
          </Typography>

          <Typography variant="subtitle1" sx={{ ...subStyle }}>Mobile-Optimized Shopping:</Typography>
          <Typography sx={{ ...textStyle }}>
            With mobile commerce on the rise, our e-commerce solutions are fully responsive and optimized for smartphones and tablets, ensuring customers enjoy a seamless experience across all devices.
          </Typography>

          <Typography variant="subtitle1" sx={{ ...subStyle }}>Inventory and Order Management:</Typography>
          <Typography sx={{ ...textStyle }}>
            Effortlessly manage your products, stock levels, and orders with our integrated inventory solutions. Automate notifications, low-stock alerts, and streamline logistics to maintain operational efficiency.
          </Typography>

          <Typography variant="subtitle1" sx={{ ...subStyle }}>Advanced Analytics and Insights:</Typography>
          <Typography sx={{ ...textStyle }}>
            Understand your customers better with built-in analytics tools that track sales trends, user behavior, and conversion rates. Our data-driven insights help optimize marketing strategies and improve your store's performance.
          </Typography>

          <Typography variant="h6" sx={{ ...labelStyle, mt: 4 }}>
            Our E-commerce Development Process
          </Typography>

          <Typography variant="subtitle1" sx={{ ...subStyle }}>Market Research and Strategy:</Typography>
          <Typography sx={{ ...textStyle }}>
            We analyze your business needs, competitors, and target audience to craft a tailored strategy for your online store.
          </Typography>

          <Typography variant="subtitle1" sx={{ ...subStyle }}>Custom Design and Branding:</Typography>
          <Typography sx={{ ...textStyle }}>
            Our team designs a visually compelling and user-friendly interface that aligns with your brand identity, making your store stand out.
          </Typography>

          <Typography variant="subtitle1" sx={{ ...subStyle }}>Development and Integration:</Typography>
          <Typography sx={{ ...textStyle }}>
            We bring the design to life with fast, scalable, and secure development. Our solutions integrate seamlessly with third-party tools, from CRM systems to shipping providers.
          </Typography>

          <Typography variant="subtitle1" sx={{ ...subStyle }}>Testing and Quality Assurance:</Typography>
          <Typography sx={{ ...textStyle }}>
            Every feature is rigorously tested to ensure flawless functionality across all devices, ensuring smooth performance before launch.
          </Typography>

          <Typography variant="subtitle1" sx={{ ...subStyle }}>Launch and Post-Launch Support:</Typography>
          <Typography sx={{ ...textStyle }}>
            Once your store goes live, we provide ongoing maintenance, updates, and support to ensure continued success and growth.
          </Typography>

          <Typography variant="subtitle1" sx={{ ...subStyle }}>Marketing and Optimization:</Typography>
          <Typography sx={{ ...textStyle }}>
            Our team helps optimize your store for search engines and implement digital marketing strategies to drive traffic and increase sales.
          </Typography>
        </div>
      </Box>
    </Modal>
  );

}

export default ECommerce;
