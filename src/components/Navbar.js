import React from 'react'
import './style.css'

export default function Navbar() {
  return (
    <div>
    <header className="header">
    <nav className="nav">
      <h1 className="nav-title">Omega</h1>
      <ul className="nav-list">
        <li className="nav-item">
          <a href="#" className="nav-link">
            Demos
          </a>
        </li>
        <li className="nav-item">
          <a href="#" className="nav-link">
            Demos
          </a>
        </li>
        <li className="nav-item">
          <a href="#" className="nav-link">
            Demos
          </a>
        </li>
      </ul>
      <div className="get-this-book">
        <a href="#">Get this book</a>
      </div>
    </nav>
    <div className="main">
      <div className="left-side"><img src="./img/b1.png" alt="" /></div>
      <div className="right-side">
        <h1 className="main-title">Solve your daily life problems in 1 minute.</h1>
        <p className="main-subtext"><span><img src="./img/Path.svg" alt="" /></span>Lorem ipsum dolor sit amet consectetur.</p>
        <p className="main-subtext"><span><img src="./img/Path.svg" alt="" /></span>Lorem ipsum dolor sit amet consectetur.</p>
        <p className="main-subtext"><span><img src="./img/Path.svg" alt="" /></span>Lorem ipsum dolor sit amet consectetur.</p>
        <div className="right-side-button">
          <a href="#" className="button">Get this book - Starts from $29</a>
        </div>
        <p className="button-subtext">Interested in free chapter?  <a href="#">Get it now</a></p>
      </div>
    </div>
    <div className="main-footer">
      <div className="main-footer-img">
        <img src="./img/oval.png" alt="" />
      </div>
      <div className="main-footer-texts">
        <em className="main-footer-text">"Lorem ipsum, dolor sit, amet consectetur adipisicing elit. Facilis, sint? Autem fuga velit laboriosam, natus fugit consequuntur, eum quod doloremque."</em>
        <br />
        <br />
        <strong className="main-footer-subtitle">Jonathan Taylor</strong>
      </div>
    </div>
  </header>
  <hr />
  <section className="chapter">
    <div className="container">
      <div className="chapter-title">
        <h1 className="chapter-title-title">Chapters we've covered</h1>
        <p className="chapter-title-subtitle">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex harum veritatis laudantium quidem!</p>
      </div>
      <div className="chapter-main">
        <div className="chapter-main-left">
          <h1 className="chapter-main-left-logo">1</h1>
        </div>
        <div className="chapter-main-right">
          <p className="chapter-main-right-subtitle">Chapter 01</p> 
          <h1 className="chapter-main-right-title">What is problem solving?</h1>
          <p className="chapter-main-right-subtext">Lorem ipsum dolor sit amet consectetur adipisicing, elit. Tempore, fugit, aperiam. Atque, deserunt, natus sunt consequatur facilis architecto sit impedit sint velit quasi.</p>
        </div>
      </div>
      <div className="chapter-footer">
        <div className="problem">
          <img src="./img/box.svg" alt="" />
          <h3 className="chapter-footer-title">Chapters we've covered</h3>
          <p className="chapter-footer-subtext">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos debitis laudantium tenetur consequuntur quisquam.</p>
        </div>
        <div className="problem">
          <img src="./img/box.svg" alt="" />
          <h3 className="chapter-footer-title">Chapters we've covered</h3>
          <p className="chapter-footer-subtext">Lorem ipsum dolor, sit, amet consectetur adipisicing elit. Tempore, eligendi natus non ad aspernatur?</p>
        </div>
        <div className="problem">
          <img src="./img/box.svg" alt="" />
          <h3 className="chapter-footer-title">Chapters we've covered</h3>
          <p className="chapter-footer-subtext">Lorem ipsum dolor sit amet consectetur adipisicing, elit. Iusto, rem quis suscipit ad eius!</p>
        </div>
      </div>
    </div>
    <div className="next-button">
      <a href="#" className="next-link">-&gt;</a>
    </div>
    <div className="next-button-1">
      <a href="#" className="next-link-1">&lt;-</a>
    </div>
  </section>
  <hr />
  <section className="learn">
    <div className="container">
      <div className="learn-title">
        <h1 className="learn-title-title">Things you'll learn</h1>
        <p className="learn-subtext">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Similique porro, molestiae. Dolores iste quidem, recusandae.</p>
      </div>
      <div className="learn-main">
        <ul className="learn-main-list">
          <li className="learn-main-item">
            <img src="./img/path.svg" alt="" />
            <p className="learn-main-subtext">How to improve your skill with tasks</p>
          </li><li className="learn-main-item">
            <img src="./img/path.svg" alt="" />
            <p className="learn-main-subtext">How to improve your skill with tasks</p>
          </li>
          <li className="learn-main-item">
            <img src="./img/path.svg" alt="" />
            <p className="learn-main-subtext">How to improve your skill with tasks</p>
          </li>
          <li className="learn-main-item">
            <img src="./img/path.svg" alt="" />
            <p className="learn-main-subtext">How to improve your skill with tasks</p>
          </li>
          <li className="learn-main-item">
            <img src="./img/path.svg" alt="" />
            <p className="learn-main-subtext">How to improve your skill with tasks</p>
          </li>
          <li className="learn-main-item">
            <img src="./img/path.svg" alt="" />
            <p className="learn-main-subtext">How to improve your skill with tasks</p>
          </li>
          <li className="learn-main-item">
            <img src="./img/path.svg" alt="" />
            <p className="learn-main-subtext">How to improve your skill with tasks</p>
          </li>
          <li className="learn-main-item">
            <img src="./img/path.svg" alt="" />
            <p className="learn-main-subtext">How to improve your skill with tasks</p>
          </li>
          <li className="learn-main-item">
            <img src="./img/path.svg" alt="" />
            <p className="learn-main-subtext">How to improve your skill with tasks</p>
          </li>
        </ul>
      </div>
      <div className="learn-main-footer">
        <div className="learn-main-footer-left">
          <div className="main-footer-left-photo">
            <img src="./img/b1.png" alt="" />
          </div>
          <div className="main-footer-left-text">
            <h1 className="left-text-title">Get a free chapter of this book</h1>
            <p className="left-text-subtext">Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse cum odit suscipit, provident.</p>
          </div>	
        </div>
        <div className="learn-main-footer-right">
          <a href="#">Get a free chapter</a>
        </div>
      </div>
      <div className="learn-footer">
        <ul className="learn-footer-list">
          <li className="learn-footer-item">
            <h1 className="learn-footer-title">50K+</h1>
            <p className="learn-footer-subtext">Lorem ipsum, dolor sit amet, consectetur adipisicing elit. Laborum, doloremque.</p>
          </li>
          <li className="learn-footer-item">
            <h1 className="learn-footer-title">96%</h1>
            <p className="learn-footer-subtext">Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit, maxime.</p>
          </li>
          <li className="learn-footer-item">
            <h1 className="learn-footer-title">4.9/5.0</h1>
            <p className="learn-footer-subtext">Lorem ipsum, dolor sit, amet consectetur adipisicing elit. Aut, quos?</p>
          </li>
        </ul>
      </div>
    </div>
  </section>
  <hr />
  <section className="readers">
    <div className="container">
      <div className="readers-container">
        <div className="readers-title">
          <h1 className="readers-title-title">Review from Readers</h1>
          <p className="readers-subtext">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Similique porro, molestiae. Dolores iste quidem, recusandae.</p>
        </div>
        <div className="readers-main">
          <ul className="readers-main-list">
            <li className="readers-main-item">
              <div className="stars">
                <img src="./img/Path (1).svg" alt="" />
                <img src="./img/Path (1).svg" alt="" />
                <img src="./img/Path (1).svg" alt="" />
                <img src="./img/Path (1).svg" alt="" />
                <img src="./img/Path (1).svg" alt="" />
              </div>
              <em className="readers-main-subtext">"Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae dolore, qui tenetur ipsam quia nostrum, harum nisi provident suscipit aliquid, veritatis eum."</em>
              <div className="readers-main-item-footer">
                <div className="readers-main-photo">
                  <img src="./img/Oval (2).png" alt="" />
                </div>
                <div className="readers-main-text">
                  <h2 className="readers-main-title">Darika Samak</h2>
                  <p className="readers-main-subtitle">From Amazon.com</p>
                </div>
              </div>
            </li>
            <li className="readers-main-item">
              <div className="stars">
                <img src="./img/Path (1).svg" alt="" />
                <img src="./img/Path (1).svg" alt="" />
                <img src="./img/Path (1).svg" alt="" />
                <img src="./img/Path (1).svg" alt="" />
                <img src="./img/Path (1).svg" alt="" />
              </div>
              <em className="readers-main-subtext">"Lorem ipsum dolor sit, amet consectetur, adipisicing elit. Commodi ullam dicta quis quo quisquam facere, aliquam quos repudiandae praesentium magnam</em>
              <div className="readers-main-item-footer">
                <div className="readers-main-photo">
                  <img src="./img/Oval (2).png" alt="" />
                </div>
                <div className="readers-main-text">
                  <h2 className="readers-main-title">Darika Samak</h2>
                  <p className="readers-main-subtitle">From Amazon.com</p>
                </div>
              </div>
            </li>
            <li className="readers-main-item">
              <div className="stars">
                <img src="./img/Path (1).svg" alt="" />
                <img src="./img/Path (1).svg" alt="" />
                <img src="./img/Path (1).svg" alt="" />
                <img src="./img/Path (1).svg" alt="" />
                <img src="./img/Path (1).svg" alt="" />
              </div>
              <em className="readers-main-subtext">"Lorem ipsum, dolor sit amet consectetur adipisicing, elit. Non sint nam eos voluptas quis quidem laudantium sequi beatae, dolore praesentium amet libero."</em>
              <div className="readers-main-item-footer">
                <div className="readers-main-photo">
                  <img src="./img/Oval (2).png" alt="" />
                </div>
                <div className="readers-main-text">
                  <h2 className="readers-main-title">Darika Samak</h2>
                  <p className="readers-main-subtitle">From Amazon.com</p>
                </div>
              </div>
            </li>
          </ul>
        </div>
        <div className="readers-footer-link"><a href="#">Check all 3,583 reviews on Amazon.com</a></div>
      </div>
    </div>
  </section>
  <hr />
  <section className="author">
    <div className="container">
      <h1 className="author-title">About the Author</h1>
      <div className="author-main">
        <div className="author-main-photo">
          <img src="./img/Oval (3).png" alt="" />
        </div>
        <div className="author-main-text">
          <h1 className="author-main-title">Joseph Williams</h1>
          <p className="author-main-subtext">Hey! My name is Joseph Williams and I'm a product designer based in Berlin. Most recently I led the design of multiple products at WeWork and prior to that I worked with startups building their products and design culture. <br /><br /> Previous products I built for the design community are used by tens of thousands of designers working at companies like Google, Airbnb, Netflix and Boeing. Products I built or designed are featured in Wired, TechCrunch, Forbes, Quartz, Smashing Magazine, Awwwards and more.
          </p>
          <div className="social-box"><p className="social">Read me on <a href="#">Twitter</a></p>
            <span>or</span>
            <a href="#">Email</a>
          </div>
        </div>
      </div>
    </div>
  </section>
  <hr />
  <section className="plans">
    <div className="container">
      <div className="plans-title">
        <h1 className="plans-title-title">Pricing &amp; Plans</h1>
        <p className="plans-subtext">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Similique porro, molestiae. Dolores iste quidem, recusandae.</p>
      </div>
      <div className="plans-main">
        <ul className="plans-main-list">
          <li className="plans-main-item">
            <a href="#" className="plans-main-item-link">limited</a>
            <h1 className="plans-main-item-title">Free</h1>
            <p className="plans-main-item-subtitle">Get a free chapter of our book right now.</p>
            <button className="email-btn">
              <img src="./img/email.svg" alt="" />
              <a href="#" className="email-link">Email address</a>
            </button>
            <div className="send-btn">
              <a href="#" className="send-link">Send free chapter</a>
            </div>
          </li>
          <li className="plans-main-item">
            <a href="#" className="plans-main-item-link">limited</a>
            <h1 className="plans-main-item-title">$19</h1>
            <p className="plans-main-item-subtitle">Get a free chapter of our book right now.</p>
            <button className="email-btn">
              <img src="./img/email.svg" alt="" />
              <a href="#" className="email-link">Email address</a>
            </button>
            <div className="send-btn">
              <a href="#" className="send-link-2">Buy from Amazon</a>
            </div>
          </li>
          <li className="plans-main-item">
            <a href="#" className="plans-main-item-link">limited</a>
            <h1 className="plans-main-item-title">$39</h1>
            <p className="plans-main-item-subtitle">Get a free chapter of our book right now.</p>
            <button className="email-btn">
              <img src="./img/email.svg" alt="" />
              <a href="#" className="email-link">Email address</a>
            </button>
            <div className="send-btn">
              <a href="#" className="send-link-2">Buy from Amazon</a>
            </div>
          </li>
        </ul> 
      </div>
      <ul className="plans-footer-list">
        <li className="plans-footer-item">
          <div className="plans-footer-item-title">
            <p>-&gt;</p>
            <h2 className="plans-footer-item-subtitle">Can I use Omega for my clients?</h2>
          </div>
          <p className="plans-footer-item-subtext">Create custom landing pages with Omega that converts more visitors than any website. With lots of unique blocks, you can easily build.</p>
        </li>
        <li className="plans-footer-item">
          <div className="plans-footer-item-title">
            <p>-&gt;</p>
            <h2 className="plans-footer-item-subtitle">Can I use Omega for my clients?</h2>
          </div>
          <p className="plans-footer-item-subtext">Create custom landing pages with Omega that converts more visitors than any website. With lots of unique blocks, you can easily build.</p>
        </li>
        <li className="plans-footer-item">
          <div className="plans-footer-item-title">
            <p>-&gt;</p>
            <h2 className="plans-footer-item-subtitle">Can I use Omega for my clients?</h2>
          </div>
          <p className="plans-footer-item-subtext">Create custom landing pages with Omega that converts more visitors than any website. With lots of unique blocks, you can easily build a page without.</p>
        </li>
        <li className="plans-footer-item">
          <div className="plans-footer-item-title">
            <p>-&gt;</p>
            <h2 className="plans-footer-item-subtitle">Can I use Omega for my clients?</h2>
          </div>
          <p className="plans-footer-item-subtext">Create custom landing pages with Omega that converts more visitors than any website. With lots of unique blocks, you can easily build a page without any..</p>
        </li>
      </ul>
    </div>
  </section>
  <section className="footer">
    <div className="container">
      <div className="footer-left">
        <h1 className="footer-left-title">Learn problem solving</h1>
        <p className="footer-left-subtext">Create custom landing pages with Omega that converts more visitors than any website.</p>
      </div>
      <div className="footer-right">
        <a href="#" className="get-this-book-1">Get this book</a>
      </div>
    </div>
    <hr />
    <div className="footer-nav">
      <h1 className="footer-nav-title">Omega</h1>
      <ul className="footer-nav-list">
        <li className="footer-nav-item">
          <a href="#" className="footer-nav-link">
            Support
          </a>
        </li>
        <li className="footer-nav-item">
          <a href="#" className="footer-nav-link">
            Privacy Policy
          </a>
        </li>
        <li className="footer-nav-item">
          <a href="#" className="footer-nav-link">
            Terms and Conditions
          </a>
        </li>
      </ul>
      <div className="copyright">
        <p className="copyright-text">© 2020 Bala, All Rights Reserved</p>
      </div>
    </div>
  </section></div>
  )
}
