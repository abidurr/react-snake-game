import React, { useState, useEffect, useRef } from "react";
import { useInterval } from "./useInterval";
import { CANVAS_SIZE, SNAKE_START, APPLE_START, SCALE, SPEED, DIRECTIONS } from "./constants"

const App = () => {

    const startGame = () => {

    }
    const endGame = () => {

    }
    const moveSnake = () => {

    }
    const createApple = () => {

    }
    const checkCollision = () => {

    }
    const checkAppleCollision = () => {

    }
    const gameLoop = () => {

    }
    useEffect(() => {

    }, [snake, apple, gameOver])

    return (
        <div
            role="button"
            tabIndex="0"
            onKeyDown={e => moveSnake(e)}
        >
            <canvas
                style={{ border: "1px solid black" }}
                ref={canvasRef}
                width={`${CANVAS_SIZE[0]}px`}
                height={`${CANVAS_SIZE[1]}px`}
            />
        {gameOver && <div>GAME OVER!</div>}
        <button onClick={startGame}>
            Start Game
        </button>
        </div>
    )
}

export default App;
