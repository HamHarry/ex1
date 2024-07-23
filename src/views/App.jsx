import Test from "./Test";
import { useState } from "react";
import Test2 from "./Test2";
import "../css/App.css";
const App = () => {
  const [selectTab, setSelectTab] = useState(0);

  const [tabs] = useState([
    <Test key={0} tab={0} />,
    <Test2 key={1} tab={1} />,
    <Test key={2} tab={2} />,
    <Test key={3} tab={3} />,
    <Test key={4} tab={4} />,
    <Test key={5} tab={5} />,
    <Test key={6} tab={6} />,
  ]);

  return (
    <>
      {tabs.map((tab, index) => selectTab === index && tab)}
      <div className="footer">
        {tabs.map((_, index) => (
          <div
            className={`select-tab-button ${
              selectTab === index && "isSelected"
            }`}
            key={`tab_${index}`}
            onClick={() => setSelectTab(index)}
          >
            {index}
          </div>
        ))}
      </div>
    </>
  );
};

export default App;
