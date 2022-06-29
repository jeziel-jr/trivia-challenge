import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { changeScore, changeQuestionCount, changeFinalScore } from "../store/actions.js";
import '../scss/FinalScore.scss'
import { useEffect, useState } from "react";


export function FinalScore() {
  const score = useSelector(state => ([state.score]));
  const finalScore = useSelector(state => (state.finalScore));
  const dispatch = useDispatch();
  const [scoreMessage, setScoreMessage] = useState('');

  function setFinalMessage() {
    if (score === 10) {
      setScoreMessage('Parabéns, você acertou todas as questões! 😍')
    } else if (score == 1) {
      setScoreMessage('Você realmente tentou? Você acertou ' + score + ' questão! 😓')
    }
    else if (score <= 4) {
      setScoreMessage('Você realmente tentou? Você acertou ' + score + ' questões! 😓')
    } else if (score <= 7) {
      setScoreMessage('Nada mal, mas você consegue melhorar! Você acertou ' + score + ' questões! 👍')
    } else if (score <= 9) {
      setScoreMessage('Quase lá, você acertou ' + score + ' questões! 💪')
    }
  }

  useEffect(() => {
    setFinalMessage();
  }, []);

  function resetGame() {
    dispatch(changeQuestionCount(1));
    dispatch(changeScore(0));
    dispatch(changeFinalScore([]));
  }

  return (
    <>
      <div className="final-score">
        <h1>Result:</h1>
        <ol>
          <h3 className="answerTable">{finalScore}</h3>
        </ol>
        <p>{scoreMessage}</p>
        <h2>You Scored {score} / 10</h2>
        <div className="container-buttons">
          <Link to="/questions"><button onClick={resetGame}>Play Again</button></Link>
          <Link to="/" onClick={resetGame}><button>Home</button></Link>
        </div>
      </div>
    </>
  )
}