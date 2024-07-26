import { useState } from "react";
import mockup from "../Mockup";
/* eslint-disable react/prop-types */
const Test4 = (props) => {
  const [list, setList] = useState(mockup);
  const [listRef] = useState(list);
  const [open, setOpen] = useState(false);
  const [popUp, setPopUp] = useState();
  const [selectStock, setSelectStock] = useState("all");
  const [selectType, setSelectType] = useState("all");

  const onClose = () => {
    setList(mockup);
    setSelectType("all");
    setSelectType("all");
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
                setOpen(!open);
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
                  className={selectType === "food" ? "isSelected" : ""}
                  onClick={() => {
                    const newlist = listRef.filter((item) => {
                      const statusStock =
                        item.stock > 0 ? "in stock" : "out of stock";
                      return (
                        item.type === "food" &&
                        (statusStock === selectStock || selectStock === "all")
                      );
                    });
                    setList(newlist);
                    setSelectType("food");
                  }}
                >
                  Food
                </button>
                <button
                  className={selectType === "dessert" ? "isSelected" : ""}
                  onClick={() => {
                    const newlist = listRef.filter((item) => {
                      const statusStock =
                        item.stock > 0 ? "in stock" : "out of stock";
                      return (
                        item.type === "dessert" &&
                        (statusStock === selectStock || selectStock === "all")
                      );
                    });
                    setList(newlist);
                    setSelectType("dessert");
                  }}
                >
                  Dessert
                </button>
                <button
                  className={selectType === "drink" ? "isSelected" : ""}
                  onClick={() => {
                    const newlist = listRef.filter((item) => {
                      const statusStock =
                        item.stock > 0 ? "in stock" : "out of stock";
                      return (
                        item.type === "drink" &&
                        (statusStock === selectStock || selectStock === "all")
                      );
                    });
                    setList(newlist);
                    setSelectType("drink");
                  }}
                >
                  Drink
                </button>
                <button
                  className={selectType === "all" ? "isSelected" : ""}
                  onClick={() => {
                    const newlist = listRef.filter((item) => {
                      const statusStock =
                        item.stock > 0 ? "in stock" : "out of stock";
                      return (
                        statusStock === selectStock || selectStock === "all"
                      );
                    });
                    setList(newlist);
                    setSelectType("all");
                  }}
                >
                  All
                </button>
              </div>
              <div className="choicesold">
                <button
                  className={selectStock === "in stock" ? "isSelected" : ""}
                  onClick={() => {
                    const newlist = listRef.filter((item) => {
                      return (
                        item.stock > 0 &&
                        (item.type === selectType || selectType === "all")
                      );
                    });
                    setList(newlist);
                    setSelectStock("in stock");
                  }}
                >
                  In Stock
                </button>
                <button
                  className={selectStock === "out of stock" ? "isSelected" : ""}
                  onClick={() => {
                    const newlist = listRef.filter((item) => {
                      return (
                        item.stock <= 0 &&
                        (item.type === selectType || selectType === "all")
                      );
                    });
                    setList(newlist);
                    setSelectStock("out of stock");
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
                      setPopUp(item);
                      setOpen(!open);
                    }}
                  >
                    <div className="listdialogcard">
                      <img
                        className="listdialogimg"
                        src={item.img}
                        alt={item.name}
                      />
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

export default Test4;
