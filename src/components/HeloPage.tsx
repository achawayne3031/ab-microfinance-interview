
import React from 'react'
import '../assets/css/hero.scss'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/Button';
import Avatar from '@mui/material/Avatar';
import AvatarGroup from '@mui/material/AvatarGroup';
import kylie from '../assets/images/kylie.jpg'

const HeloPage = () => {
  return (
    <div className='hero-wrapper'>
        <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
        <Container>
        <Navbar.Brand>
            <svg width="155" height="57" viewBox="0 0 155 57" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12.1622 16.17V9.46614H31.6098V16.17H29.6808L28.3843 11.901H24.4632V29.135L27.3724 29.8307V31.6016H16.3996V29.8307L19.3088 29.135V11.901H15.3561L14.0596 16.17H12.1622ZM33.0436 31.6016V29.9256L35.7315 29.2932V18.6682H33.0436V16.9922L38.1032 15.7906H40.6013V17.6879C42.1824 16.1068 44.0587 15.3162 46.23 15.3162C46.3565 15.7168 46.4198 16.1595 46.4198 16.6443C46.4198 17.6141 46.3144 18.5206 46.1035 19.3638L42.1192 18.6998C41.6132 18.9317 41.1073 19.269 40.6013 19.7117V29.2932L43.9216 29.9256V31.6016H33.0436ZM47.8047 27.6804C47.8047 25.8464 48.5531 24.455 50.0499 23.5063C51.5677 22.5366 54.0132 22.0517 57.3862 22.0517V21.103C57.3862 20.4706 57.3756 20.0174 57.3546 19.7433C57.3546 19.4482 57.3124 19.1003 57.2281 18.6998C57.1437 18.2992 57.0173 18.0146 56.8486 17.846C56.701 17.6773 56.4691 17.5298 56.1529 17.4033C55.8367 17.2557 55.4467 17.1819 54.9829 17.1819L50.9669 20.6603C49.5334 19.8382 48.8166 18.5627 48.8166 16.8341L49.7653 16.423C50.1658 16.2543 50.9458 16.033 52.1053 15.7589C53.2648 15.4638 54.3926 15.3162 55.4889 15.3162C60.0214 15.3162 62.2876 17.1292 62.2876 20.7552V29.2299H64.7541V30.5897C64.6487 30.6951 64.5011 30.8321 64.3114 31.0007C64.1217 31.1694 63.7106 31.3907 63.0781 31.6648C62.4457 31.9389 61.7922 32.0759 61.1176 32.0759C59.5154 32.0759 58.3243 31.5383 57.5443 30.4632C56.1318 31.5383 54.5929 32.0759 52.9275 32.0759C51.4729 32.0759 50.2501 31.707 49.2593 30.9691C48.2896 30.2313 47.8047 29.135 47.8047 27.6804ZM52.8959 27.3958C52.8959 28.0072 53.0961 28.4921 53.4967 28.8504C53.9183 29.2088 54.4243 29.388 55.0145 29.388C55.9632 29.388 56.7537 29.0402 57.3862 28.3445V24.0123C56.2056 24.0123 55.1621 24.3285 54.2556 24.9609C53.3491 25.5723 52.8959 26.3839 52.8959 27.3958ZM64.3008 17.4665V15.7906H73.9771V17.4665L71.8268 17.9725L75.0207 25.5301L78.1512 18.0041L76.0642 17.4665V15.7906H82.9262V17.4665L80.2699 18.1622L74.6412 31.8229H72.4276L66.5776 18.1306L64.3008 17.4665ZM83.445 23.5063C83.445 21.0187 84.1406 19.0371 85.532 17.5614C86.9445 16.0646 88.8523 15.3162 91.2556 15.3162C93.701 15.3162 95.5456 16.1489 96.7894 17.8144C98.0543 19.4798 98.6868 21.5352 98.6868 23.9807H88.3147C88.4623 25.5407 89.021 26.8899 89.9907 28.0283C90.9605 29.1456 92.2043 29.7042 93.7221 29.7042C94.8605 29.7042 96.0832 29.4618 97.3903 28.9769L98.0543 30.7794C96.0938 31.6437 94.1754 32.0759 92.2991 32.0759C89.5796 32.0759 87.4188 31.2853 85.8166 29.7042C84.2355 28.1021 83.445 26.0361 83.445 23.5063ZM88.3147 22.0201L93.6589 21.6722C93.6589 21.1663 93.6272 20.7025 93.564 20.2809C93.5008 19.8382 93.3216 19.3111 93.0264 18.6998C92.4994 17.8144 91.8775 17.3717 91.1607 17.3717C90.3175 17.3717 89.6218 17.8038 89.0737 18.6682C88.7575 19.1952 88.5466 19.7749 88.4412 20.4074C88.3358 21.0398 88.2937 21.5774 88.3147 22.0201ZM100.044 31.6016V29.9256L102.732 29.2932V9.18155H100.044V7.50558L105.104 6.30394H107.602V29.2932L110.29 29.9256V31.6016H100.044Z" fill="white"/>
            <g clipPath="url(#clip0_101_796)">
            <path d="M34.2202 36.2636C41.0362 43.1861 70.691 50.0766 90.6373 49.6441C112.197 49.2114 124.004 46.1843 146.99 35.0534C146.923 36.2722 146.72 37.2639 146.753 38.1686C146.729 39.2008 146.719 40.2921 147.027 41.2869C147.093 41.5822 147.958 42.0297 148.468 42.0328C148.978 42.0358 149.714 41.5289 149.813 41.2149C150.669 38.2115 151.36 35.2268 152.12 32.1737C152.322 31.1819 151.666 30.5291 150.192 30.3926C144.596 30.0547 138.987 29.6577 133.321 29.3882C132.039 29.3511 130.601 29.7555 128.944 29.9423C130.838 32.3328 133.754 31.7012 136.053 32.108C138.449 32.5647 140.944 32.7072 144.002 33.0891C137.867 37.1722 131.372 40.0242 124.29 42.1551C98.3704 50.0438 72.6198 48.8296 47.2663 40.6668C43.9667 39.5854 40.8627 38.2398 37.6326 37.09C36.6553 36.8974 35.7608 36.6955 34.2202 36.2636Z" fill="#DF6951"/>
            </g>
            <defs>
            <clipPath id="clip0_101_796">
            <rect width="116.765" height="20.4901" fill="white" transform="matrix(0.993702 -0.112055 -0.218554 -0.975825 38.6984 56.2583)"/>
            </clipPath>
            </defs>
            </svg>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav" className='navbar-custom'>
            <Nav className='navlink-item'>
                <Nav.Link href="#features">Home</Nav.Link>
                <Nav.Link href="#pricing">About</Nav.Link>
                <NavDropdown title="Services" id="collasible-nav-dropdown" className='navbar-dropdown-wrapper'>
                    <NavDropdown.Item href="#action/3.1">Honeymoon Packages</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">
                        Tour Packages
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">Musical Events</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">Build Package</NavDropdown.Item>
                </NavDropdown>
                <Nav.Link href="#pricing">Upcoming Packages</Nav.Link>
            </Nav>
            <Nav>
            <Button variant="success">Get in Touch</Button>         
            </Nav>
        </Navbar.Collapse>
        </Container>
        </Navbar>

        <div className='hero-text-wrapper'>
            <svg width="101" height="18" viewBox="0 0 101 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M3 15.59L10.8682 4.42393C11.7006 3.24271 13.4519 3.24271 14.2843 4.42393L20.4445 13.1661C21.2768 14.3473 23.0282 14.3473 23.8605 13.1661L30.0207 4.42393C30.8531 3.24271 32.6044 3.24271 33.4368 4.42393L39.597 13.1661C40.4293 14.3473 42.1807 14.3473 43.013 13.1661L49.1732 4.42393C50.0056 3.24271 51.7569 3.24271 52.5893 4.42393L58.7495 13.1661C59.5818 14.3473 61.3332 14.3473 62.1655 13.1661L68.3257 4.42393C69.1581 3.24271 70.9094 3.24271 71.7418 4.42393L77.902 13.1661C78.7343 14.3473 80.4857 14.3473 81.318 13.1661L87.4782 4.42393C88.3106 3.24271 90.0619 3.24271 90.8943 4.42393L98.7625 15.59" stroke="#DF6951" strokeWidth="5.22371"/>
            </svg>
            <h2 className='hero-text-title'>No matter where you’re going to, we’ll take you there</h2>

            <div className='filter-wrapper'>
                <div className='filter-content'>
                    <span className='filter-text-item'>Where to</span>
                </div>

                <svg className='liner-border' width="5" height="30" viewBox="0 0 5 43" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="0.633301" y="0.687134" width="3.66645" height="41.6257" rx="1.83323" fill="#D0D0D0"/>
                </svg>


                <div>
                    <span className='filter-text-item'>Travel Type</span>
                    <svg width="12" height="9" viewBox="0 0 18 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1.41882 1.97327L8.75173 7.17648L16.0846 1.97327" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                </div>

                <svg className='liner-border' width="5" height="30" viewBox="0 0 5 43" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="0.633301" y="0.687134" width="3.66645" height="41.6257" rx="1.83323" fill="#D0D0D0"/>
                </svg>

                <div>
                    <span className='filter-text-item'>Duration</span>
                    <svg width="12" height="9" viewBox="0 0 18 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1.41882 1.97327L8.75173 7.17648L16.0846 1.97327" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                </div>



                <div>
                    <button className='filter-btn'>Submit</button>
                </div>

            </div>

            <div className='parked-icon-wrapper mt-3'>
                <div className='avatar-wrapper'>
                    <AvatarGroup max={4}>
                        <Avatar sx={{ width: 30, height: 30 }} src={kylie} />
                        <Avatar sx={{ width: 30, height: 30 }} src={kylie} />
                        <Avatar sx={{ width: 30, height: 30 }} src={kylie} />
                        <Avatar  sx={{ width: 30, height: 30 }} src={kylie} />
                        <Avatar sx={{ width: 30, height: 30 }} src={kylie} />
                    </AvatarGroup>
                </div>
                <div>
                    <p>2,500 people booked Tommorowland Event in last 24 hours</p>
                </div>

            </div>

        </div>
    </div>  
  )
}

export default HeloPage


