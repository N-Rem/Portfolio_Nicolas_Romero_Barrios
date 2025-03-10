import React from "react";
import "/src/component/linkSocial/linkSocial.css";
import PropTypes from "prop-types";

const LinkSocial = ({ size, isForhero }) => {
  return (
    <div className={`flex-container-row content-social ${size}`}>
      {isForhero ? (
        <div className={isForhero ? `flex-container-row icons big` : `icons`}>
          <a
            href="https://github.com/N-Rem"
            target="_blank"
            aria-label="GitHub"
          >
            <img src="/icons/social/github-icon.svg" alt="git-hub" />
          </a>

          <a
            href="https://codepen.io/kfduagbs-the-reactor/pens/showcase"
            target="_blank"
            aria-label="codePen"
          >
            <img src="/icons/social/codePen-icon.svg" alt="CodePen" />
          </a>
        </div>
      ) : (
        <div className="email">
          <a
            href="https://nicolasromero.barrios@gmail.com"
            target="_blank"
            aria-label="e-mail"
          >
            <img src="/icons/social/email-icon.svg" alt="mail" />
          </a>

          
        </div>
      )}
      <div className={isForhero ? `icons big` : `icons`}>
        <a href="https://linkedin.com" target="_blank" aria-label="LinkedIn">
          <img src="/icons/social/linkedin-icon.svg" alt="LinkedIn" />
        </a>
      </div>
    </div>
  );
};

LinkSocial.propTypes = {
  isForhero: PropTypes.bool,
};

export default LinkSocial;
