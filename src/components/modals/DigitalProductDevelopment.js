// DigitalProductDevelopment.js
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
import WebIcon from "@mui/icons-material/LaptopMac";
import AppIcon from "@mui/icons-material/PhoneIphone";
import ShopIcon from "@mui/icons-material/ShoppingCart";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { useNavigate } from "react-router-dom";

function DigitalProductDevelopmentModal({ open, onClose }) {
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
        Digital Product Development
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
          We specialize in building reliable, scalable, and engaging digital products that
          empower your business. Explore the areas we cover:
        </Typography>

        {/* Web Development */}
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Box display="flex" alignItems="center" gap={2}>
              <WebIcon color="primary" />
              <Typography fontWeight={600}>Web Development</Typography>
            </Box>
          </AccordionSummary>
          <AccordionDetails>
            <Typography variant="body2">
              We build modern, responsive websites tailored to your brand. Whether it's a landing
              page, blog, or corporate site, we ensure fast loading times, SEO optimization,
              accessibility, and mobile responsiveness using frameworks like React, Next.js, or WordPress.
            </Typography>
          </AccordionDetails>
        </Accordion>

        {/* App Development */}
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Box display="flex" alignItems="center" gap={2}>
              <AppIcon color="primary" />
              <Typography fontWeight={600}>App Development</Typography>
            </Box>
          </AccordionSummary>
          <AccordionDetails>
            <Typography variant="body2">
              We create cross-platform mobile applications using technologies like Flutter or React Native.
              From prototyping to app store deployment, we ensure a smooth user experience,
              performance, and seamless integration with your backend.
            </Typography>
          </AccordionDetails>
        </Accordion>

        {/* E-commerce Solutions */}
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Box display="flex" alignItems="center" gap={2}>
              <ShopIcon color="primary" />
              <Typography fontWeight={600}>E-commerce Solutions</Typography>
            </Box>
          </AccordionSummary>
          <AccordionDetails>
            <Typography variant="body2">
              We build scalable online stores with secure checkout, product galleries, inventory management,
              and integrations with Stripe, PayPal, and other platforms. Whether you're selling physical or digital
              products, our e-commerce solutions are tailored for growth.
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

export default DigitalProductDevelopmentModal;
