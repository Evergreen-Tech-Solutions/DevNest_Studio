import React, { useState } from "react";
import { useTheme, Box, Typography, Container } from "@mui/material";
import Styles from "../styles/PricingPage.module.css";

// Import modals
import StarterModal from "../components/modals/StarterPackageModal";
import EcommerceModal from "../components/modals/EcommercePackageModal";
import CustomModal from "../components/modals/CustomPackageModal";

// Import package icons
import starterIcon from "../assets/logos/starterPackageLogo.png";
import ecommerceIcon from "../assets/logos/ecommercePackageLogo.png";
import customIcon from "../assets/logos/customPackageLogo.png";

function PricingPage({ darkMode }) {
  const theme = useTheme();
  const [activeModal, setActiveModal] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedPackage, setSelectedPackage] = useState(null);

  const pricingPackages = [
    {
      id: "starter",
      logo: starterIcon,
      title: "Starter Package",
      salePrice: "C$500",
      regularPrice: "C$1,500",
      description:
        "A simple, professional website to establish your online presence.",
    },
    {
      id: "ecommerce",
      logo: ecommerceIcon,
      title: "E-Commerce Package",
      salePrice: "C$2,000",
      regularPrice: "C$4,000",
      description:
        "A full online store with payment processing, product management, and SEO.",
    },
    {
      id: "custom",
      logo: customIcon,
      title: "Custom Package",
      salePrice: "Pricing Upon Request",
      description:
        "Tailored solutions, AI automation, API integrations, and more.",
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
    <Container maxWidth="lg" sx={{ py: 8 }}>
      <Box textAlign="center" mb={4}>
        <Typography variant="h3" gutterBottom>
          Our Pricing
        </Typography>
        <Typography variant="h6" color="textSecondary">
          Choose the package that best fits your business needs.
        </Typography>
      </Box>

      {/* Pricing Cards */}
      <Box className="flex flex-wrap justify-center">
        {pricingPackages.map((pkg, index) => (
          <div
            key={index}
            className="max-w-xs m-4 p-6 rounded-lg shadow-lg flex flex-col items-center text-center cursor-pointer transform transition-transform duration-300 hover:scale-105"
            style={{
              backgroundColor: darkMode ? "#999999" : "#e1fff5",
              color: darkMode ? "#ffffff" : "#000000",
            }}
            onClick={() => handleOpenModal(pkg.id)}
          >
            <img src={pkg.logo} alt={pkg.title} className="h-20 w-20 mb-4" />
            <h3 className="text-2xl font-bold mb-2">{pkg.title}</h3>

            {/* Only show pricing for Starter and E-Commerce */}
            {pkg.id !== "custom" ? (
              <>
                <p className="text-lg font-semibold text-red-500">
                  Sale Price: {pkg.salePrice}
                </p>
                <p className="text-gray-500 line-through">
                  Regular Price: {pkg.regularPrice}
                </p>
              </>
            ) : (
              <p className="text-lg font-semibold text-blue-500">
                Pricing Upon Request
              </p>
            )}

            <p className="text-center">{pkg.description}</p>
          </div>
        ))}
      </Box>

      {/* Modals */}
      {activeModal === "starter" && (
        <StarterModal
          open={modalOpen}
          onClose={handleCloseModal}
          package={selectedPackage}
        />
      )}
      {activeModal === "ecommerce" && (
        <EcommerceModal
          open={modalOpen}
          onClose={handleCloseModal}
          package={selectedPackage}
        />
      )}
      {activeModal === "custom" && (
        <CustomModal open={modalOpen} onClose={handleCloseModal} />
      )}
    </Container>
  );
}

export default PricingPage;
