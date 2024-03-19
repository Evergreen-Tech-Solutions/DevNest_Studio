import React from 'react';
import { Box, Container, Typography } from '@mui/material';
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';

function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <Box component="footer" sx={{ backgroundColor: 'primary.main', py: 2 }}>
            <Container maxWidth="lg" sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <Typography variant="body1">© {currentYear} DevNest Studio</Typography>
                <div>
                    <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="inline-block mx-2">
                        <FaFacebookF />
                    </a>
                    <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="inline-block mx-2">
                        <FaTwitter />
                    </a>
                    <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="inline-block mx-2">
                        <FaInstagram />
                    </a>
                </div>
            </Container>
        </Box>
    );
}

export default Footer;
