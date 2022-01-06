import React from "react";

const Footer = () => {
  return (
    <footer id="footer">
      <div className="cw">
        <div className="in-footer">
          <div className="copyright">
            <h4>
              Movie App by{" "}
              <a
                href="https://twitter.com/code_thi"
                target="_blank"
                rel="noopener noreferrer"
              >
                ThiCode
              </a>{" "}
              with{" "}
              <a
                href="https://developers.themoviedb.org/3/getting-started/introduction"
                target="_blank"
                rel="noopener noreferrer"
              >
                The Movie DB
              </a>
            </h4>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
