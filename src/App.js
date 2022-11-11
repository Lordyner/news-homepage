import './index.scss';
import logo from './images/logo.svg';
import mainImage from './images/image-web-3-desktop.jpg'
import mainImageMobile from './images/image-web-3-mobile.jpg'
import imageRetroPcs from './images/image-retro-pcs.jpg'
import imageTopLaptops from './images/image-top-laptops.jpg'
import imageGamingGrowth from './images/image-gaming-growth.jpg'
import iconMenu from './images/icon-menu.svg'
import iconMenuClose from './images/icon-menu-close.svg'
import { useState, useEffect } from 'react';


function App() {

  const [isMenuOpen, setIsMenuOpen] = useState();
  const [isDesktopResolution, setIsDesktopResolution] = useState();
  const [screenWidth, setScreenWidth] = useState(window.screen.width);
  const mobileResolution = 480;

  const handleMenuDisplay = () => {
    setScreenWidth(window.screen.width);
    screenWidth > mobileResolution ? setIsDesktopResolution(true) : setIsDesktopResolution(false);
  }

  useEffect(() => {
    handleMenuDisplay();
  }, [])

  window.addEventListener('resize', handleMenuDisplay);


  return (
    <div id='filter' className={`${isMenuOpen ? "dark-filter" : ""}`}>
      <div className='container'>
        <div className='grid-container'>
          <nav className='navbar-top grid-children'>
            <div>
              <img src={logo} />
            </div>
            <div className='navbar-top-links'>
              <img className={`${isDesktopResolution ? "hidden" : ""}`} src={iconMenu} onClick={() => setIsMenuOpen(!isMenuOpen)}></img>
              <div className={`navbar-top-links ${isDesktopResolution ? "" : "hidden"}`}>
                <a>Home</a>
                <a>New</a>
                <a>Popular</a>
                <a>Trending</a>
                <a>Categories</a>
              </div>
            </div>
            <div id="sideMenu" className={`side-menu ${isMenuOpen ? "active" : ""}`}>
              <div className='d-flex justify-content-end mb-4'>
                <img src={iconMenuClose} id='close-menu-icon' onClick={() => setIsMenuOpen(!isMenuOpen)}></img>
              </div>
              <a>Home</a>
              <a>New</a>
              <a>Popular</a>
              <a>Trending</a>
              <a>Categories</a>
            </div>
          </nav>

          <div className='grid-children'>
            <img id='mainImage' src={`${screenWidth < mobileResolution ? mainImageMobile : mainImage}`} />
          </div>
          <div className='grid-children'>
            <h1>The Bright Future of Web 3.0?</h1>
          </div>
          <div className='grid-children d-flex flex-column justify-content-between'>
            <p>
              We dive into the next evolution of the web that claims to put the power of the platforms back into the hands of the people.
              But is it really fulfilling its promise?
            </p>
            <button className='primary-button'>READ MORE</button>
          </div>

          <nav className='new-section grid-children'>
            <div className='new-section-title'>
              <h2>New</h2>
            </div>
            <div className="new-section-content">
              <div className='new-section-children'>
                <a>Hydrogen VS Electric Cars</a>
                <p>Will hydrogen-fueled cars ever catch up to EVs?</p>
              </div>
              <div className='new-section-children'>
                <a>The Downsides of AI Artistry</a>
                <p>What are the possible adverse effects of on-demand AI image generation</p>
              </div>
              <div className='new-section-children'>
                <a>Is VC Funding Drying Up</a>
                <p>Private funding by VC firms is down 5°% YOY. We take a look at what that means</p>
              </div>
            </div>
          </nav>

          <div className='nav-bottom-flex-container grid-children'>
            <img src={imageRetroPcs} />
            <div className='nav-bottom-content'>
              <h3 className='bottom-nav-number'>01</h3>
              <h4>Reviving Retro PCs</h4>
              <p>What happens when old are given modern upgrades</p>
            </div>
          </div>
          <div className='nav-bottom-flex-container grid-children'>
            <img src={imageTopLaptops} />
            <div className='nav-bottom-content'>
              <h3 className='bottom-nav-number'>02</h3>
              <h4>Top 10 Laptops of 2022</h4>
              <p>Our best picks for various need and budgets</p>
            </div>
          </div>
          <div className='nav-bottom-flex-container grid-children'>
            <img src={imageGamingGrowth} />
            <div className='nav-bottom-content'>
              <h3 className='bottom-nav-number'>03</h3>
              <h4>The Growth of gaming</h4>
              <p>How the pandemic has sparked new fresh opportunities</p>
            </div>
          </div>
        </div >
      </div>
    </div >
  );
}

export default App;
