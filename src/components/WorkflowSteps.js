// WorkflowSteps.js
import React from "react";
import {
  FaComments,
  FaMagic,
  FaCheckCircle,
  FaArrowRight,
} from "react-icons/fa";
import { motion } from "framer-motion";
import {
  Box,
  Typography,
  useTheme,
  useMediaQuery,
  Container,
} from "@mui/material";

const steps = [
  {
    icon: <FaComments size={36} color="#00a896" />,
    title: "Choose & Consult",
    description:
      "Select the package that fits your needs and book a free consultation with our team.",
  },
  {
    icon: <FaMagic size={36} color="#00a896" />,
    title: "Share Your Vision",
    description:
      "Tell us your preferences, ideas, and inspirations. We'll handle the design and development.",
  },
  {
    icon: <FaCheckCircle size={36} color="#00a896" />,
    title: "Launch & Thrive",
    description:
      "We deliver your polished product — tested, deployed, and ready to grow your business.",
  },
];

function WorkflowSteps() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box
      sx={{
        mb: 8,
        pt: 2,
        px: 2,
        backgroundColor: theme.palette.background.default,
      }}
    >
      <Container maxWidth="lg" sx={{ textAlign: "center" }}>
        <Typography
          variant="h4"
          fontWeight={400}
          mb={6}
          color={theme.palette.text.primary}
        >
          Our Workflow in 3 Simple Steps
        </Typography>

        <Box
          sx={{
            display: "flex",
            flexDirection: isMobile ? "column" : "row",
            alignItems: "center",
            justifyContent: "center",
            flexWrap: "nowrap",
            gap: 3,
            flexGrow: 1,
          }}
        >
          {steps.map((step, index) => (
            <React.Fragment key={index}>
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.4 }}
              >
                <Box
                  sx={{
                    width: isMobile ? "100%" : 300,
                    minHeight: 250,
                    backdropFilter: "blur(8px)",
                    backgroundColor:
                      theme.palette.mode === "dark"
                        ? "rgba(255, 255, 255, 0.05)"
                        : "rgba(255, 255, 255, 0.7)",
                    borderRadius: 3,
                    p: 4,
                    textAlign: "center",
                    boxShadow: theme.shadows[6],
                    border: `1px solid ${
                      theme.palette.mode === "dark"
                        ? "rgba(255, 255, 255, 0.2)"
                        : "rgba(0, 0, 0, 0.1)"
                    }`,
                  }}
                >
                  <Box mb={2} display="flex" justifyContent="center">
                    {step.icon}
                  </Box>
                  <Typography
                    variant="h6"
                    fontWeight={600}
                    gutterBottom
                    color={theme.palette.text.primary}
                  >
                    {step.title}
                  </Typography>
                  <Typography
                    variant="body3"
                    color={theme.palette.text.secondary}
                  >
                    {step.description}
                  </Typography>
                </Box>
              </motion.div>

              {/* Arrows except after last step */}
              {index < steps.length - 1 && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.5 + index * 0.4 }}
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: 40,
                      mx: isMobile ? 0 : 1,
                      my: isMobile ? 2 : 0,
                      color: "#00a896",
                      transition: "transform 0.3s ease-in-out",
                      transform: isMobile ? "rotate(90deg)" : "none",
                    }}
                  >
                    →
                  </Typography>
                </motion.div>
              )}
            </React.Fragment>
          ))}
        </Box>
      </Container>
    </Box>
  );
}

export default WorkflowSteps;
