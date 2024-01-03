import React from 'react';
// import "../assets/css/browsefund.css";
// import Img from "../assets/images/sadchild.jpg";
import image1 from "../assets/images/bimg1.png";
import image2 from "../assets/images/bimg2.png";
import image3 from "../assets/images/bimg3.png";

import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';

import Typography from '@mui/material/Typography';

import heart from '../assets/images/heart.png'
import kidney from "../assets/images/KIDNEY.png"
import child from "../assets/images/childcare.png"
import bone from '../assets/images/bonamarrow.png'
import cancer from '../assets/images/cancer.png'
import { faBold } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faWhatsapp, faLinkedinIn, faInstagram } from '@fortawesome/free-brands-svg-icons'

const BrowseFund = () => {

  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme => (theme.palette.mode === 'dark' ? '#1A2027' : '#fff'),
    ...theme => theme.typography.body2,
    padding: theme => theme.spacing(1),
    marginTop: '1cm',
    textAlign: 'center',
    height: '7cm',
    border: '3px solid #e0e0e0',
    opacity: 0.8,
    transition: 'opacity 0.3s',
    '&:hover': {
      opacity: 1,

    }
  }));
  return (
    <>
      <div className='Browseclass'>
      </div>
      <div>
        <p className="save">Save a child every month</p>
        <q className="save1">Join 398,567 monthly donors with Social Impact plan</q>
        <q className="save2">start saving needy children every month.</q>
        <button className="button1">Start Giving Monthly</button>
      </div>
      <div>
        <h1 className='firsthead'>Medical fund raising and Crowd funding</h1>
        <p className="para">Online Medical crowdfunding is an alternative method for individuals and organisations to generate funds required for costly medical treatments like open-heart surgeries,
          NICU care, bone marrow transplant, cancer treatments and any other disease</p>
      </div>


      <div className="IMAGE1">
        <div className="image-container1">
          <img src={image1} alt="Image Not Found" />
        </div>
        <div className='text-container1'>
          <h2 className='head1'>Medical Bills are a Burden for Many Individuals and Families</h2>
          <p className='p1'>Expenses related to hospital stays, cancer treatments with high- cost chemotherapy routines, and other medicinal costs can be even higher. Treatment costs and necessary living expenses can bring the best of families to the brink of experiencing hard times. Insurance plans are not enough, as policies do not cover everything you need.
          </p>
        </div>
      </div>


      <div className="IMAGE2">
        <div className="text-container2">
          <h2 className='head2'>Start a Medical Fundraiser for Yourself or a Loved One</h2>
          <p className='p2'>With OpenDoor, you can start a free, easy fundraiser in minutes to cover medical bills and healthcare costs. You can also take on the role of spreading the word and bring in funds when a close friend is diagnosed with unexpected illnesses. Medical fundraising campaigns can give your well-wishers a way to express support when needed.</p>
        </div>
        <div className="image-container2">
          <img src={image2} alt="Image Not Found" />
        </div>
      </div>

      <div className="IMAGE3">
        <div className="image-container3">
          <img src={image3} alt="Image Not Found" />
        </div>
        <div className='text-container3'>
          <h2 className='head3'>Try Medical Crowdfunding</h2>
          <p className='p3'>Stop worrying about rising medical bills, or debts and start a medical fundraising campaign with OpenDoor. OpenDoor is a Crowdfunding Platform based out of India. Crowdfunding is the easiest way to avail support from friends, family and numerous individuals who are waiting to donate funds.
          </p>
        </div>

      </div>
      <div>
        <h1 className='newh1'>What medical treatments can you raise funds for?</h1>
        <p></p>
      </div>
      {/* 1 */}
      <div>
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={2} >
            <Grid item xs={2} sx={{ marginLeft: '100px' }}>
              <Item>
                <Card
                  sx={{
                    maxWidth: 300,
                    transition: 'box-shadow 0.3s',
                    '&:hover': {
                      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                    },
                    '&:focus': {
                      boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2)',
                    },
                  }}
                  tabIndex={0}
                >
                  <CardMedia
                    component="img"
                    alt="HEART"
                    height="150"
                    image={heart}
                  />
                  <CardContent>
                    <Typography variant="body2" color="black" fontWeight="bold" fontFamily="sans-serif">
                      OPEN HEART SURGERY
                    </Typography>
                    <Typography variant="body2" color="primary" marginTop={4}>
                      LEARN MORE
                    </Typography>
                  </CardContent>
                </Card>
              </Item>
            </Grid>
            {/* 2 */}
            <Grid item xs={2}>
              <Item>
                <Card
                  sx={{
                    maxWidth: 300,
                    transition: 'box-shadow 0.3s',
                    '&:hover': {
                      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                    },
                    '&:focus': {
                      boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2)',
                    },
                  }}
                  tabIndex={0}
                >
                  <CardMedia
                    component="img"
                    alt="green iguana"
                    height="150"
                    image={kidney}
                  />
                  <CardContent>
                    <Typography variant="body2" color="black" fontWeight="bold" fontFamily="sans-serif">
                      KIDNEY TRANSPLANT
                    </Typography>
                    <Typography variant="body2" color="primary" marginTop={4}>
                      LEARN MORE
                    </Typography>
                  </CardContent>
                </Card>
              </Item>
            </Grid>
            {/* 3 */}
            <Grid item xs={2}>
              <Item>
                <Card
                  sx={{
                    maxWidth: 300,
                    transition: 'box-shadow 0.3s',
                    '&:hover': {
                      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                    },
                    '&:focus': {
                      boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2)',
                    },
                  }}
                  tabIndex={0}
                >
                  <CardMedia
                    component="img"
                    alt="green iguana"
                    height="150"
                    image={child}
                  />
                  <CardContent>
                    <Typography variant="body2" color="black" fontWeight="bold" fontFamily="sans-serif">
                      NICU CARE
                    </Typography>
                    <Typography variant="body2" color="primary" marginTop={4}>
                      LEARN MORE
                    </Typography>
                  </CardContent>
                </Card>
              </Item>
            </Grid>
            {/* 4 */}
            <Grid item xs={2}>
              <Item>
                <Card
                  sx={{
                    maxWidth: 300,
                    transition: 'box-shadow 0.3s',
                    '&:hover': {
                      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                    },
                    '&:focus': {
                      boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2)',
                    },
                  }}
                  tabIndex={0}
                >
                  <CardMedia
                    component="img"
                    alt="green iguana"
                    height="150"
                    image={bone}
                  />
                  <CardContent>
                    <Typography variant="body2" color="black" fontWeight="bold" fontFamily="sans-serif">
                      BONE MARROW TRANSPLANT
                    </Typography>
                    <Typography variant="body2" color="primary" marginTop={2}>
                      LEARN MORE
                    </Typography>
                  </CardContent>
                </Card>
              </Item>
            </Grid>
            {/* 5 */}
            <Grid item xs={2}>
              <Item>
                <Card
                  sx={{
                    maxWidth: 300,
                    transition: 'box-shadow 0.3s',
                    '&:hover': {
                      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                    },
                    '&:focus': {
                      boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2)',
                    },
                  }}
                  tabIndex={0}
                >
                  <CardMedia
                    component="img"
                    alt="green iguana"
                    height="150"
                    image={cancer}
                  />
                  <CardContent>
                    <Typography variant="body2" color="black" fontWeight="bold" fontFamily="sans-serif">
                      CANCER TREATMENT
                    </Typography>
                    <Typography variant="body2" color="primary" marginTop={4}>
                      LEARN MORE
                    </Typography>
                  </CardContent>
                </Card>
              </Item>
            </Grid>

          </Grid>
        </Box>
        <div className='lastdiv'>
          <h1 className="lasthead">Have any query or need help?</h1>
          <h6 className='lastpara'>Do you want to receive call from Open Doors</h6>
          <button className="lastButton">Yes, I want to receive a call</button>
        </div>

        <footer className="footer">
          <div className="footer-content">
            <div className="footer-section">
              <h3>Terms and Policies</h3>
              {/* Add links to your terms and policies pages */}
              <ul className='ulastlist'>
                <li ><a href="#" className='lastlist'>Terms of Service</a></li>
                <li ><a href="#" className='lastlist'>Privacy Policy</a></li>
              </ul>
            </div>
            <div className="footer-section">
              <h3>Follow Us</h3>
              {/* Add social media icons with links */}
              <div className="social-icons">
                <a href="your-facebook-link">
                  <FontAwesomeIcon icon={faFacebook} />
                </a>
                <a href="your-twitter-link">
                  <FontAwesomeIcon icon={faTwitter} />
                </a>
                <a href="https://www.whatsapp.com/">
                  <FontAwesomeIcon icon={faWhatsapp} />
                </a>
                <a href="your-twitter-link">
                  <FontAwesomeIcon icon={faInstagram} />
                </a>
                <a href="your-twitter-link">
                  <FontAwesomeIcon icon={faLinkedinIn} />
                </a>
              </div>
            </div>
            <div className="footer-section">
              <h3>Contact Us</h3>
              {/* Add your email and contact information */}
              <p>Email: openDoors24@gmail.com</p>
              <p>Phone: +91 93456778901</p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
export default BrowseFund;