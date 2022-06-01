import React, { useState } from "react";
import styles from "../styles/Contact.module.css";
function Contact() {
  const [name, setName] = useState("");
  const [desc, setDesc] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    const data = { phone, name, email, desc };
    fetch("http://localhost:3000/api/postcontact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.text())
      .then((data) => {
        setPhone("");
        setEmail("");
        setName("");
        setDesc("");
      })
      .catch((error) => {
        console.error(error);
      });
  };
  const handleChange = (e) => {
    if (e.target.name == "phone") {
      setPhone(e.target.value);
    } else if (e.target.name == "email") {
      setEmail(e.target.value);
    } else if (e.target.name == "desc") {
      setDesc(e.target.value);
    } else if (e.target.name == "name") {
      setName(e.target.value);
    }
  };
  return (
    <div className="container">
      <h1>Contact Us</h1>
      <div>
        <form>
          <div className={styles.formGroup}>
            <label htmlFor="name" className={styles.label}>
              Name
            </label>
            <input
              type="text"
              className={styles.formControl}
              id="name"
              name="name"
              value={name}
              onChange={handleChange}
              aria-describedby="emailHelp"
              placeholder="Enter Name"
              required
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="email" className={styles.label}>
              Email
            </label>
            <input
              type="email"
              className={styles.formControl}
              id="email"
              name="email"
              onChange={handleChange}
              aria-describedby="emailHelp"
              placeholder="Enter email"
              value={email}
              required
            />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="phone" className={styles.label}>
              Phone
            </label>
            <input
              type="phone"
              className={styles.formControl}
              id="phone"
              onChange={handleChange}
              name="phone"
              placeholder="Phone"
              value={phone}
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="desc" className={styles.label}>
              Your concern
            </label>
            <textarea
              className={styles.formControl}
              id="desc"
              placeholder="write your concern here "
              name="desc"
              rows="3"
              value={desc}
              onChange={handleChange}
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className={styles.submit}
            onClick={handleSubmit}
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
