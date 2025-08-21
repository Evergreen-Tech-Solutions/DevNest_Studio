import React, { useState } from "react";
import { useTheme, Box, Typography, Container } from "@mui/material";
import StarterModal from "../components/modals/StarterPackageModal";
import EcommerceModal from "../components/modals/EcommercePackageModal";
import CustomModal from "../components/modals/CustomPackageModal";
import AiIntegrationModal from "../components/modals/AiIntegrationModal";
import CarouselPricingPage from "../components/CarouselPricingPage"; // your new carousel component

// Package logos
import starterIcon from "../assets/logos/starterPackageLogo.png";
import ecommerceIcon from "../assets/logos/ecommercePackageLogo.png";
import customIcon from "../assets/logos/customPackageLogo.png";
import aiIcon from "../assets/logos/aiIntegrationLogo.png";

function PricingPage({ darkMode }) {
  const theme = useTheme();
  const [activeModal, setActiveModal] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedPackage, setSelectedPackage] = useState(null);

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
  ];

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

  return (
    <>
      {/* Carousel-based Pricing Cards */}
      <CarouselPricingPage
        pricingPackages={pricingPackages}
        handleCardClick={handleOpenModal}
        darkMode={darkMode}
      />

      {/* Modals */}
      {activeModal === "starter" && (
        <StarterModal
          open={modalOpen}
          onClose={handleCloseModal}
          package={selectedPackage}
        />
      )}
      {activeModal === "ai" && (
        <AiIntegrationModal open={modalOpen} onClose={handleCloseModal} />
      )}
      {activeModal === "ecommerce" && (
        <EcommerceModal
          open={modalOpen}
          onClose={handleCloseModal}
          package={selectedPackage}
        />
      )}
      {activeModal === "custom" && (
        <CustomModal
          open={modalOpen}
          onClose={handleCloseModal}
          darkMode={darkMode}
        />
      )}
    </>
  );
}

export default PricingPage;
