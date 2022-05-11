import '../scss/Button.scss';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeScore, changeQuestionCount, changeFinalScore } from "../store/actions.js";
import { useNavigate } from "react-router-dom";
import CorrectAnswer from '../assets/sounds/correctAnswer.mp3';


export const Button = ({ Answer }) => {
  let navigate = useNavigate();
  const correctAnswer = useSelector(state => (state.correctAnswer));
  const finalScore = useSelector(state => (state.finalScore));
  const score = useSelector(state => (state.score));
  const questionCount = useSelector(state => (state.questionCount));
  const dispatch = useDispatch();
  const [btnColor, setBtnColor] = useState('');

  const handleChangeScore = (score, question) => {
    dispatch(changeScore(score))
    dispatch(changeQuestionCount(question))
  }


  const handleChangeFinalScore = (finalScore) => {
    dispatch(changeFinalScore(finalScore))
  }


  function wrongAnswer() {
    setTimeout(() => {
      handleChangeScore(score, questionCount + 1);
    }, 1500);
    setBtnColor('btn-red');
    setTimeout(() => {
      setBtnColor('');
    }, 1500);
    handleChangeFinalScore([...finalScore, [<li style={{ color: '#FF5252' }}>{correctAnswer}</li>]]);
  }

  function rightAnswer() {
    setTimeout(() => {
      handleChangeScore(score + 1, questionCount + 1);
    }, 1500);
    setBtnColor('btn-green');
    setTimeout(() => {
      setBtnColor('');
    }, 1500);
    handleChangeFinalScore([...finalScore, [<li style={{ color: '#38E9BB' }}>{correctAnswer}</li>]]);
  }


  function handleClick() {
    if (Answer === correctAnswer && questionCount < 10) {
      wrongAnswer();
    }
    else if (questionCount < 10) {
      rightAnswer();
    }
    else if (Answer === correctAnswer && questionCount === 10) {
      handleChangeScore(score + 1, questionCount);
      setBtnColor('btn-green');
      setTimeout(() => {
        navigate('/finalscore');
      }, 1500);
      handleChangeFinalScore([...finalScore, [<li style={{ color: '#38E9BB' }}>{correctAnswer}</li>]]);
    }
    else {
      handleChangeScore(score, questionCount);
      setBtnColor('btn-red');
      setTimeout(() => {
        navigate('/finalscore');
      }, 1500);
      handleChangeFinalScore([...finalScore, [<li style={{ color: '#FF5252' }}>{correctAnswer}</li>]]);
    }
  }


  return (
    <>
      <button className={btnColor} onClick={handleClick}>{Answer}</button>
    </>
  )


}