import React from 'react';

const Comp = ({ num, children }) => {
  const colors = ['czerwony', 'zielony', 'niebieski', 'żółty'];
  const color = colors[num] || 'brak koloru';

  return <div>{children} {color}</div>;
};

export default Comp;
