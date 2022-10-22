import './App.css';
import {  Card, Menu } from 'antd';
import './sass/index.scss'

import { useState } from 'react';
import Routess from './routes/Routess';
import { NavLink } from 'react-router-dom';

function getItem(label, key, icon, children, type) {
  return {
    key,
    icon,
    children,
    label,
    type,
  };
}
const items = [
  getItem('Navigation One', 'sub1','' , [
    getItem(<NavLink to={'/home1'}>Navlink to home 1</NavLink>, 'g1', null, [getItem(<NavLink to={'/home5'}>Navlink to home 5</NavLink>, '1'), getItem(<NavLink to={'/home2'}>Navlink to home 2</NavLink>, '2')], 'group'),
    getItem(<NavLink to={'/home2'}>Navlink to home 2</NavLink>, 'g2', null, [getItem(<NavLink to={'/home1'}>Navlink to home 1</NavLink>, '3'), getItem(<NavLink to={'/home5'}>Navlink to home 5</NavLink>, '4')], 'group'),
  ]),
  getItem('Navigation Two', 'sub2','' , [
    getItem(<NavLink to={'/home3'}>Navlink to home 3</NavLink>, '5'),
    getItem(<NavLink to={'/home4'}>Navlink to home 4</NavLink>, '6'),
  ]),
  getItem('Navigation Three', 'sub4','', [
    getItem(<NavLink to={'/home3'}>Navlink to home 3</NavLink>, '9'),
    getItem(<NavLink to={'/home1'}>Navlink to home 1</NavLink>, '10'),
    getItem(<NavLink to={'/home2'}>Navlink to home 2</NavLink>, '11'),
    getItem(<NavLink to={'/home1'}>Navlink to home 1</NavLink>, '12'),
  ]),
];

// submenu keys of first level
const rootSubmenuKeys = ['sub1', 'sub2', 'sub4'];

function App() {
  const [openKeys, setOpenKeys] = useState(['sub1']);
  const onOpenChange = (keys) => {
    const latestOpenKey = keys.find((key) => openKeys.indexOf(key) === -1);
    if (rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
      console.log(keys)
      setOpenKeys(keys);
    } else {
      setOpenKeys(latestOpenKey ? [latestOpenKey] : []);
    }
  };
  const onClick = (e) => {
    console.log('click ', e);
  };
  return (
    <div style={{display:'flex', gap:20}}>
     <Menu
      mode="inline"
      openKeys={openKeys}
      onOpenChange={onOpenChange}
      onClick ={onClick}
      style={{
        width: 256,
      }}
      items={items}
    />
    <Card >
      <Routess />
    </Card>
    </div>
  );
}

export default App;
