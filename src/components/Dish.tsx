import type { DishProps } from "../typedefs";
import styles from "./Dish.module.css";

function Dish({ matrett }: DishProps) {
  return (
    <article className={styles.card}>
      <h2>{matrett.tittel}</h2>
      <p className={styles.price}>{matrett.pris}</p>
      <p>{matrett.ingredienser}</p>
      <p className={styles.category}>{matrett.kategori}</p>
    </article>
  );
}

export default Dish;
