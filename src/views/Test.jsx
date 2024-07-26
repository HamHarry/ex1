/* eslint-disable react/prop-types */

import { useState } from "react";
import mockup from "../Mockup";

const Test = (props) => {
  const [open, setOpen] = useState(false);
  const [list, setList] = useState(mockup);
  const [menu, setMenu] = useState();
  const [listRef] = useState(mockup);
  const [selectedType, setSelectedType] = useState("all");
  const [selectedStock, setSelectedStock] = useState("all");

  // search === pad thai
  const [search, setSearch] = useState();

  const onClose = () => {
    setList(mockup);
    setSelectedType("all");
    setSelectedStock("all");
  };

  const renderListMenu = () => {
    return (
      <div className="listdialog">
        {list.map((item, index) => {
          const { img, name, price, score } = item;
          return (
            <div
              key={index}
              className="warp-listdialog"
              onClick={() => {
                setOpen(!open);
                setMenu(item);
              }}
            >
              <div className="listdialogcard">
                <img className="listdialogimg" src={img} alt="image" />
                <div className="listdialogcardtext">
                  <div className="listdialogcardtextname">
                    <p>{name}</p>
                    <p>
                      {Array.from({ length: 5 }).map((_, index) => {
                        return index < score ? (
                          <div key={index}>
                            <i className="fa-solid fa-star"></i>
                          </div>
                        ) : (
                          <div key={index}>
                            <i className="fa-regular fa-star"></i>
                          </div>
                        );
                      })}
                    </p>
                  </div>
                  <div className="listdialogcardtextprice">
                    <h2>{price}</h2>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    );
  };

  const renderChoiceMenu = () => {
    return (
      <div className="choicemenu">
        <ul>
          <li>
            <button
              className={selectedType === "food" ? "isSelected" : "button"}
              onClick={() => {
                const newlist = listRef.filter((item) => {
                  const statusStock =
                    item.stock > 0 ? "in stock" : "out of stock";
                  return (
                    item.type === "food" &&
                    (statusStock === selectedStock ||
                      selectedStock === "all") &&
                    item.name.toLowerCase().includes(search)
                  );
                });
                setList(newlist);
                setSelectedType("food");
              }}
            >
              Food
            </button>
          </li>
          <li>
            <button
              className={selectedType === "dessert" ? "isSelected" : "button"}
              onClick={() => {
                // [1,2,3]
                // item = 3 filter 3
                // item === 1 เงื่อนไง ถ้าเป็นจริง ให้ return item ออกไป
                // [1]
                const newlist = listRef.filter((item) => {
                  const statusStock =
                    item.stock > 0 ? "in stock" : "out of stock";
                  return (
                    item.type === "dessert" &&
                    (statusStock === selectedStock ||
                      selectedStock === "all") &&
                    item.name.toLowerCase().includes(search)
                  );
                });
                setList(newlist);
                setSelectedType("dessert");
              }}
            >
              Dessert
            </button>
          </li>
          <li>
            <button
              className={selectedType === "drink" ? "isSelected" : "button"}
              onClick={() => {
                const newlist = listRef.filter((item) => {
                  const statusStock =
                    item.stock > 0 ? "in stock" : "out of stock";
                  return (
                    item.type === "drink" &&
                    (statusStock === selectedStock ||
                      selectedStock === "all") &&
                    item.name.toLowerCase().includes(search)
                  );
                });
                setList(newlist);
                setSelectedType("drink");
              }}
            >
              Drink
            </button>
          </li>
          <li>
            <button
              className={selectedType === "all" ? "isSelected" : "button"}
              onClick={() => {
                const newlist = listRef.filter((item) => {
                  const statusStock =
                    item.stock > 0 ? "in stock" : "out of stock";
                  return (
                    (statusStock === selectedStock ||
                      selectedStock === "all") &&
                    item.name.toLowerCase().includes(search)
                  );
                });
                setList(newlist);
                setSelectedType("all");
              }}
            >
              All
            </button>
          </li>
        </ul>
      </div>
    );
  };

  const renderChoiceSold = () => {
    return (
      <div className="choicesold">
        <ul>
          <li>
            <button
              className={selectedStock === "in stock" ? "isSelected" : "button"}
              onClick={() => {
                const newlist = listRef.filter((item) => {
                  return (
                    item.stock > 0 &&
                    (item.type === selectedType || selectedType === "all") &&
                    item.name.toLowerCase().includes(search)
                  );
                });
                setList(newlist);
                setSelectedStock("in stock");
              }}
            >
              In Stock
            </button>
          </li>
          <li>
            <button
              className={
                selectedStock === "out of stock" ? "isSelected" : "button"
              }
              onClick={() => {
                const newlist = listRef.filter(
                  (item) =>
                    item.stock <= 0 &&
                    (item.type === selectedType || selectedType === "all") &&
                    item.name.toLowerCase().includes(search)
                );
                setList(newlist);
                setSelectedStock("out of stock");
              }}
            >
              Out Of Stock
            </button>
          </li>
        </ul>
      </div>
    );
  };

  const renderContent = () => {
    return (
      <div className="warp-container">
        <div className="listcontainercard">
          <img className="listcontainerimg" src={menu.img} alt="image" />
          <div className="listcontainercardtext">
            <div className="listcontainercardtextname">
              <p>{menu.name}</p>
              <p>
                {Array.from({ length: 5 }).map((_, index) => {
                  return index < menu.score ? (
                    <div key={index}>
                      <i className="fa-solid fa-star"></i>
                    </div>
                  ) : (
                    <div key={index}>
                      <i className="fa-regular fa-star"></i>
                    </div>
                  );
                })}
              </p>
            </div>
            <div className="listcontainercardtextprice">
              <h2>{menu.price}</h2>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const NavBar = () => {
    return (
      <div className="header">
        <img className="logo" src="/src/image/LOGO.jpg" alt="LOGO" />
        <div className="number">
          <p>{props.tab}</p>
        </div>
        <ul className="navcart">
          <li>
            {/* ค้นหา 1 */}
            <i
              className="fa-solid fa-magnifying-glass"
              onClick={() => setOpen(!open)}
            ></i>
          </li>
          <li>
            <i className="fa-solid fa-cart-shopping"></i>
          </li>
        </ul>
      </div>
    );
  };

  const handChange = (e) => {
    // กดหนด target ก่อน จากนั้น filter หาข้อมูลที่ต้องการ แล้ว return
    const searchValue = e.target.value.toLowerCase();
    const newlist = listRef.filter((item) => {
      const { name, price, type, stock: stockValue } = item;

      const checkName = name.toLowerCase().includes(searchValue);
      const checkPrice = String(price).includes(searchValue);
      const checkType = type === selectedType || selectedType === "all";
      const stock = stockValue > 0 ? "in stock" : "out of stock";
      const checkStock = stock === selectedStock || selectedStock === "all";
      return (checkName || checkPrice) && checkType && checkStock;
    });

    console.log(newlist);
    setList(newlist);
    // searchValue === pad thai
    setSearch(searchValue);
  };

  return (
    <div>
      <NavBar />
      <div className="container">{menu && renderContent()}</div>
      {/* Dialog 2 */}
      <dialog open={open}>
        <div className="card">
          <div className="navdialog">
            <input
              type="text"
              placeholder="Seach..."
              className="searchnav"
              onChange={handChange}
            />
            <i
              onClick={() => {
                setOpen(!open);
                onClose();
              }}
              className="fa-solid fa-circle-xmark"
            ></i>
          </div>
          <div className="listbox">
            <div className="choice">
              {renderChoiceMenu()}
              {renderChoiceSold()}
            </div>
            {renderListMenu()}
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default Test;
