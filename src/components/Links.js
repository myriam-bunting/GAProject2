import React from "react";

function Links() {
  return (
    <div className="pageframe">
      <p>
        Here are just a handful of links to start you on making your projects
        accessible. There to help you plan the development of your inclusive
        applications. <br />
        Below are just a few:
      </p>
      <ul className="links">
        <li>
          <a
            href="https://www.w3.org/WAI/standards-guidelines/wcag/glance/"
            aria-hidden="true"
          >
            Standards at a glance
          </a>
        </li>
        <li>
          <a
            href="https://blog.ai-media.tv/blog/6-awesome-accessibility-apps"
            aria-hidden="true"
          >
            App Examples
          </a>
        </li>
        <li>
          <a
            href="https://rapidapi.com/blog/make-tech-more-accessible-with-these-apis/"
            aria-hidden="true"
          >
            Accessibility APIs
          </a>
        </li>
        <li>
          <a
            href="https://geekflare.com/test-web-accessibility/"
            aria-hidden="true"
          >
            Web monitor and Testing Tools
          </a>
        </li>
        <li>
          <a
            href="https://medium.com/envoy-design/how-to-design-an-accessible-color-scheme-4a13ca12c92b"
            aria-hidden="true"
          >
            Notes on Colour Schemes
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Links;
