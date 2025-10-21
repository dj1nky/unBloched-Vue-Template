export const flexDirection = props => {
  return [props.gap, props.direction];
};

export const flexGap = props => {
  return props.gap;
};

export const gridColumn = props => {
  return {
    gridColumn: `span ${props.colSpan}`,
  };
};

export const gridTemplateColumns = props => {
  return {
    gridTemplateColumns: `repeat(${props.gridCols}, 1fr)`,
  };
};

export const gridStyle = () => {
  return `
    flex 
    flex-col 
    md:grid
  `;
};
