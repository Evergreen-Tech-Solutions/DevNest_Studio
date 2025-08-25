// AiIntegrationModal.js
import React from "react";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  useTheme,
  Button,
  Box,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ChatIcon from "@mui/icons-material/Chat";
import InsightsIcon from "@mui/icons-material/Insights";
import AutoFixHighIcon from "@mui/icons-material/AutoFixHigh";
import SmartToyIcon from "@mui/icons-material/SmartToy";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { useNavigate } from "react-router-dom";

function AiIntegrationModal({ open, onClose }) {
  const theme = useTheme();
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("/pricing");
  };

  return (
    <Dialog open={open} onClose={onClose} fullWidth maxWidth="md">
      <DialogTitle
        sx={{
          fontWeight: 600,
          backgroundColor: theme.palette.background.default,
          color: theme.palette.text.primary,
          px: 4,
          pt: 3,
        }}
      >
        AI Integration
      </DialogTitle>
      <DialogContent
        dividers
        sx={{
          backgroundColor: theme.palette.background.default,
          color: theme.palette.text.primary,
          px: 4,
          pb: 4,
        }}
      >
        <Typography variant="body1" mb={3}>
          Enhance your business with smart automation and AI-powered tools designed to save you time,
          boost engagement, and gain deeper insights.
        </Typography>

        {/* Chatbots & Virtual Assistants */}
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Box display="flex" alignItems="center" gap={2}>
              <ChatIcon color="primary" />
              <Typography fontWeight={600}>Chatbots & Virtual Assistants</Typography>
            </Box>
          </AccordionSummary>
          <AccordionDetails>
            <Typography variant="body2">
              Implement 24/7 AI-powered chat systems to handle customer inquiries, guide users through your website or app,
              and reduce response time. We can train models specific to your business and integrate them with platforms like
              Messenger, WhatsApp, or your website.
            </Typography>
          </AccordionDetails>
        </Accordion>

        {/* Data Analysis & Reporting */}
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Box display="flex" alignItems="center" gap={2}>
              <InsightsIcon color="primary" />
              <Typography fontWeight={600}>Data Analysis & Reporting</Typography>
            </Box>
          </AccordionSummary>
          <AccordionDetails>
            <Typography variant="body2">
              Use AI to automatically extract insights from your data. We build tools that analyze sales trends,
              customer behavior, and performance metrics—presented in clean dashboards for better decision-making.
            </Typography>
          </AccordionDetails>
        </Accordion>

        {/* AI-Powered Content Generation */}
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Box display="flex" alignItems="center" gap={2}>
              <AutoFixHighIcon color="primary" />
              <Typography fontWeight={600}>AI-Powered Content Generation</Typography>
            </Box>
          </AccordionSummary>
          <AccordionDetails>
            <Typography variant="body2">
              Save time by automating writing tasks like product descriptions, emails, blog posts, or even custom image generation.
              We'll tailor AI models to match your brand’s tone and integrate them into your workflow.
            </Typography>
          </AccordionDetails>
        </Accordion>

        {/* Custom AI Solutions */}
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Box display="flex" alignItems="center" gap={2}>
              <SmartToyIcon color="primary" />
              <Typography fontWeight={600}>Custom AI Solutions</Typography>
            </Box>
          </AccordionSummary>
          <AccordionDetails>
            <Typography variant="body2">
              From building recommendation systems to automating internal processes like HR screening or financial projections,
              we develop custom AI tools using models like GPT, BERT, and other ML frameworks to fit your exact needs.
            </Typography>
          </AccordionDetails>
        </Accordion>

        {/* CTA */}
        <Box textAlign="center" mt={4}>
          <Button
            onClick={handleNavigate}
            variant="contained"
            color="primary"
            endIcon={<ArrowForwardIcon />}
          >
            View Pricing Packages
          </Button>
        </Box>
      </DialogContent>
    </Dialog>
  );
}

export default AiIntegrationModal;
