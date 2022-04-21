import React, { useState } from "react";
import Snake from './Snake'
const App = () => {
  const [snakePiece, setSnakePiece] = useState([[0, 0]])

  return (
    <React.Fragment>
      <h1>Snakey</h1>
      <div className='board'>
        <Snake pieces={snakePiece}></Snake>
      </div>

    </React.Fragment>

  );
}

export default App;
