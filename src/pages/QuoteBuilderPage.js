import React, { useState } from "react";
import emailjs from "emailjs-com";
import {
  Box,
  Typography,
  Button,
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
  Checkbox,
  TextField,
  MenuItem,
  useTheme,
} from "@mui/material";
import Styles from "../styles/QuoteBuilderPage.module.css";

function QuoteBuilderPage() {
  const theme = useTheme();
  const [projectType, setProjectType] = useState("");
  const [numPages, setNumPages] = useState("");
  const [numViews, setNumViews] = useState("");
  const [designComplexity, setDesignComplexity] = useState("");
  const [services, setServices] = useState({
    aiIntegration: false,
    ecomCmsIntegration: false,
    seo: false,
    marketingPromotion: false,
    businessAutomation: false,
  });
  const [contactDetails, setContactDetails] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    message: "",
  });

  const handleServicesChange = (event) => {
    setServices({ ...services, [event.target.name]: event.target.checked });
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setContactDetails((prevDetails) => ({ ...prevDetails, [name]: value }));
  };

  const calculateTotal = () => {
    let total = 5000; // Starting base price
    if (projectType === "website") total += numPages * 200;
    if (projectType === "mobileApp") total += numViews * 300;
    if (projectType === "crossPlatform")
      total += numPages * 200 + numViews * 300;

    if (services.aiIntegration) total += 5000;
    if (services.ecomCmsIntegration) total += 2000;
    if (services.seo) total += 1000;
    if (services.marketingPromotion) total += 3000;
    if (services.businessAutomation) total += 4000;

    return total;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const submissionData = {
      projectType,
      numPages: projectType !== "mobileApp" ? numPages : null,
      numViews: projectType !== "website" ? numViews : null,
      services: JSON.stringify(services),
      ...contactDetails,
      estimatedCost: calculateTotal().toString(),
    };

    emailjs
      .send(
        "service_kqj97nd",
        "template_1fsd2fr",
        submissionData,
        "ZuAY0cJ381FVYv2Oz"
      )
      .then(
        (result) => {
          console.log("Email successfully sent!", result.text);
        },
        (error) => {
          console.log("Failed to send email:", error.text);
        }
      );
  };

  return (
    <div className={theme.palette.mode === "dark" ? Styles.darkMode : ""}>
      <Box className={Styles.container}>
        <form onSubmit={handleSubmit}>
          {/* Project Type Selection */}
          <FormControl component="fieldset" fullWidth margin="normal">
            <FormLabel
              component="legend"
              sx={{ fontFamily: '"Quicksand", serif', fontWeight: "Bold" }}
            >
              Type of Website
            </FormLabel>
            <RadioGroup
              row
              value={projectType}
              onChange={(e) => setProjectType(e.target.value)}
            >
              <FormControlLabel
                value="website"
                control={<Radio />}
                label="Business Landing Page"
                componentsProps={{
                  typography: {
                    sx: {
                      fontFamily: '"Quicksand", serif',
                      fontWeight: "bold",
                    },
                  },
                }}
              />
              <FormControlLabel
                value="mobileApp"
                control={<Radio />}
                label="E-commerce & Online Shop"
                componentsProps={{
                  typography: {
                    sx: {
                      fontFamily: '"Quicksand", serif',
                      fontWeight: "bold",
                    },
                  },
                }}
              />
              <FormControlLabel
                value="crossPlatform"
                control={<Radio />}
                label="Portfolio"
                componentsProps={{
                  typography: {
                    sx: {
                      fontFamily: '"Quicksand", serif',
                      fontWeight: "bold",
                    },
                  },
                }}
              />
              <FormControlLabel
                value="blog"
                control={<Radio />}
                label="Blog"
                componentsProps={{
                  typography: {
                    sx: {
                      fontFamily: '"Quicksand", serif',
                      fontWeight: "bold",
                    },
                  },
                }}
              />
            </RadioGroup>
          </FormControl>

          <TextField
            select
            label="Number of Pages"
            value={numPages}
            onChange={(e) => setNumPages(e.target.value)}
            fullWidth
            margin="normal"
            className={Styles.textField}
          >
            {[1, 5, 10, 15, 20].map((option) => (
              <MenuItem key={option} value={option}>
                {option}
              </MenuItem>
            ))}
          </TextField>

          <FormControl component="fieldset" fullWidth margin="normal">
            <FormLabel
              component="legend"
              sx={{ fontFamily: '"Quicksand", serif', fontWeight: "Bold" }}
            >
              Features & Functionality
            </FormLabel>
            <FormControlLabel
              control={
                <Checkbox
                  checked={services.aiIntegration}
                  onChange={handleServicesChange}
                  name="aiIntegration"
                />
              }
              label="Responsive Design"
              componentsProps={{
                typography: {
                  sx: { fontFamily: '"Quicksand", serif', fontWeight: "bold" },
                },
              }}
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={services.ecomCmsIntegration}
                  onChange={handleServicesChange}
                  name="ecomCmsIntegration"
                />
              }
              label="E-commerce Integration"
              componentsProps={{
                typography: {
                  sx: { fontFamily: '"Quicksand", serif', fontWeight: "bold" },
                },
              }}
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={services.seo}
                  onChange={handleServicesChange}
                  name="seo"
                />
              }
              label="SEO Services"
              componentsProps={{
                typography: {
                  sx: { fontFamily: '"Quicksand", serif', fontWeight: "bold" },
                },
              }}
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={services.marketingPromotion}
                  onChange={handleServicesChange}
                  name="marketingPromotion"
                />
              }
              label="CMS Integration"
              componentsProps={{
                typography: {
                  sx: { fontFamily: '"Quicksand", serif', fontWeight: "bold" },
                },
              }}
            />
          </FormControl>

          <FormControl component="fieldset" fullWidth margin="normal">
            <FormLabel
              component="legend"
              sx={{ fontFamily: '"Quicksand", serif', fontWeight: "Bold" }}
            >
              Design Complexity
            </FormLabel>
            <RadioGroup
              row
              value={designComplexity}
              onChange={(e) => setDesignComplexity(e.target.value)}
            >
              <FormControlLabel
                value="basic"
                control={<Radio />}
                label="Basic"
                componentsProps={{
                  typography: {
                    sx: {
                      fontFamily: '"Quicksand", serif',
                      fontWeight: "bold",
                    },
                  },
                }}
              />
              <FormControlLabel
                value="advanced"
                control={<Radio />}
                label="Advanced"
                componentsProps={{
                  typography: {
                    sx: {
                      fontFamily: '"Quicksand", serif',
                      fontWeight: "bold",
                    },
                  },
                }}
              />
              <FormControlLabel
                value="premium"
                control={<Radio />}
                label="Premium"
                componentsProps={{
                  typography: {
                    sx: {
                      fontFamily: '"Quicksand", serif',
                      fontWeight: "bold",
                    },
                  },
                }}
              />
            </RadioGroup>
          </FormControl>

          {/* Contact Form */}
          <Box marginTop="20px">
            <Typography variant="h6" gutterBottom>
              Contact Details
            </Typography>
            <TextField
              fullWidth
              label="Name"
              name="name"
              value={contactDetails.name}
              onChange={handleInputChange}
              margin="normal"
              className={Styles.textField}
            />
            <TextField
              fullWidth
              label="Email"
              name="email"
              value={contactDetails.email}
              onChange={handleInputChange}
              margin="normal"
              className={Styles.textField}
            />
            <TextField
              fullWidth
              label="Phone Number"
              name="phoneNumber"
              value={contactDetails.phoneNumber}
              onChange={handleInputChange}
              margin="normal"
              className={Styles.textField}
            />
            <TextField
              fullWidth
              label="Message"
              name="message"
              value={contactDetails.message}
              onChange={handleInputChange}
              margin="normal"
              className={Styles.textField}
            />
          </Box>

          {/* Estimated Cost */}
          <Typography
            variant="h5"
            marginTop="20px"
            className={Styles.estimatedCost}
          >
            Estimated Total Cost: CA${calculateTotal()}
          </Typography>

          {/* Submit Button */}
          <Button
            type="submit"
            variant="contained"
            fullWidth
            className={Styles.button}
          >
            Submit
          </Button>
        </form>
      </Box>
    </div>
  );
}

export default QuoteBuilderPage;
