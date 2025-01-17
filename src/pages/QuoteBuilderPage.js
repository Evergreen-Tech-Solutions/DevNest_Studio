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
            <FormLabel component="legend">Type of Project</FormLabel>
            <RadioGroup
              row
              value={projectType}
              onChange={(e) => setProjectType(e.target.value)}
            >
              <FormControlLabel
                value="website"
                control={<Radio />}
                label="Website"
              />
              <FormControlLabel
                value="mobileApp"
                control={<Radio />}
                label="Mobile App"
              />
              <FormControlLabel
                value="crossPlatform"
                control={<Radio />}
                label="Cross Platform"
              />
            </RadioGroup>
          </FormControl>

          {/* Conditional Inputs for Number of Pages/Views */}
          {projectType === "website" || projectType === "crossPlatform" ? (
            <TextField
              type="number"
              label="Number of Pages"
              value={numPages}
              onChange={(e) => setNumPages(e.target.value)}
              fullWidth
              margin="normal"
              className={Styles.textField}
            />
          ) : null}
          {projectType === "mobileApp" || projectType === "crossPlatform" ? (
            <TextField
              type="number"
              label="Number of Views"
              value={numViews}
              onChange={(e) => setNumViews(e.target.value)}
              fullWidth
              margin="normal"
              className={Styles.textField}
            />
          ) : null}

          {/* Services Requested */}
          <FormControl component="fieldset" fullWidth margin="normal">
            <FormLabel component="legend">Services Requested</FormLabel>
            <FormControlLabel
              control={
                <Checkbox
                  checked={services.aiIntegration}
                  onChange={handleServicesChange}
                  name="aiIntegration"
                />
              }
              label="AI Integration"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={services.ecomCmsIntegration}
                  onChange={handleServicesChange}
                  name="ecomCmsIntegration"
                />
              }
              label="E-Commerce/CMS Integration"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={services.seo}
                  onChange={handleServicesChange}
                  name="seo"
                />
              }
              label="Search Engine Optimization"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={services.marketingPromotion}
                  onChange={handleServicesChange}
                  name="marketingPromotion"
                />
              }
              label="Marketing & Promotion"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={services.businessAutomation}
                  onChange={handleServicesChange}
                  name="businessAutomation"
                />
              }
              label="Business Process Automation"
            />
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
