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

  const onClose = () => {
    setList(mockup);
    setSelectedType("all");
    setSelectedStock("all");
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
              onClick={() => setOpen(!open)}
            ></i>
          </li>
          <li>
            <i className="fa-solid fa-cart-shopping"></i>
          </li>
        </ul>
      </div>
      <div className="container">
        {menu && (
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
        )}
      </div>
      <dialog open={open}>
        <div className="card">
          <div className="navdialog">
            <input type="text" placeholder="Seach..." className="searchnav" />
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
              <div className="choicemenu">
                <ul>
                  <li>
                    <button
                      className={
                        selectedType === "food" ? "isSelected" : "button"
                      }
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
                  </li>
                  <li>
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
                  </li>
                  <li>
                    <button
                      className={
                        selectedType === "drink" ? "isSelected" : "button"
                      }
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
                  </li>
                  <li>
                    <button
                      className={
                        selectedType === "all" ? "isSelected" : "button"
                      }
                      onClick={() => {
                        const newlist = listRef.filter((item) => {
                          const statusStock =
                            item.stock > 0 ? "in stock" : "out of stock";
                          return (
                            statusStock === selectedStock ||
                            selectedStock === "all"
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
              <div className="choicesold">
                <ul>
                  <li>
                    <button
                      className={
                        selectedStock === "in stock" ? "isSelected" : "button"
                      }
                      onClick={() => {
                        const newlist = listRef.filter((item) => {
                          return (
                            item.stock > 0 &&
                            (item.type === selectedType ||
                              selectedType === "all")
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
                        selectedStock === "out of stock"
                          ? "isSelected"
                          : "button"
                      }
                      onClick={() => {
                        const newlist = listRef.filter(
                          (item) =>
                            item.stock <= 0 &&
                            (item.type === selectedType ||
                              selectedType === "all")
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
            </div>
            <div className="listdialog">
              {list.map((item, index) => (
                <div
                  key={index}
                  className="warp-listdialog"
                  onClick={() => {
                    setOpen(!open);
                    setMenu(item);
                  }}
                >
                  <div className="listdialogcard">
                    <img className="listdialogimg" src={item.img} alt="image" />
                    <div className="listdialogcardtext">
                      <div className="listdialogcardtextname">
                        <p>{item.name}</p>
                        <p>
                          {Array.from({ length: 5 }).map((_, index) => {
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
                      <div className="listdialogcardtextprice">
                        <h2>{item.price}</h2>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default Test;
