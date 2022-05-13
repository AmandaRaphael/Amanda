import React from 'react'
import H1 from './H1'
import Menu from './Menu'

const Header = () => {
    return (
      <header>
        <div class="container">
          <div class="header-inner">
            <H1 />
            {/* <Menu /> */}
            <div>
              <a
                class="meetingLink"
                href="https://calendly.com/amanlin09/30min"
                rel="noreferrer"
                target="_blank"
              >
                Schedule a meeting
              </a>
            </div>
          </div>
        </div>
      </header>
    );
}
export default Header
