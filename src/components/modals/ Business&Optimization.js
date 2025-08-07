import React from 'react';
import {
  Modal,
  Box,
  Typography,
  useTheme,
  useMediaQuery,
} from '@mui/material';

function BusinessOptimization({ open, onClose, service }) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const boxStyle = {
    backgroundColor: '#b6e1e0',
    padding: '20px',
    borderRadius: '10px',
    width: isMobile ? '95vw' : '55%',
    height: isMobile ? '90vh' : '85%',
    overflowY: 'auto',
    outline: 'none',
  };

  const textStyle = {
    color: '#3f3f3f',
    marginBottom: '10px',
  };

  const labelStyle = {
    color: '#3f3f3f',
    marginBottom: '10px',
    fontWeight: 'bold',
    textDecoration: 'underline',
    fontSize: '1.5rem',
  };

  const subStyle = {
    color: '#3f3f3f',
    marginBottom: '10px',
    fontSize: '1.25rem',
    fontWeight: 'bold',
  };

  return (
    <Modal open={open} onClose={onClose} className="flex items-center justify-center p-4">
      <Box sx={boxStyle}>
        <Typography variant="h4" component="h2" className="text-gry text-center">
          Marketing & Promotion
        </Typography>

        <div className="bg-lght rounded-md p-2 mt-3 mb-2">
          <Typography variant="h5" sx={labelStyle}>
            Why Invest in Marketing & Promotion?
          </Typography>

          <Typography sx={subStyle}>Boost Visibility and Brand Awareness:</Typography>
          <Typography sx={textStyle}>
            No matter how great your app or website is, it needs effective marketing strategies to reach the right audience. We create tailored marketing plans that enhance your brand presence and app visibility across multiple channels.
          </Typography>

          <Typography sx={subStyle}>Drive Targeted Traffic:</Typography>
          <Typography sx={textStyle}>
            Our data-driven approach ensures your platform reaches the right users. Through SEO, PPC, social media marketing, and email campaigns, we attract high-intent users who are likely to engage with your product.
          </Typography>

          <Typography sx={subStyle}>App Store Optimization (ASO):</Typography>
          <Typography sx={textStyle}>
            For mobile applications, we optimize your App Store (iOS) and Google Play listings using keyword optimization, compelling descriptions, and A/B-tested visuals, ensuring higher discoverability and downloads.
          </Typography>

          <Typography sx={subStyle}>Social Media & Influencer Marketing:</Typography>
          <Typography sx={textStyle}>
            We leverage social media platforms and influencer partnerships to amplify your brand’s message. Through strategic content marketing and collaborations, we drive engagement and attract new users.
          </Typography>

          <Typography sx={subStyle}>Conversion Rate Optimization (CRO):</Typography>
          <Typography sx={textStyle}>
            Getting users to visit your platform is only half the battle. We analyze user behavior, optimize landing pages, and implement A/B testing to increase conversions, sign-ups, and sales.
          </Typography>

          <Typography sx={subStyle}>Retargeting and Customer Retention:</Typography>
          <Typography sx={textStyle}>
            We implement remarketing strategies, personalized email sequences, and loyalty programs to retain existing users and re-engage those who have dropped off, ensuring higher lifetime value (LTV).
          </Typography>

          <Typography variant="h6" sx={{ ...labelStyle, mt: 4 }}>
            Our Marketing & Promotion Strategy
          </Typography>

          <Typography sx={subStyle}>Market Research & Competitor Analysis:</Typography>
          <Typography sx={textStyle}>
            We analyze your target market, competitors, and industry trends to create a customized marketing strategy that gives you a competitive edge.
          </Typography>

          <Typography sx={subStyle}>Search Engine Optimization (SEO):</Typography>
          <Typography sx={textStyle}>
            We optimize your website and content for search engines, improving rankings and increasing organic traffic with keyword research, content strategies, and technical SEO enhancements.
          </Typography>

          <Typography sx={subStyle}>Paid Advertising & PPC Campaigns:</Typography>
          <Typography sx={textStyle}>
            We manage Google Ads, social media ads, and display campaigns to drive instant traffic and maximize return on investment (ROI).
          </Typography>

          <Typography sx={subStyle}>Content Marketing & Blogging:</Typography>
          <Typography sx={textStyle}>
            Through engaging blogs, articles, videos, and infographics, we educate and attract your target audience, positioning your brand as an industry leader.
          </Typography>

          <Typography sx={subStyle}>Email Marketing & Automation:</Typography>
          <Typography sx={textStyle}>
            We build personalized email funnels that nurture leads, convert users, and improve customer retention with automated and targeted email campaigns.
          </Typography>

          <Typography sx={subStyle}>Performance Tracking & Optimization:</Typography>
          <Typography sx={textStyle}>
            We continuously track key performance metrics (KPIs), analyze results, and refine marketing efforts to ensure ongoing success and long-term growth.
          </Typography>
        </div>
      </Box>
    </Modal>
  );
}

export default BusinessOptimization;
