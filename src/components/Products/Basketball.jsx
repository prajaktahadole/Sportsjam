

import { Sidebar } from "../Sidebar/sidebar";
import { Basketballs } from '../../configs/Basketball'
// import { Link } from "react-router-dom";
import './sports.css'
import { Footer } from "../footer/footer";
import { useEffect, useState } from "react";

export const Basketball = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const nData = Basketballs.map((e) => {
      return { ...e, isVisible: true };
    });
    setData(nData);
  }, []);

  const handleChange = (item) => {
    console.log("item:", item);
    setData(item);
  };
  return (
    <>
      <div className="main-container">
        {/* <h1>Sports</h1> */}
        <div className="product-sidebar">
          <Sidebar data={data} handleChange={handleChange}></Sidebar>
        </div>

        <div className="grid-format">
          {data.map((el) => {
            if (el.isVisible) {
              return (
                <>
                  <div>
                    {/* <Link to={`/books/${el.id}`} key={el.id}> */}
                    <div className="eachdiv">
                      <div className="productimgdiv">
                        <img src={el.img} />
                      </div>
                      <div className="producttitle">
                        <p key={el.id}>{el.title}</p>
                      </div>
                      <div className="price-button">
                        <div className="price-list">
                          <p className="productprice-linethrough" key={el.id}>
                            ${el.price}
                          </p>
                          <p className="productprice" key={el.id}>
                            ${el.mrp}
                          </p>
                          <p className="product-discount" key={el.id}>
                            {el.discount}
                          </p>
                        </div>
                        <div className="btn-cart">
                          <button>Cart</button>
                        </div>
                      </div>
                    </div>
                    {/* </Link> */}
                  </div>
                </>
              );
            }
          })}
        </div>
      </div>
      <Footer></Footer>
    </>
  );
};

