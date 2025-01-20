import React from "react";
import Styles from "../styles/PrivacyPolicyPage.module.css";

function PrivacyPolicyPage() {
  return (
    <div className={Styles.privacyPolicy}>
      <div className="container">
        <h1 className={Styles.title}>Privacy Policy</h1>
        <p className={Styles.text}>
          Your privacy is important to us. This privacy policy outlines the
          types of personal information we collect, how it is used, and the
          measures we take to protect your information.
        </p>
        <h2 className={Styles.subTitle}>Information We Collect</h2>
        <p className={Styles.text}>
          We may collect personal information such as your name, email address,
          and any other details you provide when contacting us or using our
          services.
        </p>
        <h2 className={Styles.subTitle}>How We Use Your Information</h2>
        <p className={Styles.text}>
          Your information is used to provide services, respond to inquiries,
          and improve our website functionality.
        </p>
        <h2 className={Styles.subTitle}>Contact Us</h2>
        <p className={Styles.text}>
          If you have any questions regarding our privacy policy, feel free to
          contact us at support@devneststudio.com.
        </p>
      </div>
    </div>
  );
}

export default PrivacyPolicyPage;
