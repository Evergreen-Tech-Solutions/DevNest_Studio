// DesignQualityLifecycleModal.js
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
import PaletteIcon from "@mui/icons-material/Palette";
import BugReportIcon from "@mui/icons-material/BugReport";
import BuildIcon from "@mui/icons-material/Build";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { useNavigate } from "react-router-dom";

function DesignQualityLifecycleModal({ open, onClose }) {
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
        Design & Quality Lifecycle
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
          Our commitment to quality spans the entire lifecycle of your product — from the first pixel to post-launch performance. Here's how we ensure every digital experience we build is top-tier:
        </Typography>

        {/* UI/UX Design */}
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Box display="flex" alignItems="center" gap={2}>
              <PaletteIcon color="primary" />
              <Typography fontWeight={600}>UI/UX Design</Typography>
            </Box>
          </AccordionSummary>
          <AccordionDetails>
            <Typography variant="body2">
              We design seamless, intuitive user interfaces that engage and convert. Using best practices in UX research and UI design, we focus on user journeys, visual hierarchy, accessibility, and responsiveness. Every design is tested to enhance usability and reflect your brand identity.
            </Typography>
          </AccordionDetails>
        </Accordion>

        {/* Testing & Quality Assurance */}
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Box display="flex" alignItems="center" gap={2}>
              <BugReportIcon color="primary" />
              <Typography fontWeight={600}>Testing & Quality Assurance</Typography>
            </Box>
          </AccordionSummary>
          <AccordionDetails>
            <Typography variant="body2">
              Our rigorous QA process includes functional testing, bug tracking, performance evaluation, and cross-device compatibility checks. We ensure every feature works as expected, and every user interaction is smooth and reliable — before anything goes live.
            </Typography>
          </AccordionDetails>
        </Accordion>

        {/* Deployment & Maintenance */}
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Box display="flex" alignItems="center" gap={2}>
              <BuildIcon color="primary" />
              <Typography fontWeight={600}>Deployment & Maintenance</Typography>
            </Box>
          </AccordionSummary>
          <AccordionDetails>
            <Typography variant="body2">
              We handle smooth deployments to production, including hosting setup, domain configuration, and performance tuning. Post-launch, we offer maintenance services to fix issues, roll out updates, monitor uptime, and continuously improve your digital product.
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

export default DesignQualityLifecycleModal;
