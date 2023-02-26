import React, {useState} from 'react';
import './style.css';

const PlayArea = () => {
    const [firstPlayer, setFirstPlayer] = useState(true);
    const [winnerFound, setWinnerFound] = useState(false);
    const [moves, setMoves] = useState({});
    return (
        <div className='playarea'>
            <div className='board'>
                {new Array(3).fill('').map((row, outerIdx) => {
                    return (
                        <div className="board-row" key={outerIdx}>
                        {new Array(3).fill('').map((col, innerIdx) => {
                            const boxId = `${outerIdx}-${innerIdx}`;
                            return (
                                <div
                                    onClick={() => {
                                        if (!moves[boxId] && !winnerFound) {
                                            setMoves({
                                                ...moves,
                                                [boxId]: firstPlayer ? 'X' : 'O',
                                            });
                                            setFirstPlayer(!firstPlayer)
                                        }
                                    }}
                                    key={boxId}
                                    className={(moves[boxId] || winnerFound) ? 'box-played' : 'box'}
                                >{moves[boxId] || ' '}
                                </div>
                            )
                        })}
                        </div>
                    )
                })}
            </div>
        </div>
    );
};

export default PlayArea;