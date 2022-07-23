import styles from "../styles/Contact.module.css";
import Circle from "../components/Circle";
const contact = () => {
  return (
    <div className={styles.container}>
      <Circle background="green" left="-20vh" top="-20vh" />
      <Circle background="yellow" right="-30vh" bottom="-60vh" />
      <h1 className={styles.title}>GET IN TOUCH</h1>
      <form className={styles.form}>
        <input className={styles.inputS} placeholder="username"></input>
        <input className={styles.inputS} placeholder="Phone"></input>
        <input className={styles.inputL} placeholder="Email"></input>
        <input className={styles.inputL} placeholder="Subject"></input>
        <textarea className={styles.textarea} placeholder="Message" rows={6} />
        <button className={styles.button}>SUBMIT</button>
      </form>
    </div>
  );
};

export default contact;
