import useInput from "../hooks/use-input";

import styles from "./Form.module.css";

const validFormClasses = `${styles["form-control"]}`;
const invalidFormClasses = `${validFormClasses} ${styles["invalid"]}`;

const isNotEmpty = (value) => value.trim() !== "";
const isEmail = (value) => value.includes("@");

const Form = () => {
  const {
    value: firstNameValue,
    isValid: firstNameIsValid,
    hasError: firstNameHasError,
    changeHandler: firstNameChangeHandler,
    blurHandler: firstNameBlurHandler,
    reset: resetFirstName,
  } = useInput(isNotEmpty);

  const {
    value: lastNameValue,
    isValid: lastNameIsValid,
    hasError: lastNameHasError,
    changeHandler: lastNameChangeHandler,
    blurHandler: lastNameBlurHandler,
    reset: resetLastName,
  } = useInput(isNotEmpty);

  const {
    value: emailValue,
    isValid: emailIsValid,
    hasError: emailHasError,
    changeHandler: emailChangeHandler,
    blurHandler: emailBlurHandler,
    reset: resetEmail,
  } = useInput(isEmail);

  const formIsValid = firstNameIsValid && lastNameIsValid && emailIsValid;

  const submitHandler = (e) => {
    e.preventDefault();

    if (!formIsValid) {
      return;
    }

    console.log("Submitted!");
    console.log(firstNameValue, lastNameValue, emailValue);

    resetFirstName();
    resetLastName();
    resetEmail();
  };

  const firstNameClasses = firstNameHasError
    ? invalidFormClasses
    : validFormClasses;
  const lastNameClasses = lastNameHasError
    ? invalidFormClasses
    : validFormClasses;
  const emailClasses = emailHasError ? invalidFormClasses : validFormClasses;

  return (
    <form onSubmit={submitHandler} className={styles.form}>
      <div className={styles["control-group"]}>
        <div className={firstNameClasses}>
          <label htmlFor="firstname">First Name</label>
          <input
            type="text"
            id="firstname"
            value={firstNameValue}
            onChange={firstNameChangeHandler}
            onBlur={firstNameBlurHandler}
            placeholder="Enter First Name"
          />
          {firstNameHasError && (
            <p className={styles["error-text"]}>Please enter a first name.</p>
          )}
        </div>
        <div className={lastNameClasses}>
          <label htmlFor="lastname">Last Name</label>
          <input
            type="text"
            id="lastname"
            value={lastNameValue}
            onChange={lastNameChangeHandler}
            onBlur={lastNameBlurHandler}
            placeholder="Enter Last Name"
          />
          {lastNameHasError && (
            <p className={styles["error-text"]}>Please enter a last name.</p>
          )}
        </div>
      </div>
      <div className={emailClasses}>
        <label htmlFor="email">E-Mail Address</label>
        <input
          type="email"
          id="email"
          value={emailValue}
          onChange={emailChangeHandler}
          onBlur={emailBlurHandler}
          placeholder="Enter Email"
        />
        {emailHasError && (
          <p className={styles["error-text"]}>
            Please enter a valid email address.
          </p>
        )}
      </div>
      <div className={styles["form-actions"]}>
        <button className={styles.button} disabled={!formIsValid}>
          Submit
        </button>
      </div>
    </form>
  );
};

export default Form;
