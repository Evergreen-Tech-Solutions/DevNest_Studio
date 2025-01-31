import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import { Modal, Box, Typography, Button, FormControl, FormLabel, RadioGroup, FormControlLabel, Radio, Checkbox, TextField, MenuItem } from '@mui/material';

function BusinessAutomation({ open, onClose, service }) {
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
          Business Process Automation
        </Typography>
        <div className="bg-lght rounded-md p-2 mt-3 mb-2">
          <Typography variant="h5" sx={{ ...labelStyle }}>
            Why Invest in Business Process Automation?
          </Typography>

          <Typography sx={{ ...subStyle }}>Boost Efficiency and Productivity:</Typography>
          <Typography sx={{ ...textStyle }}>
            Manual processes slow down operations and increase costs. With **Business Process Automation (BPA)**, we **streamline repetitive tasks, reduce human errors, and improve overall efficiency**, allowing teams to focus on high-value work.
          </Typography>

          <Typography variant="subtitle1" sx={{ ...subStyle }}>Cost Reduction and Resource Optimization:</Typography>
          <Typography sx={{ ...textStyle }}>
            Automating key business functions helps **cut down operational costs** by minimizing labor-intensive tasks. It also ensures **optimal resource allocation**, leading to better cost-effectiveness and profitability.
          </Typography>

          <Typography variant="subtitle1" sx={{ ...subStyle }}>Enhanced Accuracy and Compliance:</Typography>
          <Typography sx={{ ...textStyle }}>
            Manual data entry and workflows often lead to errors and inconsistencies. Our **automation solutions** ensure **data accuracy, compliance with industry regulations, and real-time tracking**, reducing risks and inefficiencies.
          </Typography>

          <Typography variant="subtitle1" sx={{ ...subStyle }}>Seamless System Integration:</Typography>
          <Typography sx={{ ...textStyle }}>
            Business automation enables **seamless communication between different platforms and applications**. We integrate **ERP, CRM, accounting software, and other business tools** to create a **unified workflow**.
          </Typography>

          <Typography variant="subtitle1" sx={{ ...subStyle }}>Scalability and Growth Enablement:</Typography>
          <Typography sx={{ ...textStyle }}>
            As your business grows, manual processes can become bottlenecks. Our **scalable automation solutions** adapt to your evolving needs, ensuring smooth expansion without requiring additional workforce overhead.
          </Typography>

          <Typography variant="subtitle1" sx={{ ...subStyle }}>Improved Customer Experience:</Typography>
          <Typography sx={{ ...textStyle }}>
            Automating customer-facing processes—such as **chatbots, self-service portals, and automated support systems**—**reduces response times and enhances user satisfaction**, leading to stronger customer relationships.
          </Typography>

          <Typography variant="h6" sx={{ ...labelStyle, mt: 4 }}>
            Our Business Process Automation Approach
          </Typography>

          <Typography variant="subtitle1" sx={{ ...subStyle }}>Process Analysis & Workflow Mapping:</Typography>
          <Typography sx={{ ...textStyle }}>
            We conduct **an in-depth analysis of your existing workflows** to identify bottlenecks, inefficiencies, and automation opportunities, ensuring a **strategic implementation**.
          </Typography>

          <Typography variant="subtitle1" sx={{ ...subStyle }}>Custom Automation Development:</Typography>
          <Typography sx={{ ...textStyle }}>
            Every business has unique needs. We design **custom automation tools, scripts, and AI-driven solutions** that align with your specific operational requirements.
          </Typography>

          <Typography variant="subtitle1" sx={{ ...subStyle }}>Cloud-Based & AI-Driven Solutions:</Typography>
          <Typography sx={{ ...textStyle }}>
            We implement **cloud-based automation, AI-powered decision-making systems, and machine learning models** to optimize workflows and enhance efficiency.
          </Typography>

          <Typography variant="subtitle1" sx={{ ...subStyle }}>Robotic Process Automation (RPA):</Typography>
          <Typography sx={{ ...textStyle }}>
            For highly repetitive tasks, we utilize **Robotic Process Automation (RPA)** to perform **automated data entry, reporting, and workflow execution**, minimizing manual effort.
          </Typography>

          <Typography variant="subtitle1" sx={{ ...subStyle }}>Testing & Optimization:</Typography>
          <Typography sx={{ ...textStyle }}>
            Before deployment, we conduct **rigorous testing and performance evaluations** to ensure the automation meets efficiency goals and integrates seamlessly into your ecosystem.
          </Typography>

          <Typography variant="subtitle1" sx={{ ...subStyle }}>Ongoing Monitoring & Continuous Improvement:</Typography>
          <Typography sx={{ ...textStyle }}>
            Automation is not a one-time process. We offer **continuous monitoring, updates, and enhancements**, ensuring that your automation system evolves with your business.
          </Typography>
        </div>
      </Box>
    </Modal>
  );

}

export default BusinessAutomation;
