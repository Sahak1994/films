import React from 'react';

const Row = ({left, right}) => {

    return (
        <div className="app">
            <div className="left-side">
                {left}
            </div>
            <div className="right-side">
                {right}
            </div>
        </div>
    )
}

export default Row;