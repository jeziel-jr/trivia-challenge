export const changeQuestion = question => {
  return {
    type: 'change_question',
    payload: { question: question }
  }
}
export const changeCategory = category => {
  return {
    type: 'change_category',
    payload: { category: category }
  }
}
export const changeCorrectAnswer = correctAnswer => {
  return {
    type: 'change_correctAnswer',
    payload: { correctAnswer: correctAnswer }
  }
}
export const changeScore = score => {
  return {
    type: 'change_score',
    payload: { score: score }
  }
}
export const changeQuestionCount = questionCount => {
  return {
    type: 'change_questionCount',
    payload: { questionCount: questionCount }
  }
}
export const changeFinalScore = finalScore => {
  return {
    type: 'change_finalScore',
    payload: { finalScore: finalScore }
  }
}
