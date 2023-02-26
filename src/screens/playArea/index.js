import React from 'react';
import './style.css';

const PlayArea = () => {
    return (
        <div className='playarea'>
            <div className='board'>
                <div className="board-row">
                    {new Array(3).fill('').map((item, idx) => (
                        <div
                            key={`0-${idx}`}
                            className='box'
                        >{' '}
                        </div>
                    ))}
                </div>
                <div className="board-row">
                    {new Array(3).fill('').map((item, idx) => (
                        <div
                            key={`1-${idx}`}
                            className='box'
                        >{' '}
                        </div>
                    ))}
                </div>
                <div className="board-row">
                    {new Array(3).fill('').map((item, idx) => (
                        <div
                            key={`2-${idx}`}
                            className='box'
                        >{' '}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default PlayArea;