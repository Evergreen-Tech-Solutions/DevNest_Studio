import React from 'react';
import { Box, Container, Typography, useTheme, useMediaQuery } from '@mui/material';
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';

function Footer() {
    const currentYear = new Date().getFullYear();
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

    return (
        <Box component="footer" sx={{ backgroundColor: 'primary.main', py: 2 }}>
            <Container maxWidth="lg" sx={{
                display: 'flex',
                flexDirection: isMobile ? 'column' : 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                textAlign: isMobile ? 'center' : 'left'
            }}>
                <Typography variant="body1" sx={{ mb: isMobile ? 2 : 0 }}>© {currentYear} DevNest Studio</Typography>
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
