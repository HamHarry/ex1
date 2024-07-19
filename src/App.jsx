import { useState } from "react";
import mockup from "./Mockup";
const listmockup = mockup;
const App = () => {
    const [open, setOpen] = useState(false);
    const [list] = useState(listmockup);
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
            <dialog open={open}>
                <div className="card">
                    <div className="navdialog">
                        <ul className="listnav">
                            <li>
                                <button>Main course</button>
                            </li>
                            <li>
                                <button>Appetizer</button>
                            </li>
                            <li>
                                <button>Drinks Menu</button>
                            </li>
                        </ul>
                        <i
                            onClick={() => setOpen(!open)}
                            className="fa-solid fa-circle-xmark"
                        ></i>
                    </div>
                    <div className="listdialog">
                        {list.map((item, index) => (
                            <div key={index} className="warp-listdialog">
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
                    </div>
                </div>
            </dialog>
        </div>
    );
};

export default App;
