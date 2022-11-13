import Link from "next/link";
import styles from "../../styles/Home.module.css";

const Navigation = (props) => {
  return (
    <div>
      <Link href={`/`} className={styles.link}>
        Home
      </Link>
      <Link href={`/user`} className={styles.link}>
        User
      </Link>
      <Link href={`/post`} className={styles.link}>
        Post
      </Link>
    </div>
  );
};

export default Navigation;
