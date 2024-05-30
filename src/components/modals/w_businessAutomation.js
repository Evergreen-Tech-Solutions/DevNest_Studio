import React from "react";
import { Modal, Box, Typography, Button } from "@mui/material";

function BusinessAutomation({ open, onClose, service }) {
  return (
    <Modal
      open={open}
      onClose={onClose}
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Box
        style={{
          backgroundColor: "white",
          padding: "20px",
          borderRadius: "10px",
          maxWidth: "600px",
          width: "90%",
          outline: "none",
        }}
      >
        <Typography
          variant="h6"
          component="h2"
          style={{ marginBottom: "15px" }}
        >
          {service.title}
        </Typography>

        <Typography variant="subtitle1" component="h3">
          Options Available:
        </Typography>
        <ul>
          <li>Automate routine tasks</li>
          <li>Integration with existing systems</li>
        </ul>

        <Typography
          variant="subtitle1"
          component="h3"
          style={{ marginTop: "10px" }}
        >
          Benefits:
        </Typography>
        <ul>
          <li>Increase efficiency</li>
          <li>Reduce costs</li>
        </ul>

        <Typography
          variant="subtitle1"
          component="h3"
          style={{ marginTop: "10px" }}
        >
          Pricing:
        </Typography>
        <p>
          Starting at $7,000 for basic automation. Complex projects may vary in
          price.
        </p>
        <p>
          Please <strong>contact us</strong> for a detailed quote based on your
          specific requirements.
        </p>

        <Button
          onClick={onClose}
          style={{
            marginTop: "20px",
            display: "block",
            marginLeft: "auto",
            marginRight: "auto",
          }}
        >
          Close
        </Button>
      </Box>
    </Modal>
  );
}

export default BusinessAutomation;
