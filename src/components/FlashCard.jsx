import React from "react";

const FlashCard = (props) => {

        return (
                // Add a flashcard within a container
                <div className="container">

                <div className="flashcard">

                        <h3>
                        {props.info}
                        </h3>   
                
                </div>
                </div>

        )

}

export default FlashCard;