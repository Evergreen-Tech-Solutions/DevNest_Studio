import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import {
  Box,
  TextField,
  Typography,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Button,
} from "@mui/material";
import emailjs from "emailjs-com";

function ContactForm({ darkMode }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    selectedPackage: "",
    message: "",
  });

  const location = useLocation();

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const selected = params.get("package");

    if (selected) {
      setFormData((prev) => ({
        ...prev,
        selectedPackage: selected,
      }));
    }
  }, [location.search]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "service_kqj97nd",
        "template_dnixpat",
        formData,
        "ZuAY0cJ381FVYv2Oz"
      )
      .then(
        (result) => {
          console.log("Email successfully sent!", result.text);
          alert("Email successfully sent!");
          setFormData({
            name: "",
            email: "",
            selectedPackage: "",
            message: "",
          });
        },
        (error) => {
          console.log("Failed to send email:", error.text);
          alert("Failed to send email. Please try again.");
        }
      );
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{
        backgroundColor: darkMode ? "#0a1126" : "#f4f4f4",
        color: darkMode ? "#dbeafe" : "#333",
        boxShadow: 5,
        borderRadius: 2,
        px: 4,
        pt: 4,
        pb: 5,
        mb: 4,
        maxWidth: 600,
        mx: "auto",
      }}
    >
      <Typography
        variant="h6"
        fontWeight="bold"
        gutterBottom
        sx={{ mb: 4, fontSize: "1.25rem" }}
      >
        Please fill out the form below and we will get back to you shortly.
      </Typography>

      <TextField
        fullWidth
        label="Your Name please:"
        variant="outlined"
        name="name"
        value={formData.name}
        onChange={handleChange}
        required
        sx={{ mb: 3 }}
      />

      <TextField
        fullWidth
        label="Your Email please:"
        type="email"
        variant="outlined"
        name="email"
        value={formData.email}
        onChange={handleChange}
        required
        sx={{ mb: 3 }}
      />

      <FormControl
        fullWidth
        required
        sx={{
          mb: 3,
          backgroundColor: "",
          borderRadius: 1,
          "& .MuiInputLabel-root": {
            color: "teal",
            fontWeight: 600,
          },
          "& .MuiOutlinedInput-root": {
            color: "teal",
            "& fieldset": {
              borderColor: "teal",
            },
            "&:hover fieldset": {
              borderColor: "teal",
            },
            "&.Mui-focused fieldset": {
              borderColor: "teal",
            },
          },
          "& .MuiSelect-icon": {
            color: "teal",
          },
        }}
      >
        <InputLabel id="selected-package-label" sx={{ color: "teal" }}>
          Selected Package
        </InputLabel>
        <Select
          labelId="selected-package-label"
          id="selectedPackage"
          name="selectedPackage"
          value={formData.selectedPackage}
          label="Selected Package"
          onChange={handleChange}
        >
          <MenuItem value="">
            <em>-- Please choose a package --</em>
          </MenuItem>
          <MenuItem value="starter">Launch Your Brand Online</MenuItem>
          <MenuItem value="ai">AI Integration</MenuItem>
          <MenuItem value="ecommerce">Sell Online with Ease</MenuItem>
          <MenuItem value="custom">Tailored to Your Vision</MenuItem>
          <MenuItem value="business">Business Optimization</MenuItem>
          <MenuItem value="design">Design, Quality & Lifecycle</MenuItem>
        </Select>
      </FormControl>

      <TextField
        fullWidth
        label="Type down your Message here:"
        variant="outlined"
        name="message"
        value={formData.message}
        onChange={handleChange}
        multiline
        rows={5}
        required
        sx={{ mb: 4 }}
      />

      <Button
        type="submit"
        variant="contained"
        fullWidth
        sx={{
          fontSize: "1.1rem",
          py: 1.5,
          backgroundColor: darkMode ? "#00a896" : "#00a896",
          color: "#ffffff",
          "&:hover": {
            backgroundColor: "#f87171",
          },
        }}
      >
        Submit
      </Button>
    </Box>
  );
}

export default ContactForm;
