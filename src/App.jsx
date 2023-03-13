import './App.css';
import { useState } from 'react';
import FlashCard from './components/FlashCard'

const App = () => {

  const [count, setCount] = useState(0);

  const updateCount = () => {

    if (count > 10) {
      setCount(0);
    }

    else {
      setCount(count + 1);
    }
  
  }

  const handleFlashcardClick = () => {}

  var questions = ["What is the capital of Switzerland?", "How many pickled peppers did Peter Piper pick?", "Who won the 1966 Superbowl?", "Which airport has the most flights per day?", "What is the current record for the longest sushi roll ever created?", "What happens when a groundhog sees its shadow?", "Which English word has the most synonyms?"];

  var randomTrivia = [{"What is the capital of Switzerland?": "Bern"}, {"How many pickled peppers did Peter Piper pick?": "As many as he wished."}, {"Who won the 1966 Superbowl?":"The Green Bay Packers"}, {"Which airport has the most flights per day?":"Hartsfield–Jackson Atlanta International Airport (ATL)"}, {"What is the current record for the longest sushi roll ever created?": "2,844.61 m (9,332 ft 8 in)"}, {"What happens when a groundhog sees its shadow?": "Winter will go on for six more weeks."}, {"Which English word has the most synonyms?": "'Drunk', with over 2985 synonyms."}];

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
          Number of cards: 2
        </h2>

      </div>
      <FlashCard info={questions[count]}/>

      {/* <FlashCard info={randomTrivia[count][questions[count]]}/> */}

      <button onClick={updateCount}>
            ➡️
      </button>



    </div>
  )
}

export default App