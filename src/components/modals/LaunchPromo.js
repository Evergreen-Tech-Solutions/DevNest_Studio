import { Box, Typography, useTheme, useMediaQuery } from "@mui/material";

const LaunchPromoBanner = () => {
  const theme = useTheme();
  const isDark = theme.palette.mode === "dark";
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

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
            border: "4px solid #e53935",
            borderRadius: "16px",
            p: 3,
            color: "#e53935",
            fontSize: "4rem",
            mb: 2,
            fontWeight: 800,
            backgroundColor: isDark ? "#2b0000" : "#fff5f5",
            display: "inline-block",
            transform: "rotate(-5deg)",
          }}
        >
          50% OFF
        </Box>

        <Typography
          variant="caption"
          sx={{
            mt: 1,
            display: "block",
            fontSize: "0.85rem",
            color: isDark ? "#ffcccc" : "#800000",
          }}
        >
          25% OFF on Business Optimization for first 3 clients
        </Typography>
      </Box>

      {/* Right: Promo Message */}
      <Box sx={{ width: { xs: "100%", md: "65%" } }}>
        <Typography
          variant="h5"
          fontWeight={700}
          gutterBottom
          sx={{ color: isDark ? "#ffffff" : "#004d4d" }}
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
          exclusive <strong>50% discount on all packages</strong> and <strong>25%
          off Business Optimization package</strong>. Whether you're starting
          small, launching an online store, or building custom AI-powered
          solutions!! now is the time to act. <br />
          <br />
          <strong>Bonus:</strong> Our for the first 3 clients only <strong>on each package</strong>.
        </Typography>
      </Box>
    </Box>
  );
};

export default LaunchPromoBanner;
