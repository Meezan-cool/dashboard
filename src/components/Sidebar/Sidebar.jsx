// import React, { useState ,useEffect} from 'react';
// import './sidebar.scss';
// import SideMap from '../SideMap/SideMap';
// import { ChartsTalbles, Elements, Main, Widget } from './data';

// const Sidebar = ({ showSide }) => {
//   const [sideItemCategory,setSideItemCategory] =useState(null)
//   const handleSideMapClick = (name) => {
//     setSideItemCategory(name);
//   };
//   useEffect(() => {
//     console.log(sideItemCategory);
//   }, [sideItemCategory]);
//   return (
//     <div className={`Sidebar ${showSide ? 'open' : ''}`}>
//       <SideMap data={Main} name="Main"  onClick={handleSideMapClick}/>
//       <SideMap data={Widget} name="Widgets" onClick={handleSideMapClick}/>
//       <SideMap data={Elements} name="Elements"  onClick={handleSideMapClick}/>
//       <SideMap data={ChartsTalbles} name="Charts & Tables" onClick={handleSideMapClick}/>
//     </div>
//   );
// }

// export default Sidebar;
import React, { useState, useEffect } from 'react';
import './sidebar.scss';
import SideMap from '../SideMap/SideMap';
import { ChartsTalbles, CustomError, Elements, FormIcons, Main, Pages, Widget } from './data';

const Sidebar = ({ showSide }) => {
  const [openCategory, setOpenCategory] = useState(null);
  const [openItem, setOpenItem] = useState(null);

  const handleSideMapClick = (category, item) => {
    setOpenCategory(category);
    setOpenItem(item);
  };

  useEffect(() => {
    console.log(`Category: ${openCategory}, Item: ${openItem}`);
  }, [openCategory, openItem]);

  return (
    <div className={`Sidebar ${showSide ? 'open' : ''}`}>
      <SideMap data={Main} category="Main" onClick={handleSideMapClick} openCategory={openCategory} openItem={openItem} />
      <SideMap data={Widget} category="Widgets" onClick={handleSideMapClick} openCategory={openCategory} openItem={openItem} />
      <SideMap data={Elements} category="Elements" onClick={handleSideMapClick} openCategory={openCategory} openItem={openItem} />
      <SideMap data={ChartsTalbles} category="Charts & Tables" onClick={handleSideMapClick} openCategory={openCategory} openItem={openItem} />
      <SideMap data={CustomError} category="Custom & Error Pages" onClick={handleSideMapClick} openCategory={openCategory} openItem={openItem} />
      <SideMap data={FormIcons} category="Forms & Icons" onClick={handleSideMapClick} openCategory={openCategory} openItem={openItem} />
    </div>
  );
}

export default Sidebar;


