import styles from "../styles/Intro.module.css";
import Image from "next/image";
import Circle from "./Circle";
const Intro = () => {
  return (
    <div className={styles.container}>
      <Circle backgroundColor="yellow" top="-50vh" left="-50vh" />
      <Circle backgroundColor="yellow" right="-40vh" />
      <div className={styles.card}>
        <h1 className={styles.title}>
          <span className={styles.brand}>AVOCADO</span> DIGITAL PRODUCT AGENCY
        </h1>
        <p className={styles.desc}>
          Create live segments and target the right people for messages based on
          their behaviors.
        </p>
        <button className={styles.button}>DISCOVER</button>
      </div>
      <div className={styles.card}>
        <Image
          src="/img/Avocado.png"
          alt="avocado"
          width="100%"
          layout="fill"
          objectFit="cover"
        />
      </div>
    </div>
  );
};

export default Intro;
