import styles from "./sidebar.module.css";
import { navmain } from "../../Addressmaps/maps";
import { Link } from "react-router-dom";

export const Sidebar = () => {
  return (
    <>
      <div className={styles.mainScroller}>
        <h4>Category Menu</h4>
        <div className={styles.productmap}>
          {navmain.map((e) => (
            <Link to={e.to}>{e.title}</Link>
          ))}
        </div>
        <h4>Sort items</h4>
        <div className={styles.sorting}>
          <select>
            <option value="0">Select Sort:</option>
            <option value="1">Price Low to high</option>
            <option value="2">Price High to Low</option>
            <option value="3">Popularity</option>
            <option value="4">Discount</option>
          </select>
        </div>
        <h4>Filter Brands</h4>
        <div className={styles.filterbrands}>
          <input type="checkbox" id="checkbox 1" name="lessthen" />
          <label for="checkbox 1">less then 5000</label>
          <br></br>
          <input type="checkbox" id="checkbox 2" name="morethen" />
          <label for="checkbox 2">more then 5000</label>
          <br></br>
        </div>
        <h4>Discounted Items</h4>
        <div className={styles.discount}>
          <input type="checkbox" id="checkbox 3" name="discount" />
          <label for="checkbox 3">Discounted Items</label>
          <br></br>
        </div>
      </div>
    </>
  );
};
