import {BiHomeAlt} from 'react-icons/bi'
import {BsWindowDesktop} from 'react-icons/bs'
import {IoIosArrowForward} from 'react-icons/io'
import {BiCircle} from 'react-icons/bi'
export const  Main=[
    {
        id:1,
        name:'Dashboard',
        icon:<BiHomeAlt/>,
        class:'active'
    },
]
export const  Widget=[
    {
        id:1,
        name:'Widgets',
        icon:<BsWindowDesktop/>
    },
]
export const  Elements=[
    {
        id:1,
        name:'Components',
        icon:<BsWindowDesktop/>,
        arrow:<IoIosArrowForward/>,
        subItem:[
          {
            circle:<BiCircle/>,
            name:'Cards design',
          },
          {
            circle:<BiCircle/>,
            name:'Default Calendar',
          },
          {
            circle:<BiCircle/>,
            name:'Full Calendar',
          },
          {
            circle:<BiCircle/>,
            name:'Default Chat',
          },
          {
            circle:<BiCircle/>,
            name:'Notifications',
          },
          {
            circle:<BiCircle/>,
            name:'Sweet alerts',
          },
          {
            circle:<BiCircle/>,
            name:'Range slider',
          },
          {
            circle:<BiCircle/>,
            name:'Content Scroll bar',
          },
          {
            circle:<BiCircle/>,
            name:'Loaders',
          },
          {
            circle:<BiCircle/>,
            name:'Counters',
          },
          {
            circle:<BiCircle/>,
            name:'Rating',
          },
          {
            circle:<BiCircle/>,
            name:'Timeline',
          },
          {
            circle:<BiCircle/>,
            name:'Treeview',
          },
        ],
    },
    {
        id:2,
        name:'Elements',
        icon:<BsWindowDesktop/>,
        arrow:<IoIosArrowForward/>
    },
    {
        id:3,
        name:'Advanced Elements',
        icon:<BsWindowDesktop/>,
        arrow:<IoIosArrowForward/>
    },
]