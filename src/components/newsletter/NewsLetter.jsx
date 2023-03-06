import React from "react";

const NewsLetter = () => {
  return (
    <>
      {/* <!--Newsletter area start--> */}
      <div className="newsletter_area">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="newsletter_content">
                <h2>Our Newsletter</h2>
                <p>
                  Get E-mail updates about our latest shop and special offers.
                </p>
                <div className="subscribe_form">
                  <form id="mc-form" className="mc-form footer-newsletter">
                    <input
                      id="mc-email"
                      type="email"
                      autoComplete="off"
                      placeholder="Email address..."
                    />
                    <button id="mc-submit">Subscribe</button>
                  </form>
                  {/* <!-- mailchimp-alerts Start --> */}
                  <div className="mailchimp-alerts text-centre">
                    <div className="mailchimp-submitting"></div>
                    {/* <!-- mailchimp-submitting end --> */}
                    <div className="mailchimp-success"></div>
                    {/* <!-- mailchimp-success end --> */}
                    <div className="mailchimp-error"></div>
                    {/* <!-- mailchimp-error end --> */}
                  </div>
                  {/* <!-- mailchimp-alerts end --> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!--Newsletter area start--> */}
    </>
  );
};

export default NewsLetter;
