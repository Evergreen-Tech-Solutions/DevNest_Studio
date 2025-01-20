import React from "react";
import Styles from "../styles/TermsAndConditionsPage.module.css";

function TermsAndConditionsPage() {
  return (
    <div className={Styles.terms}>
      <div className="container">
        <h1 className={Styles.title}>Terms and Conditions</h1>
        <p className={Styles.text}>
          Welcome to DevNest Studio. By accessing our website, you agree to be
          bound by the following terms and conditions.
        </p>
        <h2 className={Styles.subTitle}>Use of Our Website</h2>
        <p className={Styles.text}>
          You agree to use our website for lawful purposes and not to engage in
          any activities that may harm our services or users.
        </p>
        <h2 className={Styles.subTitle}>Intellectual Property</h2>
        <p className={Styles.text}>
          All content on our website, including text, graphics, and logos, is
          owned by DevNest Studio and is protected by copyright laws.
        </p>
        <h2 className={Styles.subTitle}>Contact Us</h2>
        <p className={Styles.text}>
          For questions about these terms, contact us at
          support@devneststudio.com.
        </p>
      </div>
    </div>
  );
}

export default TermsAndConditionsPage;
