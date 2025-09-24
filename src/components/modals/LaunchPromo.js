import { Box, Typography, useTheme, useMediaQuery } from "@mui/material";
import React, { useEffect, useState } from "react";
import OffSign from "../../assets/logos/OffSign.png";

const LaunchPromoBanner = () => {
  const theme = useTheme();
  const isDark = theme.palette.mode === "dark";
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  // Countdown state
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();
      const targetDate = new Date(`${now.getFullYear()}-11-01T00:00:00`);
      const difference = targetDate - now;

      if (difference <= 0) {
        clearInterval(timer);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      } else {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / (1000 * 60)) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <Box
      sx={{
        mx: "auto",
        px: { xs: 3, md: 5 },
        py: { xs: 5, md: 6 },
        borderRadius: 4,
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: theme.palette.background.paper,
        color: isDark ? "#fff" : "#000",
        boxShadow: isDark
          ? "0 10px 24px rgba(255, 100, 100, 0.3)"
          : "0 10px 24px #ff004048",
      }}
    >
      {/* Left: Big 50% Off */}
      <Box
        sx={{
          width: { xs: "100%", md: "35%" },
          textAlign: "center",
          pr: { md: 4 },
          mb: { xs: 3, md: 0 },
        }}
      >
        <Box
          sx={{
            p: 1,
            mb: 2,
            display: "inline-block",
            transform: "rotate(-15deg)",
            width: "190px",
            animation: "pulse 2s infinite ease-in-out",
            "@keyframes pulse": {
              "0%": { transform: "rotate(-15deg) scale(1)" },
              "50%": { transform: "rotate(-15deg) scale(1.1)" },
              "100%": { transform: "rotate(-15deg) scale(1)" },
            },
          }}
        >
          <img
            src={OffSign}
            alt="50% OFF"
            style={{
              width: "100%",
              height: "auto",
              display: "block",
            }}
          />
        </Box>
      </Box>

      {/* Right: Promo Message */}
      <Box
        sx={{
          width: { xs: "100%", md: "65%" },
          textAlign: isMobile ? "center" : "left",
        }}
      >
        <Typography
          variant="h5"
          fontWeight={700}
          gutterBottom
          sx={{ color: isDark ? "#ffffff" : "#3f3f3f" }}
        >
          Limited-Time Launch Offer
        </Typography>

        <Typography
          variant="body1"
          sx={{
            color: isDark ? "#cccccc" : "#333",
            fontSize: "1rem",
            lineHeight: 1.6,
          }}
        >
          To celebrate our official launch, DevNest Studio is offering an
          exclusive <strong>50% discount on all packages</strong> and{" "}
          <strong>25% off Business Optimization package</strong>. Whether you're
          starting small, launching an online store, or building custom
          AI-powered solutions — now is the time to act. <br />
          <br />
          <strong className="text-lg">Offer ends in:</strong>
          <br />
          <Box
            sx={{
              display: "inline-block",
              fontFamily: `"Orbitron", sans-serif`,
              fontWeight: 900,
              fontSize: { xs: "1.8rem", md: "2.5rem" },
              color: "#ff1500",
              textShadow: `
      1px 1px 0 #fff, 
      2px 2px 0 #ff748c
    `,
              letterSpacing: "3px",
            }}
          >
            {timeLeft.days}d {timeLeft.hours}h {timeLeft.minutes}m{" "}
            {timeLeft.seconds}s
          </Box>
        </Typography>
      </Box>
    </Box>
  );
};

export default LaunchPromoBanner;
