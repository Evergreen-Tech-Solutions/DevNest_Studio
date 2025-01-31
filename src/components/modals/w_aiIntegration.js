import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import { Modal, Box, Typography, Button, FormControl, FormLabel, RadioGroup, FormControlLabel, Radio, Checkbox, TextField, MenuItem } from '@mui/material';

function AiIntegration({ open, onClose, service }) {
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
          AI Integration
        </Typography>
        <div className="bg-lght rounded-md p-2 mt-3 mb-2">
          <Typography variant="h5" sx={{ ...labelStyle }}>
            Why Integrate AI into Your Applications?
          </Typography>

          <Typography sx={{ ...subStyle }}>Enhanced Decision-Making and Automation:</Typography>
          <Typography sx={{ ...textStyle }}>
            AI-driven systems enable **intelligent decision-making** by analyzing vast amounts of data, identifying patterns, and automating processes. This leads to **greater efficiency, cost savings, and reduced human error**.
          </Typography>

          <Typography variant="subtitle1" sx={{ ...subStyle }}>Personalized User Experience:</Typography>
          <Typography sx={{ ...textStyle }}>
            AI can adapt to **user behavior and preferences**, providing **customized recommendations, dynamic content, and intelligent interactions** that enhance engagement and satisfaction.
          </Typography>

          <Typography variant="subtitle1" sx={{ ...subStyle }}>Advanced Data Analytics and Insights:</Typography>
          <Typography sx={{ ...textStyle }}>
            With AI-powered **predictive analytics, machine learning models, and real-time data processing**, businesses can uncover **actionable insights**, anticipate trends, and make data-driven decisions faster.
          </Typography>

          <Typography variant="subtitle1" sx={{ ...subStyle }}>AI-Powered Chatbots and Virtual Assistants:</Typography>
          <Typography sx={{ ...textStyle }}>
            Improve **customer service and support** with AI-driven chatbots and voice assistants that handle queries, automate responses, and provide **instant, human-like interactions** 24/7.
          </Typography>

          <Typography variant="subtitle1" sx={{ ...subStyle }}>Computer Vision and Image Recognition:</Typography>
          <Typography sx={{ ...textStyle }}>
            AI integration allows applications to **analyze, process, and interpret images and videos**, enabling use cases such as **facial recognition, object detection, and automated surveillance**.
          </Typography>

          <Typography variant="subtitle1" sx={{ ...subStyle }}>Natural Language Processing (NLP):</Typography>
          <Typography sx={{ ...textStyle }}>
            Empower your applications with **NLP-driven text processing, voice recognition, and sentiment analysis** for smarter search functionality, automated translations, and contextual understanding.
          </Typography>

          <Typography variant="h6" sx={{ ...labelStyle, mt: 4 }}>
            Our AI Integration Process
          </Typography>

          <Typography variant="subtitle1" sx={{ ...subStyle }}>AI Strategy & Use Case Identification:</Typography>
          <Typography sx={{ ...textStyle }}>
            We assess your business needs and identify the best AI applications—whether it’s **automation, customer interaction, predictive analytics, or intelligent recommendations**.
          </Typography>

          <Typography variant="subtitle1" sx={{ ...subStyle }}>Machine Learning Model Development:</Typography>
          <Typography sx={{ ...textStyle }}>
            Our team designs, trains, and deploys **custom machine learning models** that continuously improve with real-world data, optimizing your business processes and user experience.
          </Typography>

          <Typography variant="subtitle1" sx={{ ...subStyle }}>Integration with Existing Systems:</Typography>
          <Typography sx={{ ...textStyle }}>
            We seamlessly integrate **AI APIs, cloud-based AI services, and in-house AI models** into your existing applications, ensuring compatibility and scalability.
          </Typography>

          <Typography variant="subtitle1" sx={{ ...subStyle }}>Testing & Validation:</Typography>
          <Typography sx={{ ...textStyle }}>
            AI models are rigorously tested using **real-time data, simulations, and continuous feedback loops** to ensure **high accuracy and reliable performance**.
          </Typography>

          <Typography variant="subtitle1" sx={{ ...subStyle }}>Deployment and Optimization:</Typography>
          <Typography sx={{ ...textStyle }}>
            We implement AI solutions in **cloud, edge, or on-premise environments**, ensuring real-time processing capabilities, **fast performance, and cost-effective scalability**.
          </Typography>

          <Typography variant="subtitle1" sx={{ ...subStyle }}>Ongoing Learning and AI Model Training:</Typography>
          <Typography sx={{ ...textStyle }}>
            AI systems need to evolve. We provide **continuous model training, performance monitoring, and AI-driven insights** to keep your application ahead of the curve.
          </Typography>
        </div>
      </Box>
    </Modal>
  );

}

export default AiIntegration;
