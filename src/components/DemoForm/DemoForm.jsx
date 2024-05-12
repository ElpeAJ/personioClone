import React from "react";
import style from "./DemoForm.module.css";
import InputField from "../InputFields/InputFields";
import Button from "../Button/Button";
import { GoQuestion } from "react-icons/go";

export default function DemoForm() {
  return (
    <div className={style.wholeform}>
      <h2>Book your free demo</h2>
      <form className={style.form}>
        <div className={style.name}>
          <InputField type="text" name="First Name*" />
          <InputField type="text" name="Last Name*" />
        </div>
        <InputField type="text" name="Job Title*" />
        <InputField type="text" name="Company Name*" />
        <InputField type="text" name="Company Name*" />
        <InputField type="text" name="Company Name*" />
        <InputField type="email" name="Business Email*" />
        <InputField type="text" name="How did you first learn about us?*" />
        <div className={style.number}>
          <InputField type="text" name="Code" />
          <InputField type="text" name="Mobile number*" />
        </div>
        <p className={style.minimize}>
          <GoQuestion />
          <span>
            We will only contact you to book an appointment that works for you
            and understand your specific requirements
          </span>
          .
        </p>
        <p className={style.minimize}>
          *For the best experience possible, we ask that you provide all of the
          required contact details abobe.
        </p>
        <Button type="submit" name="Book your free demo" />
        <p className={style.minimize}>
          By submitting this form I confirm that I have read the{" "}
          <a href="https://">privacy policy</a> and agree to the processing of
          my personal data by Personio for the stated purposes. In case of
          consent, I can revoke my consent to this processing at any time.
        </p>
      </form>
    </div>
  );
}
