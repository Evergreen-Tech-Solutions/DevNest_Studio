import React from "react";
import Styles from "../styles/FAQPage.module.css";

function FAQPage() {
  return (
    <div className={Styles.faq}>
      <div className="container">
        <h1 className={Styles.title}>Frequently Asked Questions</h1>
        <h2 className={Styles.subTitle}>What services do you offer?</h2>
        <p className={Styles.text}>
          We offer custom web development, mobile app development, AI
          integration, and more.
        </p>
        <h2 className={Styles.subTitle}>How can I contact you?</h2>
        <p className={Styles.text}>
          You can reach us via the contact form on our website or email us at
          support@devneststudio.com.
        </p>
      </div>
    </div>
  );
}

export default FAQPage;
