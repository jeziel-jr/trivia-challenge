import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeQuestion, changeCategory, changeCorrectAnswer } from "../store/actions.js"
import axios from "axios"


export function GetApiData() {
  const questionCount = useSelector(state => (state.questionCount));

  const dispatch = useDispatch();
  const handleChangeQuestion = (question, category, correctAnswer) => {
    dispatch(changeQuestion(question))
    dispatch(changeCategory(category))
    dispatch(changeCorrectAnswer(correctAnswer))
  }

  useEffect(() => {
    axios.get('https://opentdb.com/api.php?amount=1&type=boolean').then(({ data }) => {
      const setQuestions = data.results[0].question;
      const setCategory = data.results[0].category;
      const setCorrectAnswer = data.results[0].correct_answer;
      handleChangeQuestion(setQuestions, setCategory, setCorrectAnswer);
    });
  }, [questionCount]);

}

