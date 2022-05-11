import { createStore } from 'redux'
import { apiQuestion } from './reducers'

const store = createStore(apiQuestion)

export default store
