'use client';
import Head from 'next/head';
import { useState } from 'react';
import WaitlistModal from '../components/WaitlistModal';
import "../public/css/style.css";
import "../public/css/font-awesome.min.css";
import Script from 'next/script';

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleModalToggle = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <div>
      <Head>
        <title>Namari - Free Landing Page Template</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="stylesheet" href="../public/css/style.css" />
        <link rel="stylesheet" href="../public/css/namari-color.css" />
        <link rel="stylesheet" href="../public/css/font-awesome.min.css" />
        <link href='https://fonts.googleapis.com/css?family=Open+Sans:400,300,600,700,800' rel='stylesheet' />
        <script src="jquery-3.7.1.min.js"></script>
      
      </Head>
      <Script type="text/javascript" src="/static/jquery.1.8.3.min.js" strategy="lazyOnload" />
      <Script type="text/javascript" src="/static/wow.min.js" strategy="lazyOnload" />
      <Script type="text/javascript" src="/static/featherlight.min.js" strategy="lazyOnload" />
      <Script type="text/javascript" src="/static/featherlight.gallery.min.js" strategy="lazyOnload" />
      <Script type="text/javascript" src="/static/jquery.enllax.min.js" strategy="lazyOnload" />
      <Script type="text/javascript" src="/static/jquery.scrollUp.min.js" strategy="lazyOnload" />
      <Script type="text/javascript" src="/static/jquery.easing.min.js" strategy="lazyOnload" />
      <Script type="text/javascript" src="/static/jquery.stickyNavbar.min.js" strategy="lazyOnload" />
      <Script type="text/javascript" src="/static/jquery.waypoints.min.js" strategy="lazyOnload" />
      <Script type="text/javascript" src="/static/images-loaded.min.js" strategy="lazyOnload" />
      <Script type="text/javascript" src="/static/lightbox.min.js" strategy="lazyOnload" />
      <Script type="text/javascript" src="/static/site.js" strategy="lazyOnload" />
      {/* Preloader 
      <div id="preloader">
        <div id="status" className="la-ball-triangle-path">
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>

       Page Border */}
      <div className="page-border" data-wow-duration="0.7s" data-wow-delay="0.2s">
        <div className="top-border wow fadeInDown animated" style={{ visibility: 'visible', animationName: 'fadeInDown' }}></div>
        <div className="right-border wow fadeInRight animated" style={{ visibility: 'visible', animationName: 'fadeInRight' }}></div>
        <div className="bottom-border wow fadeInUp animated" style={{ visibility: 'visible', animationName: 'fadeInUp' }}></div>
        <div className="left-border wow fadeInLeft animated" style={{ visibility: 'visible', animationName: 'fadeInLeft' }}></div>
      </div>

      <div id="wrapper">

        <header id="banner" className="scrollto clearfix" data-enllax-ratio=".5">
          <div id="header" className="nav-collapse">
            <div className="row clearfix">
              <div className="col-1">

                {/* Logo */}
                <div id="logo">
                  {/* Logo that is shown on the banner */}
                  <img src="images/meal.png" id="banner-logo" alt="Landing Page"/>
                  {/* The Logo that is shown on the sticky Navigation Bar */}
                  <img src="images/meal.png" id="navigation-logo" alt="Landing Page"/>
                </div>
                {/* End of Logo */}

                <aside>
                  {/* Social Icons in Header */}
                  <ul className="social-icons">
                    <li>
                      <a target="_blank" title="Facebook" href="https://www.facebook.com/username">
                        <i className="fa fa-facebook fa-1x"></i><span>Facebook</span>
                      </a>
                    </li>
                    <li>
                      <a target="_blank" title="Google+" href="http://google.com/+username">
                        <i className="fa fa-google-plus fa-1x"></i><span>Google+</span>
                      </a>
                    </li>
                    <li>
                      <a target="_blank" title="Twitter" href="http://www.twitter.com/username">
                        <i className="fa fa-twitter fa-1x"></i><span>Twitter</span>
                      </a>
                    </li>
                    <li>
                      <a target="_blank" title="Instagram" href="http://www.instagram.com/username">
                        <i className="fa fa-instagram fa-1x"></i><span>Instagram</span>
                      </a>
                    </li>
                    <li>
                      <a target="_blank" title="behance" href="http://www.behance.net">
                        <i className="fa fa-behance fa-1x"></i><span>Behance</span>
                      </a>
                    </li>
                  </ul>
                  {/* End of Social Icons in Header */}
                </aside>

                {/* Main Navigation */}
                <nav id="nav-main">
                  <ul>
                    <li><a href="#banner">Home</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#gallery">Gallery</a></li>
                    <li><a href="#services">Services</a></li>
                    <li><a href="#testimonials">Testimonials</a></li>
                    <li><a href="#pricing">Pricing</a></li>
                  </ul>
                </nav>
                {/* End of Main Navigation */}

                <div id="nav-trigger"><span></span></div>
                <nav id="nav-mobile"></nav>

              </div>
            </div>
          </div>

          {/* Banner Content */}
          <div id="banner-content" className="row clearfix">
            <div className="col-38">
              <div className="section-heading">
                <h1>WELCOME TO MEALPLANNER AI</h1>
                <h2>
                Hungry for inspiration but tired of thinking about what to eat? Let MealPlanner AI whip up the perfect meal ideas for you—no overthinking required. Click below to join the waitlist and let us handle your food dilemmas!</h2>
              </div>

              {/* Call to Action */}
              <button className="button" onClick={handleModalToggle}>JOIN WAITLIST TODAY</button>
            </div>
          </div>
        </header>

        {/* Waitlist Modal */}
        {isModalOpen && <WaitlistModal isOpen={isModalOpen} onClose={handleModalToggle} />}

        {/* Main Content Area */}
        <main id="content">
          <section id="about" className="introduction scrollto">
            <div className="row clearfix">
              <div className="col-3">
                <div className="section-heading">
                  <h3>SUCCESS</h3>
                  <h2 className="section-title">How We Help You To Achieve Your Goals</h2>
                  <p className="section-subtitle">Your journey to a healthier, stronger, and more confident version of yourself starts here. MealPlannerAI is not just a tool—it’s your dedicated partner, guiding you to success every step of the way!</p>
                </div>
              </div>

              <div className="col-2-3">
                {/* Icon Block */}
                <div className="col-2 icon-block icon-top wow fadeInUp" data-wow-delay="0.1s">
                  <div className="icon"><i className="fa fa-html5 fa-2x"></i></div>
                  <div className="icon-block-description">
                    <h4>Personalized Nutrition Plans</h4>
                    <p>Imagine having every meal tailored to you. With MealPlannerAI, your goals become reality. Whether you're striving for muscle growth, weight loss, or simply nourishing your body, we craft a plan designed just for you.</p>
                  </div>
                </div>
                {/* End of Icon Block */}
              

                    {/* Icon Block */}
                  <div className="col-2 icon-block icon-top wow fadeInUp" data-wow-delay="0.3s">
                    {/* Icon */}
                    <div className="icon">
                      <i className="fa fa-bolt fa-2x"></i>
                    </div>
                    {/* Icon Block Description */}
                    <div className="icon-block-description">
                      <h4>Effortless and Empowering</h4>
                      <p>We've simplified the process so you can focus on what matters—becoming your best self. With MealPlannerAI’s intuitive interface, staying on track has never been easier. Your progress, your goals, your journey, all laid out clearly for you to follow. You’ve got this, and we’ve got you.</p>
                    </div>
                  </div>
                  {/* End of Icon Block */}

                  {/* Icon Block */}
                  <div className="col-2 icon-block icon-top wow fadeInUp" data-wow-delay="0.5s">
                    {/* Icon */}
                    <div className="icon">
                      <i className="fa fa-tablet fa-2x"></i>
                    </div>
                    {/* Icon Block Description */}
                    <div className="icon-block-description">
                      <h4>Stress-Free Meal Planning</h4>
                      <p>No more scrambling to figure out what’s for dinner or worrying about whether your meal fits your goals. MealPlannerAI takes the stress away, offering you delicious, goal-aligned meal options and organized shopping lists. It's like having a personal nutritionist in your pocket, guiding you effortlessly toward success.</p>
                    </div>
                  </div>
                  {/* End of Icon Block */}

                  {/* Icon Block */}
                  <div className="col-2 icon-block icon-top wow fadeInUp" data-wow-delay="0.5s">
                    {/* Icon */}
                    <div className="icon">
                      <i className="fa fa-rocket fa-2x"></i>
                    </div>
                    {/* Icon Block Description */}
                    <div className="icon-block-description">
                      <h4>Your Success, Our Mission</h4>
                      <p>We believe in your potential, and we know you can achieve greatness. MealPlannerAI helps you stay consistent and accountable, making sure each meal fuels your drive for success. With every recipe, every meal, and every goal hit, you’re not just eating—you’re transforming. Let’s unlock your full potential together.</p>
                    </div>
                  </div>
                  {/* End of Icon Block */}
                </div>

            </div>


        </section>
     


        <aside id="gallery" className="row text-center scrollto clearfix" data-featherlight-gallery data-featherlight-filter="a">
          <a href="images/gallery-images/mealprep.jpg" data-featherlight="image" className="col-3 wow fadeIn" data-wow-delay="0.1s">
            <img src="images/gallery-images/mealprep.jpg" alt="Landing Page" />
          </a>
          <a href="images/gallery-images/meal2.jpg" data-featherlight="image" className="col-3 wow fadeIn" data-wow-delay="0.3s">
            <img src="images/gallery-images/meal2.jpg" alt="Landing Page" />
          </a>
          <a href="images/gallery-images/meal3.jpg" data-featherlight="image" className="col-3 wow fadeIn" data-wow-delay="0.5s">
            <img src="images/gallery-images/meal3.jpg" alt="Landing Page" />
          </a>
          
          <a href="images/gallry-images/mealext.jpg" data-featherlight="image" className="col-3 wow fadeIn" data-wow-delay="0.9s">
            <img src="images/gallery-images/mealext.jpg" alt="Landing Page" />
          </a>
          <a href="images/gallery-images/mealex.jpg" data-featherlight="image" className="col-3 wow fadeIn" data-wow-delay="0.7s">
            <img src="images/gallery-images/mealex.jpg" alt="Landing Page" />
          </a>
          
        </aside>



        {/* Content Section */}
        <div id="services" className="scrollto clearfix">
          <div className="row no-padding-bottom clearfix">
            {/* Content Left Side */}
            <div className="col-3">
              {/* User Testimonial */}
              <blockquote className="testimonial text-right bigtest">
                <q>MealPlannerAI completely changed the way I approach my fitness goals. I’ve never felt more in control of my diet, and the results speak for themselves.</q>
                <footer>— John Doe, Happy Customer</footer>
              </blockquote>
              {/* End of Testimonial */}
            </div>
            {/* End Content Left Side */}

            {/* Content of the Right Side */}
            <div className="col-3">
              <div className="section-heading">
                <h3>BELIEVING</h3>
                <h2 className="section-title">Focusing On What Fuels You</h2>
                <p className="section-subtitle">
                MealPlannerAI isn't just about eating; it's about fueling your body and mind with the right nutrients to power you through your day.
                </p>
              </div>
              <p>
              Whether you’re looking to lose weight, gain muscle, or simply improve your health, we help you focus on what matters most—living a balanced and fulfilling life!
              </p>
              <a onClick={handleModalToggle} className="button">
                Join Waitlist Today 
              </a>
            </div>
            {/* End Content Right Side */}

            <div className="col-3">
              <img src="images/dancer.jpg" alt="Dancer" />
            </div>
          </div>
        </div>
        {/* End of Content Section */}

        {/* Testimonials */}
        <aside id="testimonials" className="scrollto text-center" data-enllax-ratio=".2">
          <div className="row clearfix">
            <div className="section-heading">
              <h3>FEEDBACK</h3>
              <h2 className="section-title">What our customers are saying</h2>
            </div>

            {/* User Testimonial */}
            <blockquote className="col-3 testimonial classic">
              <img src="images/user-images/user-1.jpg" alt="User" />
              <q>MealPlannerAI has made healthy eating so much easier for me. I’m hitting my fitness goals without sacrificing flavor, and I’ve never felt better!</q>
              <footer>John Doe - Happy Customer</footer>
            </blockquote>
            {/* End of Testimonial */}

            <blockquote className="col-3 testimonial classic">
              <img src="images/user-images/user-2.jpg" alt="User" />
              <q>I used to struggle with staying consistent, but with MealPlannerAI, I have a clear plan every day. It’s helped me stay on track and actually enjoy the process of eating healthy.</q>
              <footer>Roslyn Doe - Happy Customer</footer>
            </blockquote>

            <blockquote className="col-3 testimonial classic">
              <img src="images/user-images/user-3.jpg" alt="User" />
              <q>As someone with a busy schedule, I needed something that fits into my life. MealPlannerAI has been a game-changer. The personalized meal suggestions save me so much time and energy!</q>
              <footer>Thomas Doe - Happy Customer</footer>
            </blockquote>
          </div>
        </aside>



        <section id="pricing" className="secondary-color text-center scrollto clearfix ">
            <div className="row clearfix">

                {/* Pricing Tables */}
                <section id="pricing" className="secondary-color text-center scrollto clearfix">
                  <div className="row clearfix">
                    <div className="section-heading">
                      <h3>YOUR CHOICE</h3>
                      <h2 className="section-title">We have the right package for you</h2>
                    </div>

    {/* Pricing Block */}
    <div className="pricing-block col-3 wow fadeInUp" data-wow-delay="0.4s">
      <div className="pricing-block-content">
        <h3>Basic</h3>
        <p className="pricing-sub">Get Started on Your Health Journey</p>
        <div className="pricing">
          <div className="price"><span>$</span>0</div>
          <p>Perfect for beginners looking to dip their toes in meal planning</p>
        </div>
        <ul>
          <li>7-Day Meal Plan</li>
          <li>Basic Recipe Suggestions</li>
          <li>Limited Access to Nutritional Info</li>
          <li>Basic Grocery List</li>
          <li>Email Support Only</li>
        </ul>
        <a href="#" className="button">START FOR FREE</a>
      </div>
    </div>
    {/* End Pricing Block */}

    {/* Pricing Block */}
    <div className="pricing-block featured col-3 wow fadeInUp" data-wow-delay="0.6s">
      <div className="pricing-block-content">
        <h3>ESSENTIAL</h3>
        <p className="pricing-sub">Boost Your Nutrition Game</p>
        <div className="pricing">
          <div className="price"><span>$</span>5</div>
          <p>For those looking to enhance their diet and meal planning experience</p>
        </div>
        <ul>
          <li>14-Day Personalized Meal Plan</li>
          <li>Full Recipe Suggestions</li>
          <li>Nutritional Breakdown for Each Meal</li>
          <li>Advanced Grocery List with Budgeting</li>
          <li>Access to Community Forum & Weekly Tips</li>
        </ul>
        <a href="#" className="button">GET STARTED FOR $5</a>
      </div>
    </div>
    {/* End Pricing Block */}

    {/* Pricing Block */}
    <div className="pricing-block col-3 wow fadeInUp" data-wow-delay="0.8s">
      <div className="pricing-block-content">
        <h3>PRO</h3>
        <p className="pricing-sub">Your Ultimate Meal Planning Partner</p>
        <div className="pricing">
          <div className="price"><span>$</span>10</div>
          <p>Unlock all features to fully customize your meals and hit your goals</p>
        </div>
        <ul>
          <li>30-Day Personalized Meal Plan</li>
          <li>Exclusive Recipe Library</li>
          <li>Detailed Nutritional Tracking </li>
          <li>Custom Grocery Lists Tailored to Preferences</li>
          <li>Live Chat Support</li>
        </ul>
        <a href="#" className="button">GET PRO FOR $10</a>
      </div>
    </div>
    {/* End Pricing Block */}
  </div>
  </section>
{/* End of Pricing Tables */}
</div>
</section>
</main>





    {/* Footer */}
    <footer id="landing-footer" className="clearfix">
          <div className="row clearfix">
            <p id="copyright" className="col-2">Made with love by <a href="">Rim</a></p>
            <ul className="col-2 social-icons">
              <li>
                <a target="_blank" title="Facebook" href="https://www.facebook.com/username">
                  <i className="fa fa-facebook fa-1x"></i><span>Facebook</span>
                </a>
              </li>
              <li>
                <a target="_blank" title="Google+" href="http://google.com/+username">
                  <i className="fa fa-google-plus fa-1x"></i><span>Google+</span>
                </a>
              </li>
              <li>
                <a target="_blank" title="Twitter" href="http://www.twitter.com/username">
                  <i className="fa fa-twitter fa-1x"></i><span>Twitter</span>
                </a>
              </li>
              {/* Add more social icons as necessary */}
            </ul>
          </div>
        </footer>
      </div>

    </div>
  );
}


