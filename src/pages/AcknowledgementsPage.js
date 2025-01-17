import React from "react";
import Styles from "../styles/AcknowledgementsPage.module.css";

function AcknowledgementsPage() {
  return (
    <div className={Styles.acknowledgements}>
      <div className="container">
        <h1 className={Styles.title}>Acknowledgements</h1>
        <p className={Styles.text}>
          We would like to thank all contributors, partners, and supporters who
          made this project possible.
        </p>
        <h2 className={Styles.subTitle}>Special Thanks</h2>
        <p className={Styles.text}>
          A heartfelt thanks to our team members and collaborators for their
          dedication and hard work.
        </p>
      </div>
    </div>
  );
}

export default AcknowledgementsPage;
