import '../scss/Button.scss';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeScore, changeQuestionCount, changeFinalScore } from "../store/actions.js";
import { useNavigate } from "react-router-dom";
import useSound from 'use-sound';
import correctAnswerSound from '../assets/sounds/correctAnswer.mp3';
import wrongAnswerSound from '../assets/sounds/incorrectAnswer.wav';
import Congrats from '../assets/sounds/congrats.wav';


export const Button = ({ Answer }) => {
  let navigate = useNavigate();
  const correctAnswer = useSelector(state => (state.correctAnswer));
  const finalScore = useSelector(state => (state.finalScore));
  const score = useSelector(state => (state.score));
  const questionCount = useSelector(state => (state.questionCount));
  const dispatch = useDispatch();
  const [btnColor, setBtnColor] = useState('');
  const [playCorrectAnswer] = useSound(correctAnswerSound, { volume: 0.25 });
  const [playWrongAnswer] = useSound(wrongAnswerSound, { volume: 0.25 });
  const [playCongrats] = useSound(Congrats, { volume: 0.25 });


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
    }, 800);
    setBtnColor('btn-red');
    setTimeout(() => {
      setBtnColor('');
    }, 1500);
    playWrongAnswer();
    handleChangeFinalScore([...finalScore, [<li style={{ color: '#FF5252' }}>{correctAnswer}</li>]]);
  }

  function rightAnswer() {
    setTimeout(() => {
      handleChangeScore(score + 1, questionCount + 1);
    }, 800);
    setBtnColor('btn-green');
    setTimeout(() => {
      setBtnColor('');
    }, 1500);
    playCorrectAnswer();
    handleChangeFinalScore([...finalScore, [<li style={{ color: '#38E9BB' }}>{correctAnswer}</li>]]);
  }

  function correctAnswerQuestion10() {
    handleChangeScore(score + 1, questionCount);
    setBtnColor('btn-green');
    setTimeout(() => {
      playCongrats();
      navigate('/finalscore');
    }, 1500);
    playCorrectAnswer();
    handleChangeFinalScore([...finalScore, [<li style={{ color: '#38E9BB' }}>{correctAnswer}</li>]]);
  }

  function wrongAnswerQuestion10() {
    handleChangeScore(score, questionCount);
    setBtnColor('btn-red');
    setTimeout(() => {
      playCongrats();
      navigate('/finalscore');
    }, 1500);
    playWrongAnswer();
    handleChangeFinalScore([...finalScore, [<li style={{ color: '#FF5252' }}>{correctAnswer}</li>]]);
  }

  function handleClick() {
    if (Answer === correctAnswer && questionCount < 10) {
      wrongAnswer();
    }
    else if (questionCount < 10) {
      rightAnswer();
    }
    else if (Answer === correctAnswer && questionCount === 10) {
      correctAnswerQuestion10();
    }
    else {
      wrongAnswerQuestion10();
    }
  }


  return (
    <>
      <button className={btnColor} onClick={handleClick}>{Answer}</button>
    </>
  )






}