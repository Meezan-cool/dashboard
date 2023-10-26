import React, { useState } from "react";
import "./sideMap.scss";

const SideMap = ({ data, name }) => {
  const [selectedItem, setSelectedItem] = useState(null);

  const handleItemClick = (item) => {
    setSelectedItem(item.id === selectedItem ? null : item.id);
    console.log(item)
  };

  return (
    <div className="SideMapping">
      <div className="Item-Name">{name}</div>
      <div className="SideMenu">
        {data.map((item) => (
          <div className="Main-Content">
            <div key={item.id} className={`SideItem ${item.class}`}>
              <div
                className="Sub-SideItem"
                onClick={() => handleItemClick(item)}
              >
                <div className="Sub-SideLeft">
                  <div className="Sub-icon">{item.icon}</div>
                  {item.name}
                </div>
                <div className={`Sub-SideRight-arrow ${item.id === selectedItem ? 'transform' : ''}`}>{item.arrow}</div>
              </div>
            </div>

            {item.id === selectedItem &&
              item.subItem &&
              item.subItem.length > 0 && (
                <div   className={`Subitems ${item.id === selectedItem ? 'show' : ''}`}>
                  {item.subItem.map((subitem) => (
                    <div key={subitem.name} className="Subitems-Item">
                      <div className={`Subitem-circle`}>{subitem.circle}</div>
                      {subitem.name}
                    </div>
                  ))}
                </div>
              )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SideMap;
