import { useState } from "react";
import mockup from "./Mockup";
const listmockup = mockup;
const App = () => {
    const [open, setOpen] = useState(false);
    const [list] = useState(listmockup);
    const [menu, setMenu] = useState([]);
    return (
        <div>
            <div className="header">
                <img className="logo" src="/src/image/LOGO.jpg" alt="LOGO" />
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
                {menu.map((item, index) => (
                            <div key={index} className="warp-container">
                                <div className="listcontainercard">
                                    <img
                                        className="listcontainerimg"
                                        src={item.img}
                                        alt="image"
                                    />
                                    <div className="listcontainercardtext">
                                        <div className="listcontainercardtextname">
                                            <p>{item.name}</p>
                                            <p>{item.score}</p>
                                        </div>
                                        <div className="listcontainercardtextprice">
                                            <h2>{item.price}</h2>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
            </div>
            <dialog open={open}>
                <div className="card">
                    <div className="navdialog">
                        <input type="text" placeholder="Seach..." className="searchnav" />
                        <i
                            onClick={() => setOpen(!open)}
                            className="fa-solid fa-circle-xmark"
                        ></i>
                    </div>
                    <div className="listbox">
                        <div className="choice">
                            <div className="choicemenu">
                                <ul>
                                    <li><button>Food</button></li>
                                    <li><button>Dessert</button></li>
                                    <li><button>Drink</button></li>
                                </ul>
                            </div>
                            <div className="choicesold">
                                <ul>
                                    <li><button>sold</button></li>
                                    <li><button>sold-out</button></li>
                                </ul>
                            </div>
                            
                        </div>
                        <div className="listdialog">
                        {list.map((item, index) => (
                            <div key={index} className="warp-listdialog" onClick={()=> setOpen(!open && setMenu)}>
                                <div className="listdialogcard">
                                    <img
                                        className="listdialogimg"
                                        src={item.img}
                                        alt="image"
                                    />
                                    <div className="listdialogcardtext">
                                        <div className="listdialogcardtextname">
                                            <p>{item.name}</p>
                                            <p>{item.score}</p>
                                        </div>
                                        <div className="listdialogcardtextprice">
                                            <h2>{item.price}</h2>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div></div>
                </div>
            </dialog>
        </div>
    );
};

export default App;
