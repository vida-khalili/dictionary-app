import React from "react";
import "../styles/Footer.css";
export default function Footer() {
  return (
    <div className="Footer">
      This project was coded by{" "}
      <a
        href="https://www.linkedin.com/in/vida-khalili-bbb500a4/"
        target="_blank"
        rel="noopener noreferrer"
      >
        Vida Khalili{" "}
      </a>
      and is open-sourced on{" "}
      <a
        href="https://github.com/vida-khalili/dictionary-app"
        target="_blank"
        rel="noopener noreferrer"
      >
        GitHub{" "}
      </a>
      and hosted on{" "}
      <a
        href="https://magnificent-basbousa-67f14d.netlify.app/"
        target="_blank"
        rel="noopener noreferrer"
      >
        Netlify
      </a>
    </div>
  );
}
