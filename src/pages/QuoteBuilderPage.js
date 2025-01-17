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
  const [websiteType, setWebsiteType] = useState("");
  const [numPages, setNumPages] = useState("");
  const [features, setFeatures] = useState({
    responsiveDesign: false,
    ecomIntegration: false,
    seoService: false,
    cmsIntegration: false,
  });
  const [designComplexity, setDesignComplexity] = useState("");
  const [contactDetails, setContactDetails] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    message: "",
  });
  const [showContactForm, setShowContactForm] = useState(false);

  const handleFeatureChange = (event) => {
    setFeatures({ ...features, [event.target.name]: event.target.checked });
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setContactDetails((prevDetails) => ({ ...prevDetails, [name]: value }));
  };

  const calculateTotal = () => {
    let total = 5000;
    if (websiteType === "ecommerce") total += 2000;
    if (features.responsiveDesign) total += 1000;
    if (features.ecomIntegration) total += 1500;
    if (features.seoService) total += 500;
    if (features.cmsIntegration) total += 1000;
    if (designComplexity === "advanced") total += 2000;
    if (designComplexity === "premium") total += 5000;
    total += numPages * 200;
    return total;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const submissionData = {
      websiteType,
      numPages,
      features: JSON.stringify(features),
      designComplexity,
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

  const toggleContactForm = () => {
    setShowContactForm(!showContactForm);
  };

  return (
    <div className={theme.palette.mode === "dark" ? Styles.darkMode : ""}>
      <Box className={Styles.container}>
        <form onSubmit={handleSubmit}>
          <FormControl component="fieldset" fullWidth margin="normal">
            <FormLabel component="legend">Type of Website</FormLabel>
            <RadioGroup
              row
              value={websiteType}
              onChange={(e) => setWebsiteType(e.target.value)}
            >
              <FormControlLabel
                value="business"
                control={<Radio />}
                label="Business Landing Page"
              />
              <FormControlLabel
                value="ecommerce"
                control={<Radio />}
                label="E-commerce & Online Shop"
              />
              <FormControlLabel
                value="portfolio"
                control={<Radio />}
                label="Portfolio"
              />
              <FormControlLabel value="blog" control={<Radio />} label="Blog" />
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
            <FormLabel component="legend">Features & Functionality</FormLabel>
            <FormControlLabel
              control={
                <Checkbox
                  checked={features.responsiveDesign}
                  onChange={handleFeatureChange}
                  name="responsiveDesign"
                />
              }
              label="Responsive Design"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={features.ecomIntegration}
                  onChange={handleFeatureChange}
                  name="ecomIntegration"
                />
              }
              label="E-commerce Integration"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={features.seoService}
                  onChange={handleFeatureChange}
                  name="seoService"
                />
              }
              label="SEO Services"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={features.cmsIntegration}
                  onChange={handleFeatureChange}
                  name="cmsIntegration"
                />
              }
              label="CMS Integration"
            />
          </FormControl>

          <FormControl component="fieldset" fullWidth margin="normal">
            <FormLabel component="legend">Design Complexity</FormLabel>
            <RadioGroup
              row
              value={designComplexity}
              onChange={(e) => setDesignComplexity(e.target.value)}
            >
              <FormControlLabel
                value="basic"
                control={<Radio />}
                label="Basic"
              />
              <FormControlLabel
                value="advanced"
                control={<Radio />}
                label="Advanced"
              />
              <FormControlLabel
                value="premium"
                control={<Radio />}
                label="Premium"
              />
            </RadioGroup>
          </FormControl>

          <Typography
            variant="h5"
            marginTop="20px"
            className={Styles.estimatedCost}
          >
            Estimated Total Cost: CA${calculateTotal()}
          </Typography>

          <Button
            onClick={toggleContactForm}
            variant="contained"
            fullWidth
            className={Styles.button}
          >
            {showContactForm ? "Hide Contact Form" : "Get a Quote"}
          </Button>

          {showContactForm && (
            <Box marginTop="20px">
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
              <Button
                type="submit"
                variant="contained"
                fullWidth
                className={Styles.button}
              >
                Submit
              </Button>
            </Box>
          )}
        </form>
      </Box>
    </div>
  );
}

export default QuoteBuilderPage;
