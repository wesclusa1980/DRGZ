import React from 'react';

const ItemContainer = (props) => {
    return(
        <div className="flex flex-wrap p-10 space-x-6">
            {props.children}
        </div>
    )
}

export default ItemContainer;