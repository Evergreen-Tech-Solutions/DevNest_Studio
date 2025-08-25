// BusinessOptimizationModal.js
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
import CampaignIcon from "@mui/icons-material/Campaign";
import SettingsAutomationIcon from "@mui/icons-material/SettingsSuggest";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { useNavigate } from "react-router-dom";

function BusinessOptimizationModal({ open, onClose }) {
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
        Business Optimization
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
          We help you streamline your business operations and boost your visibility with smart marketing and automation strategies. Here's how:
        </Typography>

        {/* Business Marketing & Promotion */}
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Box display="flex" alignItems="center" gap={2}>
              <CampaignIcon color="primary" />
              <Typography fontWeight={600}>Business Marketing & Promotion</Typography>
            </Box>
          </AccordionSummary>
          <AccordionDetails>
            <Typography variant="body2">
              We plan and execute digital marketing campaigns that elevate your brand’s visibility. From SEO and social media to targeted ads and email marketing, we tailor strategies that reach the right audience and increase engagement across platforms.
            </Typography>
          </AccordionDetails>
        </Accordion>

        {/* Business Process Automation */}
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Box display="flex" alignItems="center" gap={2}>
              <SettingsAutomationIcon color="primary" />
              <Typography fontWeight={600}>Business Process Automation</Typography>
            </Box>
          </AccordionSummary>
          <AccordionDetails>
            <Typography variant="body2">
              We identify repetitive tasks in your workflow and automate them using tools like Zapier, Notion, Airtable, and custom backend scripts. This saves time, reduces human error, and improves productivity, allowing your team to focus on what really matters.
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

export default BusinessOptimizationModal;
