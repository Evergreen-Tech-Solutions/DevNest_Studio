import React, { useState } from "react";
import {
  Box,
  Button,
  Typography,
  useTheme,
  Card,
  CardContent,
  Fade,
  Grid,
  Divider,
} from "@mui/material";
import { FaCheckCircle } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const questions = [
  {
    question: "What is the main purpose of your website or app?",
    options: [
      { label: "Online presence for business", value: "starter" },
      { label: "Selling products or services", value: "ecommerce" },
      { label: "Internal tools or dashboard", value: "custom" },
      { label: "AI-powered functionality", value: "ai" },
    ],
  },
  {
    question:
      "Do you need integration with AI features (e.g., chatbots, recommendations)?",
    options: [
      { label: "Yes, definitely", value: "ai" },
      { label: "No, not really", value: "basic" },
    ],
  },
  {
    question: "How important is unique design and branding for your platform?",
    options: [
      { label: "Very important", value: "design" },
      { label: "Just want it to work", value: "basic" },
    ],
  },
  {
    question: "Will you need ongoing support or maintenance after launch?",
    options: [
      { label: "Yes, regular updates and support", value: "lifecycle" },
      { label: "No, just the launch", value: "basic" },
    ],
  },
];

const resultMap = {
  starter: {
    title: "Starter Package",
    description:
      "Perfect for small businesses or personal portfolios needing a simple web presence.",
    features: [
      "Basic responsive website",
      "Up to 5 pages",
      "Basic SEO optimization",
      "Contact form integration",
    ],
    price: "C$800",
    href: "/pricing#starter",
  },
  ecommerce: {
    title: "E-Commerce Package",
    description:
      "Ideal for businesses looking to sell products or services online.",
    features: [
      "Product listings",
      "Secure checkout",
      "Payment gateways",
      "Inventory management",
    ],
    price: "C$2,000",
    href: "/pricing#ecommerce",
  },
  ai: {
    title: "AI Integration Package",
    description:
      "Recommended for businesses wanting intelligent features like chatbots or AI tools.",
    features: [
      "AI chatbot integration",
      "Recommendation engine",
      "Smart automation",
      "Custom API setup",
    ],
    price: "Custom Quote",
    href: "/pricing#ai",
  },
  design: {
    title: "Design & UX Package",
    description:
      "Best for projects requiring strong branding, visuals, and user-first design.",
    features: [
      "Custom UI/UX design",
      "Design mockups",
      "Interaction design",
      "Brand guidelines",
    ],
    price: "C$1,500+",
    href: "/pricing#custom",
  },
  lifecycle: {
    title: "Full Lifecycle Package",
    description:
      "Comprehensive package including testing, deployment, and ongoing support.",
    features: [
      "QA & testing",
      "DevOps deployment",
      "Bug fixing & maintenance",
      "Version upgrades",
    ],
    price: "Custom Quote",
    href: "/pricing#custom",
  },
  custom: {
    title: "Custom Development",
    description:
      "Tailored applications for internal tools, dashboards, or special features.",
    features: [
      "Business automation",
      "Workflow optimization",
      "Database management",
      "Custom APIs",
    ],
    price: "Custom Quote",
    href: "/pricing#custom",
  },
};

function getTopCategory(selections) {
  if (!selections || selections.length === 0) return null;
  const count = {};
  selections.forEach((value) => {
    count[value] = (count[value] || 0) + 1;
  });
  return Object.keys(count).reduce((a, b) => (count[a] > count[b] ? a : b));
}


function PackageSelectorGame() {
  const theme = useTheme();
  const [started, setStarted] = useState(false);
  const [current, setCurrent] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [finished, setFinished] = useState(false);

  const handleAnswer = (value) => {
    const updated = [...answers, value];
    // Example Analytics Log (replace with real tracker if needed)
    console.log("Answer selected:", questions[current].question, "→", value);

    if (current + 1 < questions.length) {
      setCurrent(current + 1);
      setAnswers(updated);
    } else {
      setAnswers(updated);
      setFinished(true);
    }
  };

  const resultKey = getTopCategory(answers);
  const result = finished && resultKey ? resultMap[resultKey] : null;

  const sectionMap = {
    starter: "Launch Your Brand Online",
    ecommerce: "Sell Online with Ease",
    ai: "AI Integration Services",
    design: "Tailored to Your Vision",
    lifecycle: "Full Lifecycle Support",
    custom: "Business Optimization",
    basic: "Launch Your Brand Online",
  };

  return (
    <Box
      sx={{
        p: 3,
        bgcolor: theme.palette.mode === "dark" ? "#1e293b" : "#f8fafc",
        borderRadius: 2,
        height: 300,
        maxWidth: 600,
        mx: "auto",
        boxShadow: 6,
        justifyContent: "center",
        display: "flex",
        alignItems: "center",
        textAlign: "center",
      }}
    >
      {!started ? (
        <Box textAlign="center">
          <Typography variant="h5" fontWeight="bold" gutterBottom>
            Not sure what you need?
          </Typography>
          <Typography variant="body1" mb={3}>
            Answer a few questions to find the best package for your needs.
          </Typography>
          <Button
            variant="contained"
            color="primary"
            sx={{ borderRadius: 8, px: 5, py: 1.5, fontWeight: "bold" }}
            onClick={() => setStarted(true)}
          >
            Start Quiz
          </Button>
        </Box>
      ) : !finished ? (
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
          >
            <Typography variant="subtitle2" gutterBottom>
              Question {current + 1} of {questions.length}
            </Typography>
            <Typography variant="h6" gutterBottom fontWeight="bold">
              {questions[current].question}
            </Typography>
            <Grid container spacing={2} mt={2}>
              {questions[current].options.map((opt, i) => (
                <Grid item xs={12} sm={6} key={i}>
                  <Button
                    fullWidth
                    variant="outlined"
                    onClick={() => handleAnswer(opt.value)}
                    sx={{
                      py: 2,
                      fontWeight: "bold",
                      borderColor: theme.palette.primary.main,
                      color:
                        theme.palette.mode === "dark" ? "#e2e8f0" : "#0f172a",
                      ":hover": {
                        bgcolor: theme.palette.primary.main,
                        color: "white",
                      },
                    }}
                  >
                    {opt.label}
                  </Button>
                </Grid>
              ))}
            </Grid>
          </motion.div>
        </AnimatePresence>
      ) : (
        <Fade in={finished}>
          <Box py={5}>
            <Typography variant="h4" gutterBottom>
              🎯 Perfect Match Identified
            </Typography>
            <Typography variant="h6" color="text.secondary" sx={{ mb: 2 }}>
              Your responses align best with our{" "}
              <strong>{sectionMap[resultKey]}</strong> service.
            </Typography>
            <Typography variant="body1">
              We recommend the <strong>{result?.title}</strong> to get started
              with confidence.
            </Typography>
            <Button
              variant="contained"
              color="primary"
              href={result?.href}
              sx={{ mt: 3, borderRadius: 2 }}
            >
              View {result?.title}
            </Button>
          </Box>
        </Fade>
      )}
    </Box>
  );
}

export default PackageSelectorGame;
