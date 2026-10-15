import type { MenuProps } from "../typedefs";
import Dish from "./Dish";
import styles from "./menu.module.css";

function Menu({ matretter }: MenuProps) {
  return (
    <ul className={styles.grid}>
      {matretter.map((matrett) => (
        <li key={matrett.id}>
          <Dish matrett={matrett} />
        </li>
      ))}
    </ul>
  );
}

export default Menu;
