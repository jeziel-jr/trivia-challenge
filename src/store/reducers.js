const INITIAL_STATE = {
  question: '',
  category: '',
  correctAnswer: [],
  score: 0,
  questionCount: 1,
  finalScore: ''
}

export const apiQuestion = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'change_question':
      return { ...state, question: action.payload.question }
    case 'change_category':
      return { ...state, category: action.payload.category }
    case 'change_correctAnswer':
      return { ...state, correctAnswer: action.payload.correctAnswer }
    case 'change_score':
      return { ...state, score: action.payload.score }
    case 'change_questionCount':
      return { ...state, questionCount: action.payload.questionCount }
    case 'change_finalScore':
      return { ...state, finalScore: action.payload.finalScore }
    default:
      return { ...state }
  }
}
