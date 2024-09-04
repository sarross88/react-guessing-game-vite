import { useState } from "react";
import Button from "./Button";
import PropTypes from "prop-types";


function GuessControl(props) {
  const [currentGuess, setCurrentGuess] = useState("");

  function handleInputChange(event) {
    setCurrentGuess(event.target.value);
  }

  function onSubmitGuess() {
    if (props.onGuess) {
      props.onGuess(Number(currentGuess));
    }
    setCurrentGuess("");
  }

  return (
    <div>
      <input type="number" value={currentGuess} onChange={handleInputChange} />
      <Button onClick={onSubmitGuess}>Submit Guess</Button>
    </div>
  );
}

GuessControl.propTypes = {
  onGuess: PropTypes.func.isRequired,
};

export default GuessControl;