import React, {useState, useEffect} from 'react';
import './style.css';

const PlayArea = () => {
    const [firstPlayer, setFirstPlayer] = useState(true);
    const [winnerFound, setWinnerFound] = useState(false);
    const [matchDraw, setMatchDraw] = useState(false);
    const [moves, setMoves] = useState({});

    const winningConditions = [
        ['0-0', '0-1', '0-2'],
        ['1-0', '1-1', '1-2'],
        ['2-0', '2-1', '2-2'],
        ['0-0', '1-0', '2-0'],
        ['0-1', '1-1', '2-1'],
        ['0-2', '1-2', '2-2'],
        ['0-0', '1-1', '2-2'],
        ['0-2', '1-1', '2-0'],
    ];

    const checkWinningCondition = (moves) => {
        let foundWin = false;
        for(let item of winningConditions) {
            //checking winning condition
            if (moves[`${item[1]}`] && (moves[`${item[0]}`] === moves[`${item[1]}`]) && (moves[`${item[1]}`] === moves[`${item[2]}`])) {
                foundWin = true;
                //breaking loop if winning condition was found.
                break;
            }
        }
        return foundWin;
    };

    const reset = () => {
        setFirstPlayer(true);
        setWinnerFound(false);
        setMatchDraw(false);
        setMoves({});
    }

    useEffect(() => {
        if (Object.keys(moves).length) {
            if (checkWinningCondition(moves)) {
                //setting winner.
                setFirstPlayer(!firstPlayer)
                setWinnerFound(true);
            } else if (Object.keys(moves).length === 9 && !checkWinningCondition(moves)) {
                //setting match as draw.
                setMatchDraw(true);
            } {
                //toggling chances.
                setFirstPlayer(!firstPlayer);
            }
        }
    }, [moves]);

    return (
        <div className='playarea'>
            {(winnerFound || matchDraw) && (
                <>
                    {winnerFound && (
                        <div className="winning-text">{`Winner is ${!firstPlayer ? 'Player 1 (X)' : 'Player 2 (O)'}!`}</div>
                    )}
                    {matchDraw && (
                        <div className="draw-text">{`Match was draw!`}</div>
                    )}
                    <div className='reset' onClick={reset}>Play Another Game!</div>
                </>
            )}
            <div className='board'>
                {new Array(3).fill('').map((row, outerIdx) => {
                    //rendering rows.
                    return (
                        <div className="board-row" key={outerIdx}>
                        {new Array(3).fill('').map((col, innerIdx) => {
                            const boxId = `${outerIdx}-${innerIdx}`;
                            //rendering columns.
                            return (
                                <div
                                    onClick={() => {
                                        if (!moves[boxId] && !winnerFound) {
                                            setMoves({
                                                ...moves,
                                                [boxId]: firstPlayer ? 'X' : 'O',
                                            });
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
            {!(winnerFound || matchDraw) && (
                <div className='instructions'>{`Next Player: ${firstPlayer ? 'Player 1 (X)' : 'Player 2 (O)'}`}</div>
            )}
        </div>
    );
};

export default PlayArea;