// import React, { useState } from 'react';
// import './sidebar.scss';
// import { SideItem } from './data';

// const Sidebar = ({ showSide, setShowSide }) => {
//   const [openItem, setOpenItem] = useState(null);

//   const handleItemClick = (listName) => {
//     if (openItem === listName) {
//       // If the clicked item is already open, close it
//       setOpenItem(null);
//     } else {
//       // If a different item is clicked, open it
//       setOpenItem(listName);
//     }
//   };

//   return (
//     <div className={`Sidebar ${showSide ? 'open' : ''}`}>
//       {SideItem.map((item) => {
//         const isItemOpen = openItem === item.list_name;
//         return (
//           <div key={item.list_name} className='Main-Item'>
//             <div
//               className='Item'
//               onClick={() => handleItemClick(item.list_name)}
//               style={{ cursor: 'pointer' }}
//             >
//               <div>{item.list_name} {item.icons} </div>
//               <div className={`arrow ${isItemOpen ? 'arrow-rotate' : ''}`}>
//                 {item.arrow}
//               </div>
//             </div>
//             {isItemOpen && item.subitems && (
//               <div>
//                 {item.subitems.map((subitem) => {
//                   return (
//                     <div key={subitem.name}>{subitem.name}  {subitem.arrow}</div>
//                   );
//                 })}
//               </div>
//             )}
//           </div>
//         );
//       })}
//     </div>
//   );
// };

// export default Sidebar;
// import React, { useState } from 'react';
// import './sidebar.scss';
// import { SideItem } from './data';

// const Sidebar = ({ showSide, setShowSide, items }) => {
//   const [openItems, setOpenItems] = useState([]);

//   const handleItemClick = (listName) => {
//     if (openItems.includes(listName)) {
//       // If the clicked item is already open, close it
//       setOpenItems(openItems.filter((item) => item !== listName));
//     } else {
//       // If a different item is clicked, open it
//       setOpenItems([...openItems, listName]);
//     }
//   };

//   const renderItems = (items) => {
//     return items.map((item) => {
//       const isItemOpen = openItems.includes(item.name);
//       return (
//         <div key={item.name} className='Main-Item'>
//           <div
//             className='Item'
//             onClick={() => handleItemClick(item.name)}
//             style={{ cursor: 'pointer' }}
//           >
//             <div>{item.name} {item.icons} </div>
//             <div className={`arrow ${isItemOpen ? 'arrow-rotate' : ''}`}>
//               {item.arrow}
//             </div>
//           </div>
//           {isItemOpen && item.subitems && (
//             <div>
//               {renderItems(item.subitems)}
//             </div>
//           )}
//         </div>
//       );
//     });
//   };

//   return (
//     <div className={`Sidebar ${showSide ? 'open' : ''}`}>
//       {renderItems(items || SideItem)}
//     </div>
//   );
// };

// export default Sidebar;
import React, { useState } from 'react';
import './sidebar.scss';
import { SideItem } from './data';

const Sidebar = ({ showSide, setShowSide, items }) => {
  const [openItems, setOpenItems] = useState([]);

  const handleItemClick = (listName) => {
    if (openItems.includes(listName)) {
      // If the clicked item is already open, close it
      setOpenItems(openItems.filter((item) => item !== listName));
    } else {
      // If a different item is clicked, open it
      setOpenItems([...openItems, listName]);
    }
  };

  const renderItems = (items) => {
    return items.map((item) => {
      const isItemOpen = openItems.includes(item.name);
      return (
        <div key={item.name} className='Main-Item'>
          <div
            className='Item'
            onClick={() => handleItemClick(item.name)}
            style={{ cursor: 'pointer' }}
          >
            <div>{item.name} {item.icons} </div>
            <div className={`arrow ${isItemOpen ? 'arrow-rotate' : ''}`}>
              {item.arrow}
            </div>
          </div>
          {isItemOpen && item.subitems && (
            <div>
              {renderItems(item.subitems)}
            </div>
          )}
        </div>
      );
    });
  };

  return (
    <div className={`Sidebar ${showSide ? 'open' : ''}`}>
      {renderItems(items || SideItem)}
    </div>
  );
};

export default Sidebar;

