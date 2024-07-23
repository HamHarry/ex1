/* eslint-disable react/prop-types */
const Test2 = (props) => {
  return (
    <div>
      <div className="header">
        <img className="logo" src="/src/image/LOGO.jpg" alt="LOGO" />
        <div className="number">
          <p>{props.tab}</p>
        </div>
        <ul className="navcart">
          <li>
            <i className="fa-solid fa-magnifying-glass"></i>
          </li>
          <li>
            <i className="fa-solid fa-cart-shopping"></i>
          </li>
        </ul>
      </div>
      <div className="Container"></div>
      <dialog>
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
              <i className="fa-solid fa-circle-xmark"></i>
            </div>
          </div>
          <div className="listbox">
            <div className="choice">
              <div className="choicemenu">
                <button>Food</button>
                <button>Dessert</button>
                <button>Drink</button>
                <button>All</button>
              </div>
              <div className="choicesold">
                <button>In Stock</button>
                <button>Out Of Stock</button>
              </div>
            </div>
            <div className="listdialog">
              <div className="warp-listdialog">
                <div className="listdialogcard">
                  <img className="listdialogimg" />
                  <div className="listdialogcardtext">
                    <div className="listdialogcardtextname">
                      <p></p>
                      <p></p>
                    </div>
                    <div className="istdialogcardtextprice">
                      <h2></h2>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default Test2;
