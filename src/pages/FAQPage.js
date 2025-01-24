import React from "react";
import {
  Container,
  Typography,
  Box,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Divider,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Styles from "../styles/FAQPage.module.css";

function FAQPage() {
  return (
    <Container maxWidth="md" className={Styles.faq} sx={{ py: 6 }}>
      {/* Page Title */}
      <Box textAlign="center" sx={{ mb: 4, mt: 2 }}>
        <Typography variant="h3" component="h1" gutterBottom>
          Frequently Asked Questions
        </Typography>
        <Typography variant="body1">
          Find answers to the most common questions about our services and
          process.
        </Typography>
      </Box>

      <Divider sx={{ my: 4 }} />

      {/* FAQ Items */}
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="faq1-content"
          id="faq1-header"
        >
          <Typography variant="h6">What services do you offer?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            We provide custom web development, mobile app development, AI
            integration, e-commerce solutions, and business process automation.
            Whether you’re looking for a small business website or a large-scale
            enterprise solution, we’ve got you covered.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="faq2-content"
          id="faq2-header"
        >
          <Typography variant="h6">
            How long does it take to complete a project?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            The timeline varies depending on the complexity and scope of the
            project. Smaller projects, such as landing pages, may take 2-4
            weeks, while larger projects, such as mobile apps or custom
            solutions, may take 2-6 months or more.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="faq3-content"
          id="faq3-header"
        >
          <Typography variant="h6">What is your pricing model?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            We offer flexible pricing based on the project scope and complexity.
            We typically provide fixed-price quotes after discussing your
            requirements in detail, but hourly pricing may be available for
            ongoing support or maintenance.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="faq4-content"
          id="faq4-header"
        >
          <Typography variant="h6">
            Do you offer support and maintenance after project delivery?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Yes! We offer ongoing support and maintenance packages to ensure
            your website or app stays updated, secure, and performs optimally.
            We’re here to help with updates, troubleshooting, and enhancements
            as your needs evolve.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="faq5-content"
          id="faq5-header"
        >
          <Typography variant="h6">How can I contact you?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            You can reach us via the{" "}
            <a href="/contact" className="link">
              contact form
            </a>{" "}
            on our website or email us directly at{" "}
            <a href="mailto:contact@thedevnest.ca" className="link">
              contact@thedevnest.ca
            </a>
            . We’re happy to answer any questions or discuss your project needs!
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Divider sx={{ my: 4 }} />

      {/* Contact Us CTA */}
      <Box textAlign="center" sx={{ mt: 4 }}>
        <Typography variant="h4" gutterBottom>
          Still Have Questions?
        </Typography>
        <Typography variant="body1" paragraph>
          Feel free to{" "}
          <a href="/contact" className="link">
            get in touch
          </a>
          . We’re here to help!
        </Typography>
      </Box>
    </Container>
  );
}

export default FAQPage;
