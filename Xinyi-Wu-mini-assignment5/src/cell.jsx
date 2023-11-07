import React, { useContext } from 'react';
import { GridContext } from '/Users/kk/Desktop/SchoolWork/2023_Fall_CSA/5610/miniAssignment/gridCounter/Xinyi-Wu-mini-assignment5/src/grid.jsx';

const Cell = ({ id }) => {
  const { toggleCell, isCellOn } = useContext(GridContext);

  const handleClick = () => {
    toggleCell(id);
  };

  return (
    <div
      className={`cell ${isCellOn(id) ? 'on' : 'off'}`}
      onClick={handleClick}
    ></div>
  );
};

export default Cell;
