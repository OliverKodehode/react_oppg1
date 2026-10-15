export type Dish = {
  id: number;
  tittel: string;
  pris: string;
  ingredienser: string;
  kategori: string;
};

export type MenuProps = {
  matretter: Dish[];
};

export type DishProps = {
  matrett: Dish;
};
