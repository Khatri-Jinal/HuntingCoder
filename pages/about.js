import React from "react";
import styles from "../styles/About.module.css";

function About() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>About Hunting Coder</h1>
      <h2>Introduction</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </p>
      <h2>Services Offered</h2>
      <p>
        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
        dolore eu fugiat nulla pariatur
      </p>
      <p>We offer below services</p>
      <ul>
        <li>Service 1</li>
        <li>Service 2</li>
        <li>Service 3</li>
        <li>Service 4</li>
      </ul>
      <h2>Contact Us</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat
      </p>
    </div>
  );
}

export default About;
