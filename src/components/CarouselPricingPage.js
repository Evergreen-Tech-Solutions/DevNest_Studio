import React, { useState, useEffect } from "react";
import { useMediaQuery } from "@mui/material";
import {
  useTheme,
  Box,
  Typography,
  Container,
  IconButton,
} from "@mui/material";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import StarterModal from "../components/modals/StarterPackageModal";
import EcommerceModal from "../components/modals/EcommercePackageModal";
import CustomModal from "../components/modals/CustomPackageModal";
import AiIntegrationModal from "../components/modals/AiIntegrationModal";
import WorkflowSteps from "../components/WorkflowSteps";
import BusinessOptimizationModal from "../components/modals/Business&OptimizationModal";
import DesignLifecycleModal from "../components/modals/DesignLifecycleModal";

import starterIcon from "../assets/logos/starterPackageLogo.png";
import ecommerceIcon from "../assets/logos/ecommercePackageLogo.png";
import customIcon from "../assets/logos/customPackageLogo.png";
import aiIcon from "../assets/logos/aiIntegrationLogo.png";
import businessIcon from "../assets/logos/businessProcessaAtomationLogo.png";
import designIcon from "../assets/logos/uiUxLogo.png";

const pricingPackages = [
  {
    id: "starter",
    logo: starterIcon,
    title: "Launch Your Brand Online",
    salePrice: "C$500",
    regularPrice: "C$1,500",
    features: [
      "Responsive 1–3 page website",
      "Custom contact form",
      "Mobile-friendly design",
      "Deployed & domain-ready",
    ],
    tagline: "Perfect for small businesses or freelancers.",
  },
  {
    id: "ai",
    logo: aiIcon,
    title: "AI Integration",
    salePrice: "Starts at C$750",
    description:
      "Automate tasks, create smart assistants, and gain insights with AI tailored to your business.",
    features: [
      "Chatbots & virtual assistants",
      "Data analysis & reporting",
      "AI-driven content generation",
      "Custom AI solutions",
    ],
    tagline: "Great for businesses looking to innovate with AI.",
  },
  {
    id: "ecommerce",
    logo: ecommerceIcon,
    title: "Sell Online with Ease",
    salePrice: "C$2,000",
    regularPrice: "C$4,000",
    features: [
      "Product listings with image galleries",
      "Secure checkout & payment gateways",
      "Inventory & order management",
      "SEO & analytics tools",
    ],
    tagline: "Ideal for online stores or service providers.",
  },
  {
    id: "custom",
    logo: customIcon,
    title: "Tailored to Your Vision",
    salePrice: "Pricing Upon Request",
    features: [
      "Advanced web/app functionality",
      "AI automation & smart features",
      "Custom integrations & APIs",
      "Built to scale as you grow",
    ],
    tagline: "Designed for startups and unique business models.",
  },
  {
    id: "business",
    logo: businessIcon,
    title: "Business Optimization",
    salePrice: "Contact for Quote",
    features: [
      "Business process automation",
      "Custom dashboards & analytics",
      "Email/Social media integration",
      "Marketing & promotional tools",
    ],
    tagline: "Ideal for scaling businesses and startups ready to grow.",
  },
  {
    id: "design",
    logo: designIcon,
    title: "Design, Quality & Lifecycle",
    salePrice: "Contact for Quote",
    features: [
      "UI/UX Design & branding systems",
      "User testing & Quality Assurance",
      "Deployment & staging pipelines",
      "Ongoing maintenance & versioning",
    ],
    tagline: "Essential support for professional polish & sustainability.",
  },
];

function PricingPage({ darkMode }) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const [activeIndex, setActiveIndex] = useState(0);
  const [activeModal, setActiveModal] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedPackage, setSelectedPackage] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % pricingPackages.length);
  };

  const handlePrev = () => {
    setActiveIndex(
      (prev) => (prev - 1 + pricingPackages.length) % pricingPackages.length
    );
  };

  const handleOpenModal = (id) => {
    const selected = pricingPackages.find((pkg) => pkg.id === id);
    setSelectedPackage(selected);
    setActiveModal(id);
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setActiveModal(null);
    setModalOpen(false);
  };

  const handleSelectPackage = (pkgId) => {
  setSelectedPackage(pkgId);
};


  const getTransformStyle = (index) => {
    const diff = index - activeIndex;
    const total = pricingPackages.length;
    const offset = (index - activeIndex + total) % total;

    if (offset === 0) {
      return {
        transform: "scale(1.1) translateZ(0)",
        opacity: 1,
        zIndex: 3,
        boxShadow: theme.shadows[15],
      };
    } else if (offset === 1 || (activeIndex === total - 1 && index === 0)) {
      return {
        transform: "scale(0.9) translateX(80%)",
        opacity: 0.4,
        zIndex: 2,
      };
    } else if (
      offset === total - 1 ||
      (activeIndex === 0 && index === total - 1)
    ) {
      return {
        transform: "scale(0.9) translateX(-80%)",
        opacity: 0.4,
        zIndex: 2,
      };
    } else {
      return {
        transform: "scale(0.7)",
        opacity: 0,
        zIndex: 1,
        pointerEvents: "none",
      };
    }
  };

  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      <Box
        sx={{
          display: "flex",
          minHeight: "550px",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
          height: isMobile ? "460px" : "550px",
          overflow: "hidden",
        }}
      >
        <IconButton
          onClick={handlePrev}
          sx={{
            position: "absolute",
            left: 0,
            zIndex: 4,
            backgroundColor: "rgba(0, 168, 150, 0.4)",
            "&:hover": {
              backgroundColor: "rgba(0, 168, 150, 0.6)",
            },
            color: "white",
            borderRadius: "50%",
          }}
        >
          <FaChevronLeft />
        </IconButton>

        {pricingPackages.map((pkg, index) => (
          <Box
            key={pkg.id}
            onClick={() => handleOpenModal(pkg.id)}
            sx={{
              position: "absolute",
              transition: "all 0.6s ease-in-out",
              width: isMobile ? "300px" : "400px",
              p: isMobile ? 2 : 4,
              minHeight: "420px",
              borderRadius: 3,
              textAlign: "center",
              backgroundColor: theme.palette.background.paper,
              color: darkMode ? "#fff" : "#000",
              cursor: "pointer",
              ...getTransformStyle(index),
            }}
          >
            <img
              src={pkg.logo}
              alt={pkg.title}
              className="h-20 w-20 mb-4 mx-auto"
            />
            <Typography variant="h6" gutterBottom>
              {pkg.title}
            </Typography>
            <Typography
              variant="body1"
              sx={{ color: "#e63946", fontWeight: 600 }}
              gutterBottom
            >
              {pkg.salePrice.includes("C$")
                ? `Sale Price: ${pkg.salePrice}`
                : pkg.salePrice}
            </Typography>
            {pkg.regularPrice && (
              <Typography
                variant="body2"
                sx={{ textDecoration: "line-through", color: "gray" }}
              >
                Regular Price: {pkg.regularPrice}
              </Typography>
            )}
            {pkg.features && (
              <ul className="mt-4 mb-2 text-sm text-left space-y-1">
                {pkg.features.map((feature, idx) => (
                  <li key={idx}>• {feature}</li>
                ))}
              </ul>
            )}
            {pkg.description && (
              <Typography variant="body2" sx={{ mt: 2 }}>
                {pkg.description}
              </Typography>
            )}
            {pkg.tagline && (
              <Typography
                variant="caption"
                sx={{ fontStyle: "italic", color: "#888" }}
              >
                {pkg.tagline}
              </Typography>
            )}
          </Box>
        ))}

        <IconButton
          onClick={handleNext}
          sx={{
            position: "absolute",
            right: 0,
            zIndex: 4,
            backgroundColor: "rgba(0, 168, 150, 0.4)",
            "&:hover": {
              backgroundColor: "rgba(0, 168, 150, 0.6)",
            },
            color: "white",
            borderRadius: "50%",
          }}
        >
          <FaChevronRight />
        </IconButton>
      </Box>

      {/* Modals */}
      {activeModal === "starter" && (
        <StarterModal
          open={modalOpen}
          onClose={handleCloseModal}
          package={selectedPackage}
          onSelectPackage={handleSelectPackage}
        />
      )}
      {activeModal === "ai" && (
        <AiIntegrationModal
          open={modalOpen}
          onClose={handleCloseModal}
          package={selectedPackage}
          onSelectPackage={handleSelectPackage}
        />
      )}
      {activeModal === "ecommerce" && (
        <EcommerceModal
          open={modalOpen}
          onClose={handleCloseModal}
          package={selectedPackage}
          onSelectPackage={handleSelectPackage}
        />
      )}
      {activeModal === "custom" && (
        <CustomModal
          open={modalOpen}
          onClose={handleCloseModal}
          package={selectedPackage}
          onSelectPackage={handleSelectPackage}
        />
      )}
      {activeModal === "business" && (
        <BusinessOptimizationModal
          open={modalOpen}
          onClose={handleCloseModal}
          package={selectedPackage}
          onSelectPackage={handleSelectPackage}
        />
      )}
      {activeModal === "design" && (
        <DesignLifecycleModal
          open={modalOpen}
          onClose={handleCloseModal}
          package={selectedPackage}
          onSelectPackage={handleSelectPackage}
        />
      )}

      {/* Below Carousel*/}
      <Box
        sx={{
          mt: 10,
          textAlign: "center",
          backgroundColor: theme.palette.background.paper,
          p: 4,
          borderRadius: 3,
        }}
      >
        <Typography variant="h5" gutterBottom>
          Not sure which package is right for you?
        </Typography>
        <Typography
          variant="body1"
          color="text.primary"
          maxWidth="600px"
          mx="auto"
        >
          Whether you're launching a brand-new website, integrating AI into
          operations, building an e-commerce platform, or developing a fully
          custom solution, our packages are designed to scale with your goals.
          Click on any package to learn more or reach out to us for a free
          consultation to guide your decision.
        </Typography>
      </Box>
      <Box sx={{ mt: 10 }}>
        <WorkflowSteps />
      </Box>
    </Container>
  );
}

export default PricingPage;
