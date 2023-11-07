// Grid.js
import React, { useState, createContext } from 'react';
import Cell from '/Users/kk/Desktop/SchoolWork/2023_Fall_CSA/5610/miniAssignment/gridCounter/Xinyi-Wu-mini-assignment5/src/cell.jsx';

export const GridContext = createContext();

const Grid = () => {
  const [cellState, setCellState] = useState([false, false, false, false]);

  const toggleCell = (id) => {
    const newCellState = [...cellState];
    newCellState[id] = !newCellState[id];
    setCellState(newCellState);
  };

  const isCellOn = (id) => {
    return cellState[id];
  };

  return (
    <div>
      <h2>Count: {cellState.filter((cell) => cell).length}</h2>
      <div className="grid">
        <GridContext.Provider value={{ toggleCell, isCellOn }}>
          <Cell id={0} />
          <Cell id={1} />
          <Cell id={2} />
          <Cell id={3} />
        </GridContext.Provider>
      </div>
    </div>
  );
};

export default Grid;
