import { useState } from "react";
import mockup from "../Mockup";
/* eslint-disable react/prop-types */
const Test2 = (props) => {
  const [list, setList] = useState(mockup);
  const [listRef] = useState(list);
  const [open, setOpen] = useState(false);
  const [popUp, setPopUp] = useState();
  const [selectedStock, setSelectedStock] = useState("all");
  const [selectedType, setSelectedType] = useState("all");
  const onClose = () => {
    setList(mockup);
    setSelectedStock("all");
    setSelectedType("all");
  };
  return (
    <div>
      <div className="header">
        <img className="logo" src="/src/image/LOGO.jpg" alt="LOGO" />
        <div className="number">
          <p>{props.tab}</p>
        </div>
        <ul className="navcart">
          <li>
            <i
              className="fa-solid fa-magnifying-glass"
              onClick={() => {
                return setOpen(!open);
              }}
            ></i>
          </li>
          <li>
            <i className="fa-solid fa-cart-shopping"></i>
          </li>
        </ul>
      </div>
      <div className="Container">
        {popUp && (
          <div className="warp-container">
            <div className="listcontainercard">
              <img className="listcontainerimg" src={popUp.img} alt="image" />
              <div className="listcontainercardtext">
                <div className="listcontainercardtextname">
                  <p>{popUp.name}</p>
                  <p>
                    {Array.from({ length: 5 }).map((_, index) => {
                      return index < popUp.score ? (
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
                  <h2>{popUp.price}</h2>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
      <dialog open={open}>
        <div className="card">
          <div className="navdialog">
            <div className="navdialog">
              <input
                type="text"
                placeholder="Search..."
                className="searchnav"
              />
            </div>
            <div>
              <i
                className="fa-solid fa-circle-xmark"
                onClick={() => {
                  setOpen(!open);
                  onClose();
                }}
              ></i>
            </div>
          </div>
          <div className="listbox">
            <div className="choice">
              <div className="choicemenu">
                <button
                  className={selectedType === "food" ? "isSelected" : "button"}
                  onClick={() => {
                    const newlist = listRef.filter((item) => {
                      const statusStock =
                        item.stock > 0 ? "in stock" : "out of stock";
                      return (
                        item.type === "food" &&
                        (statusStock === selectedStock ||
                          selectedStock === "all")
                      );
                    });
                    setList(newlist);
                    setSelectedType("food");
                  }}
                >
                  Food
                </button>
                <button
                  className={
                    selectedType === "dessert" ? "isSelected" : "button"
                  }
                  onClick={() => {
                    const newlist = listRef.filter((item) => {
                      const statusStock =
                        item.stock > 0 ? "in stock" : "out of stock";
                      return (
                        item.type === "dessert" &&
                        (statusStock === selectedStock ||
                          selectedStock === "all")
                      );
                    });
                    setList(newlist);
                    setSelectedType("dessert");
                  }}
                >
                  Dessert
                </button>
                <button
                  className={selectedType === "drink" ? "isSelected" : "button"}
                  onClick={() => {
                    const newlist = listRef.filter((item) => {
                      const statusStock =
                        item.stock > 0 ? "in stock" : "out of stock";
                      return (
                        item.type === "drink" &&
                        (statusStock === selectedStock ||
                          selectedStock === "all")
                      );
                    });
                    setList(newlist);
                    setSelectedType("drink");
                  }}
                >
                  Drink
                </button>
                <button
                  className={selectedType === "all" ? "isSelected" : "button"}
                  onClick={() => {
                    const newlist = listRef.filter((item) => {
                      const statusStock =
                        item.stock > 0 ? "in stock" : "out of stock";
                      return (
                        statusStock === selectedStock || selectedStock === "all"
                      );
                    });
                    setList(newlist);
                    setSelectedType("all");
                  }}
                >
                  All
                </button>
              </div>
              <div className="choicesold">
                <button
                  className={
                    selectedStock === "in stock" ? "isSelected" : "button"
                  }
                  onClick={() => {
                    const newlist = listRef.filter((item) => {
                      return (
                        item.stock > 0 &&
                        (item.type === selectedType || selectedType === "all")
                      );
                    });
                    setList(newlist);
                    setSelectedStock("in stock");
                  }}
                >
                  In Stock
                </button>
                <button
                  className={
                    selectedStock === "out of stock" ? "isSelected" : "button"
                  }
                  onClick={() => {
                    const newlist = listRef.filter((item) => {
                      return (
                        item.stock <= 0 &&
                        (item.type === selectedType || selectedType === "all")
                      );
                    });
                    setList(newlist);
                    setSelectedStock("out of stock");
                  }}
                >
                  Out Of Stock
                </button>
              </div>
            </div>
            <div className="listdialog">
              {list.map((item, index) => {
                return (
                  <div
                    key={index}
                    className="warp-listdialog"
                    onClick={() => {
                      setOpen(!open);
                      setPopUp(item);
                    }}
                  >
                    <div className="listdialogcard">
                      <img
                        src={item.img}
                        alt={item.name}
                        className="listdialogimg"
                      />
                      <div className="listdialogcardtext">
                        <div className="listdialogcardtextname">
                          <p>{item.name}</p>
                          <p>
                            {Array.from({ length: 5 }).map(() => {
                              return index < item.score ? (
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
                        <div className="istdialogcardtextprice">
                          <h2>{item.price}</h2>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default Test2;
