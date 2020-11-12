import React, { Fragment, useState } from "react";
import {Drawer} from './styles'
import Profile from "./profile/index";
import Schedule from './schedule';
import Logout from './Logout'

const Navigator = (props) => {
 

  return (
    <Drawer>
      <Profile />
      <Schedule/>
      <Logout/>
    </Drawer>
  
  );
};

export default Navigator;
