import { useSelector } from "react-redux";
import '../scss/Score.scss'

export const Score = () => {
  const score = useSelector(state => (state.score));
  const questionCount = useSelector(state => (state.questionCount));

  return (
    <>
      <h2 className="question">Question: {questionCount}/10</h2>
      <h2 className="score">Score: {score} pts</h2>
    </>
  )
}