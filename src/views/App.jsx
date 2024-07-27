import { useState } from "react";
import Test from "./Test";
import Test2 from "./Test2";
import Test3 from "./test3";
import Test4 from "./Test4";
import Test5 from "./Test5";
// import "../css/App.css";
import "../css/Final.css";
import Final from "./Final";

const App = () => {
  const [selectTab, setSelectTab] = useState(5);

  const [tabList] = useState([
    <Test key={0} tab={0} />,
    <Test2 key={1} tab={1} />,
    <Test3 key={2} tab={2} />,
    <Test4 key={3} tab={3} />,
    <Test5 key={4} tab={4} />,
    <Final key={5} tab={5} />,
  ]);

  return (
    <>
      {/* {tabList.map((tab, index) => selectTab === index && tab)} */}
      {tabList.find((item, index) => selectTab === index)}
      <div className="footer">
        {tabList.map((_, index) => (
          <div
            className={`select-tab-button ${
              selectTab === index ? "isSelected" : "button"
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
