export const flexDirection = (props) => {
  return [props.gap, `flex-${props.direction}`];
};

export const gridColumn = (props) => {
  return {
    gridColumn: `span ${props.colSpan}`,
  };
};

export const gridTemplateColumns = (props) => {
  return {
    gridTemplateColumns: `repeat(${props.gridCols}, 1fr)`,
  };
};

export const gridStyle = () => {
  return `
    flex 
    flex-col 
    md:grid
    gap-6
  `;
};
