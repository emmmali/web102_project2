import './App.css';
import { useState } from 'react';

const App = () => {

  const [count, setCount] = useState(0);

  const updateCount = () => setCount(count + 1);

  return (
    <div className="App">

      <div className="header">

      <h1>
        Literally Anything Trivia
      </h1>

      <h2>
          {/* Call the count state variable to display the # of cards. */}
          Test all of your random knowledge on literally anything here.
        </h2>

       <h2>
          {/* Call the count state variable to display the # of cards. */}
          Number of cards: 1
        </h2>

      </div>

      {/* Add flashcard within a container.*/}
      <div className="container">

        {/* Set buyDoubleStuffed() as the onClick event handler. */}
        <div className="flashcard">

          <h3>
            What is the capital of Switzerland?
          </h3>   
         
        </div>
    </div>

    <button>
            ➡️
    </button>

    </div>
  )
}

export default App