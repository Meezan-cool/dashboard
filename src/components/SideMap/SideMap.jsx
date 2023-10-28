import React, { useState } from "react";
import "./sideMap.scss";

const SideMap = ({ data, category, onClick, openCategory, openItem }) => {
  const [showSubitem, setShowSubitem] = useState(false);

  const handleItemClick = (item) => {
    if (item.id === openItem && category === openCategory) {
      onClick(null, null);
    } else {
      onClick(category, item.id);
    }
  };

  return (
    <div className="SideMapping">
      <div className="Item-Name">{category}</div>
      <div className="SideMenu">
        {data &&
          Array.isArray(data) &&
          data.map((item) => (
            <div key={item.id} className={`Main-Content`}>
              <div className={`SideItem ${item.class}`}>
                <div className="Sub-SideItem" onClick={() => handleItemClick(item)}>
                  <div className="Sub-SideLeft">
                    <div className="Sub-icon">{item.icon}</div>
                    {item.name}
                  </div>
                  <div
                    className={`Sub-SideRight-arrow ${
                      item.id === openItem && category === openCategory
                        ? "transform"
                        : ""
                    }`}
                  >
                    {item.arrow}
                  </div>
                </div>
              </div>

              {item.subItem && Array.isArray(item.subItem) && item.subItem.length > 0 && (
                <div 
                className={`Subitems `}
                >
                 <div className={`SubItem-Effect ${ item.id === openItem && category === openCategory  ? 'transition' : 'no-transition'}`}>
                 {item.subItem.map((subitem) => ( 
                    <div key={subitem.name} className="Subitems-Item-container">
                      <div className="Subitems-Item" onClick={() => setShowSubitem(!showSubitem)}>
                        <div className={`Subitem-circle-name`}>
                          <div className="Subitem-circle">{subitem.circle}</div>
                          {subitem.name}
                        </div>
                        <div className={`Sub-SideRight-arrow ${showSubitem && "transform"}`}>
                          {subitem.arrow}
                        </div>
                      </div>
                      {subitem.subItem && Array.isArray(subitem.subItem) && subitem.subItem.length > 0 && (
                        <div className={`SubsubItem `}>
                        <div className={`SubsubItem-Effect ${showSubitem ? "show" : "close"}`}>
                        {subitem.subItem.map((subsubitem) => (
                            <div key={subsubitem.name} className="Subsubitem-container">
                              <div className="Subsub-Item">
                                <div className="Subitem-circle">{subsubitem.circle}</div>
                                {subsubitem.name}
                                <div className="Sub-SideRight-arrow">{subsubitem.arrow}</div>
                              </div>
                            </div>
                          ))}
                        </div>
                        </div>
                      )}
                    </div>
                  ))}
                 </div>
                </div>
              )}
            </div>
          ))}
      </div>
    </div>
  );
};

export default SideMap;
