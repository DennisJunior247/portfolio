import React, {useState} from 'react';
import Navigator from "./Navigator";
import { GeneralLayout } from "./styles";
import {MdMenu as OpenNav} from  'react-icons/md';

const Layout = ({ children }) => {
  const [open, setOpen] = useState(undefined);

  const handleOpen = () => {
    setOpen(!open);
  };
  return (
    <GeneralLayout>
      {/* <OpenNav onClick={handleOpen} style={{fontSize : "50px"}} className="open_menu"/> */}
    
     <Navigator className="nav"/>
     
      <main>{children}</main>
    </GeneralLayout>
  );
};

export default Layout;
