import Logo from "@/assets/logo.png";
import styles from "@/assets/styles/Home.module.css";
import HelloWorld from "@/components/HelloWorld/HelloWorld";

export default function HomePage() {
  return (
    <main className={styles.main}>
      <img className={styles.logo} alt="React logo" width="400px" src={Logo} />
      <HelloWorld msg="Hello React + TypeScript + Vite Template" />
    </main>
  );
}
