/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect, useCallback } from "react";
import Snake from './Snake'
import Food from './Food'
const App = () => {
  //snake pieces will be stored as [x,y] coordinates
  const [snakePieces, setSnakePieces] = useState([[0, 0], [2, 0]])
  const [food, setFood] = useState([])
  const [direction, setDirection] = useState('Right')

  const spawnFood = () => {
    const snakeStringify = JSON.stringify(snakePieces)
    let [min, max] = [1, 98]
    let left = Math.floor(Math.random() * (max - min + 1) + min)
    let top = Math.floor(Math.random() * (max - min + 1) + min)
    let newFood = [left, top]

    //Only want to spawn food on a coordinate not taken up by a snake piece.
    while (snakeStringify.includes(newFood)) {
      return spawnFood()
    }
    setFood(newFood)
  }

  const moveSnake = useCallback(snakePieces => {
    let pieces = [...snakePieces];
    let head = pieces[pieces.length - 1];

    switch (direction) {
      case "Right":
        head = [head[0] + 2, head[1]];
        break;
      case "Left":
        head = [head[0] - 2, head[1]];
        break;
      case "Down":
        head = [head[0], head[1] + 2];
        break;
      case "Up":
        head = [head[0], head[1] - 2];
        break;
      default:
        break;
    }
    if (direction) {
      pieces.push(head);
      pieces.shift();
      setSnakePieces([...pieces]);
    }
  }, [direction]);


  //Hook to update snake movement
  useEffect(() => {
    setInterval(() => {
      moveSnake(snakePieces)
    }, 1000);
  }, []);

  //Hook to listen for keydown
  useEffect(() => {
    function handleKeyDown(e) {
      switch (e.key) {
        case "ArrowRight":
          setDirection('Right');
          break;
        case "ArrowDown":
          setDirection('Down');
          break;
        case "ArrowLeft":
          setDirection('Left');
          break;
        case "ArrowUp":
          setDirection('Up');
          break;
        default:
          return direction
      }
    }
    document.addEventListener('keydown', handleKeyDown);
  }, []);

  // console.log('direction', direction)
  // console.log('snake', snakePieces)
  if (!food.length) spawnFood()
  return (
    <React.Fragment>
      <h1>Snakey</h1>
      <div className='board'>
        <Snake snakePieces={snakePieces} />
        <Food food={food} />
      </div>

    </React.Fragment>

  );
}

export default App;
