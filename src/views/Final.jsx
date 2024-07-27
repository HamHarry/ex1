import { useState } from "react";
import mockup from "../Mockup";

/* eslint-disable react/prop-types */
const Final = (props) => {
  const [open, setOpen] = useState(false);
  const [list, setList] = useState(mockup);
  const [listRef] = useState(list);
  const [popUp, setPopUp] = useState();
  const [selectedType, setSelectedType] = useState("all");
  const [selectedStock, setSelectedStock] = useState("all");
  const [searchlist, setSearchlist] = useState("");

  const renderListCard = () => {
    return (
      <div className="List-Card">
        {list.map((item, index) => {
          const { name, img, price, score } = item;
          return (
            <div
              key={index}
              className="Warp-Card"
              onClick={() => {
                setOpen(!open);
                setPopUp(item);
              }}
            >
              <img src={img} alt={name} className="Img-Card" />
              <div className="List-Card-Text">
                <div className="Text-Name">
                  <p>{name}</p>
                  <p className="Star">
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
                <div className="Text-Price">
                  <h2>{price}</h2>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    );
  };

  const renderChoiseMenu = () => {
    return (
      <div className="Select-List-Type">
        <button
          onClick={() => {
            const newlist = listRef.filter((item) => {
              const statusStock = item.stock > 0 ? "in stock" : "out of stock";
              return (
                item.type === "food" &&
                (statusStock === selectedStock || selectedStock === "all") &&
                item.name.toLowerCase().includes(searchlist)
              );
            });
            setList(newlist);
            setSelectedType("food");
          }}
        >
          food
        </button>
        <button
          onClick={() => {
            const newlist = listRef.filter((item) => {
              const statusStock = item.stock > 0 ? "in stock" : "out of stock";
              return (
                item.type === "dessert" &&
                (statusStock === selectedStock || selectedStock === "all") &&
                item.name.toLowerCase().includes(searchlist)
              );
            });
            setList(newlist);
            setSelectedType("dessert");
          }}
        >
          dessert
        </button>
        <button
          onClick={() => {
            const newlist = listRef.filter((item) => {
              const statusStock = item.stock > 0 ? "in stock" : "out of stock";
              return (
                item.type === "drink" &&
                (statusStock === selectedStock || selectedStock === "all") &&
                item.name.toLowerCase().includes(searchlist)
              );
            });
            setList(newlist);
            setSelectedType("drink");
          }}
        >
          drink
        </button>
        <button
          onClick={() => {
            const newlist = listRef.filter((item) => {
              const statusStock = item.stock > 0 ? "in stock" : "out of stock";
              return (
                (statusStock === selectedStock || selectedStock === "all") &&
                item.name.toLowerCase().includes(searchlist)
              );
            });
            setList(newlist);
            setSelectedType("all");
          }}
        >
          all
        </button>
      </div>
    );
  };

  const renderChoiseStock = () => {
    return (
      <div className="Select-List-Stock">
        <button
          onClick={() => {
            const newlist = listRef.filter((item) => {
              return (
                item.stock > 0 &&
                (item.type === selectedType || selectedType === "all") &&
                item.name.toLowerCase().includes(searchlist)
              );
            });
            setList(newlist);
            setSelectedStock("in stock");
          }}
        >
          in stock
        </button>
        <button
          onClick={() => {
            const newlist = listRef.filter((item) => {
              return (
                item.stock <= 0 &&
                (item.type === selectedType || selectedType === "all") &&
                item.name.toLowerCase().includes(searchlist)
              );
            });
            setList(newlist);
            setSelectedStock("out of stock");
          }}
        >
          out of stock
        </button>
      </div>
    );
  };

  const handelChange = (e) => {
    const Value = e.target.value.toLowerCase();
    const newlist = listRef.filter((item) => {
      const SearchName = String(item.name).toLowerCase().includes(Value);
      const SearchType = item.type === selectedType || selectedType === "all";
      const Stock = item.stock > 0 ? "in stock" : "out of stock";
      const SearchStock = Stock === selectedStock || selectedStock === "all";
      return SearchName && SearchType && SearchStock;
    });
    setList(newlist);
    setSearchlist(Value);
    console.log(listRef);
    console.log(list);
    console.log(newlist);
  };

  const renderContainer = () => {
    return (
      <div className="Container">
        {popUp && (
          <div className="Warp-Container">
            <img src={popUp.img} alt={popUp.name} className="Img-Container" />
            <div className="Container-Text">
              <div className="Container-Text-Name">
                <p>{popUp.name}</p>
                <p>{popUp.score}</p>
              </div>
              <div className="Container-Text-Price">
                <h2>{popUp.price}</h2>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  };

  const onClose = () => {
    setOpen(!open);
    setSelectedType("all");
    setSelectedStock("all");
    setList(mockup);
  };
  return (
    <div>
      <div className="Navbar">
        <img src="./src/image/LOGO.jpg" alt="logo" className="logo" />
        <p>{props.tab}</p>
        <ul>
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
      {renderContainer()}
      <dialog open={open}>
        <div className="Container-List">
          <div className="Nav-List">
            <input type="text" className="Search" onChange={handelChange} />
            <i
              className="fa-solid fa-circle-xmark"
              onClick={() => {
                onClose();
              }}
            ></i>
          </div>
          <div className="List">
            <div className="Select-List">
              {renderChoiseMenu()}
              {renderChoiseStock()}
            </div>
            {renderListCard()}
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default Final;
