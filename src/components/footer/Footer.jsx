import React from "react";
import FooterLeft from "./FooterLeft";
import FooterRight from "./FooterRight";

const Footer = () => {
  return (
    <footer>
      <div class="container">
              <div class="footer-inner">
                  <FooterLeft />
                  <FooterRight/>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
