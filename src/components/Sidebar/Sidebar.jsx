import React from 'react'
import './sidebar.scss'
import SideMap from '../SideMap/SideMap'
import { Elements, Main, Widget } from './data'
const Sidebar = ({ showSide, setShowSide, items }) => {
  return (
    <div className={`Sidebar ${showSide ? 'open' : ''}`}>
      <SideMap data={Main} name="Main"/>
      <SideMap data={Widget} name="Widgets"/>
      <SideMap data={Elements} name="Elements"/>
    </div>
  )
}

export default Sidebar