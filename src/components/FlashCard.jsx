import React from "react";
import { useState } from 'react';

const FlashCard = (props) => {

        const [flip, setFlip] = useState(false);

        return (
                // Add a flashcard within a container
                <div className="container" onClick={() => setFlip(!flip)}>
                {/* <div className="container"> */}

                <div className="flashcard" >


                        <h3>

                                                
                        {flip ? props.question : props.answer}

                        </h3>   
  
                
                </div>
                </div>

        )

}

export default FlashCard;