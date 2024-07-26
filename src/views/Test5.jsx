import { useState } from "react";
import mockup from "../Mockup";
/* eslint-disable react/prop-types */
const Test5 = (props) => {
  const [open, setOpen] = useState(false);
  const [list, setList] = useState(mockup);
  const [popUp, setPopUp] = useState();
  const [listRef] = useState(list);
  const [selectType, setseLectType] = useState("all");
  const [selectStock, setSelectStock] = useState("all");
  const [search, setSearch] = useState();

  const renderlistdialog = () => {
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
                setPopUp(item);
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

  const renderchoicemenu = () => {
    return (
      <div className="choicemenu">
        <button
          className={selectType === "food" ? "isSelected" : ""}
          onClick={() => {
            const newlist = listRef.filter((item) => {
              const statusStock = item.stock > 0 ? "in stock" : "out of stock";
              return (
                item.type === "food" &&
                (statusStock === selectStock || selectStock === "all") &&
                item.name.toLowerCase().includes(search)
              );
            });
            setList(newlist);
            setseLectType("food");
          }}
        >
          Food
        </button>
        <button
          className={selectType === "dessert" ? "isSelected" : ""}
          onClick={() => {
            const newlist = listRef.filter((item) => {
              const statusStock = item.stock > 0 ? "in stock" : "out of stock";
              return (
                item.type === "dessert" &&
                (statusStock === selectStock || selectStock === "all") &&
                item.name.toLowerCase().includes(search)
              );
            });
            setList(newlist);
            setseLectType("dessert");
          }}
        >
          Dessert
        </button>
        <button
          className={selectType === "drink" ? "isSelected" : ""}
          onClick={() => {
            const newlist = listRef.filter((item) => {
              const statusStock = item.stock > 0 ? "in stock" : "out of stock";
              return (
                item.type === "drink" &&
                (statusStock === selectStock || selectStock === "all") &&
                item.name.toLowerCase().includes(search)
              );
            });
            setList(newlist);
            setseLectType("drink");
          }}
        >
          Drink
        </button>
        <button
          className={selectType === "all" ? "isSelected" : ""}
          onClick={() => {
            const newlist = listRef.filter((item) => {
              const statusStock = item.stock > 0 ? "in stock" : " out of stock";
              return (
                (statusStock === selectStock || selectStock === "all") &&
                item.name.toLowerCase().includes(search)
              );
            });
            setList(newlist);
            setseLectType("all");
          }}
        >
          All
        </button>
      </div>
    );
  };

  const rederchoicesold = () => {
    return (
      <div className="choicesold">
        <button
          className={selectStock === "in stock" ? "isSelected" : ""}
          onClick={() => {
            const newlist = listRef.filter((item) => {
              return (
                item.stock > 0 &&
                (item.type === selectType || selectType === "all") &&
                item.name.toLowerCase().includes(search)
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
                (item.type === selectType || selectType === "all") &&
                item.name.toLowerCase().includes(search)
              );
            });
            setList(newlist);
            setSelectStock("out of stock");
          }}
        >
          Out Of Stock
        </button>
      </div>
    );
  };

  const navbar = () => {
    return (
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
    );
  };

  const handleSearch = (e) => {
    const checkSearch = e.target.value.toLowerCase();
    const newlist = listRef.filter((item) => {
      const searchValue = item.name.toLowerCase().includes(checkSearch);
      const searchType = item.type === selectType || selectType === "all";
      const number = item.stock > 0 ? "in stock" : "out of stock";
      const searchStock = number === selectStock || selectStock === "all";
      return searchValue && searchType && searchStock;
    });
    setList(newlist);
    setSearch(checkSearch);
  };

  const rendercontainer = () => {
    return (
      popUp && (
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
      )
    );
  };

  const onClose = () => {
    setOpen(!open);
    setList(mockup);
    setSelectStock("all");
    setseLectType("all");
  };

  return (
    <div>
      {navbar()}
      {rendercontainer()}
      <dialog open={open}>
        <div className="card">
          <div className="navdialog">
            <div className="navdialog">
              <input
                type="text"
                placeholder="Search..."
                className="searchnav"
                onChange={handleSearch}
              />
            </div>
            <div>
              <i
                className="fa-solid fa-circle-xmark"
                onClick={() => {
                  onClose();
                }}
              ></i>
            </div>
          </div>
          <div className="listbox">
            <div className="choice">
              {renderchoicemenu()}
              {rederchoicesold()}
            </div>
            {renderlistdialog()}
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default Test5;
