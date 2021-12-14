import { RECEIVE_DATA } from '../actions/shared'
import { ADD_USER_QUESTION, SAVE_USER_ANSWER } from '../actions/users'

export default function users(state = [], action) {
    switch (action.type) {
        case RECEIVE_DATA:
            return {
                ...state,
                ...action.users
            }

        case ADD_USER_QUESTION:
            return {
                ...state,
                [action.question.author]: {
                    ...state[action.question.author],
                    questions: state[action.question.author].questions.concat([action.question.id])
                }
            }

        case SAVE_USER_ANSWER:
            return {
                ...state,
                [action.authedUser]: {
                    ...state[action.authedUser],
                    answers: {
                        ...state[action.authedUser].answers,
                        [action.qid]: action.answer
                    }
                }
            }

        default:
            return state
    }
}