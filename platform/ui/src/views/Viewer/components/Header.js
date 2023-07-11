import React from 'react';
import { NavBar, Svg, Icon, IconButton } from '../../../components';

const Header = () => {
  return (
    <NavBar className="justify-between border-b-4 border-black">
      <div className="flex justify-between flex-1">
        <div className="flex items-center">
          <div className="inline-flex items-center mr-3"></div>
        </div>
        <div className="flex items-center">
          {/* <Toolbar tools={tools} activeTool={activeTool} moreTools={tools} /> */}
        </div>
        <div className="flex items-center">
          <span className="mr-3 text-lg text-common-light"></span>
          <IconButton
            variant="text"
            color="inherit"
            className="text-primary-active"
            onClick={() => {}}
          >
            <React.Fragment>
              <Icon name="settings" /> <Icon name="chevron-down" />
            </React.Fragment>
          </IconButton>
        </div>
      </div>
    </NavBar>
  );
};

export default Header;
