import './App.css';
import { useState } from 'react';
import FlashCard from './components/FlashCard'

const App = () => {

  const [count, setCount] = useState(0);

  const updateCount = () => setCount(count + 1);

  var questions = ["What is the capital of Switzerland?", "How many pickled peppers did Peter Piper pick?"];

  var randomTrivia = [{"What is the capital of Switzerland?": "Bern"}, {"How many pickled peppers did Peter Piper pick?": "As many as he wished."}];

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

      <FlashCard info={randomTrivia[0][questions[0]]}/>

      <button>
            ➡️
      </button>



    </div>
  )
}

export default App