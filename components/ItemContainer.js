import React from 'react';

const ItemContainer = (props) => {
    return(
        <div className={`flex flex-wrap p-10 justify-between overflow-y-scroll`}>
            {props.children}
        </div>
    )
}

export default ItemContainer;