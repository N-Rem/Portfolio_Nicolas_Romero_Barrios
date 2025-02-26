import React from "react";
import '/src/component/linkSocial/linkSocial.css'

const LinkSocial = ({ size, hero }) => {
  return (
    <div className={`flex-container-row content-social ${size}`}>
      {hero ? (
        <div className="icons">
          <a
            href="https://github.com/N-Rem"
            target="_blank"
            aria-label="GitHub"
          >
            <img src="/icons/social/github-icon.svg" alt="git-hub" />
          </a>
        </div>
      ) : (
        <div className="icons">
          <a
            href="https://nicolasromero.barrios@gmail.com"
            target="_blank"
            aria-label="e-mail"
          >
            <img src="/icons/social/email-icon.svg" alt="mail" />
          </a>
        </div>
      )}
      <div className="icons">
        <a href="https://linkedin.com" target="_blank" aria-label="LinkedIn">
          <img src="/icons/social/linkedin-icon.svg" alt="LinkedIn" />
        </a>
      </div>
    </div>
  );
};

export default LinkSocial;
