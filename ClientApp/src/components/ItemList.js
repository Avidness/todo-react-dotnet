import React from 'react';

import ItemDetailsContainer from '../containers/ItemDetailsContainer';

const ItemList = (props) => {
  return (
    <div>
      {props.items.map(item =>
        <ItemDetailsContainer key={item.label} item={item} />
      )}
    </div>
  );
}

export default ItemList;