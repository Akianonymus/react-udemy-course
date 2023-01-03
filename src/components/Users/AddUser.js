import { useRef, useState } from "react";

import Button from "../UI/Button";
import Card from "../UI/Card";
import ErrorModal from "../UI/ErrorModal";

import styles from "./AddUser.module.css";

const AddUser = ({ onAddUser }) => {
  const usernameRef = useRef();
  const ageRef = useRef();
  const [error, setError] = useState();

  const addUserHandler = (event) => {
    event.preventDefault();
    const username = usernameRef.current.value;
    const age = ageRef.current.value;

    if (username.trim().length === 0 || age.trim().length === 0) {
      setError({
        title: "Invalid input",
        message: "Please enter a valid name and age (non-empty values).",
      });
      return;
    }
    if (+age < 1) {
      setError({
        title: "Invalid age",
        message: "Please enter a valid age ( > 0).",
      });
      return;
    }
    onAddUser(username, age);
    usernameRef.current.value = "";
    ageRef.current.value = "";
  };

  const errorHandler = () => {
    setError(null);
  };

  return (
    <>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        />
      )}
      <Card className={styles.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">Username</label>
          <input id="username" type="text" ref={usernameRef} />
          <label htmlFor="age">Age (Years)</label>
          <input id="age" type="number" ref={ageRef} />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </>
  );
};

export default AddUser;
