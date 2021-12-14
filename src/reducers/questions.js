import { RECEIVE_DATA } from '../actions/shared'
import { ADD_NEW_QUESTION, ADD_QUESTION_VOTE } from '../actions/questions'


export default function questions(state = [], action) {
    switch (action.type) {
        case RECEIVE_DATA:
            return {
                ...state,
                ...action.questions
            }
        case ADD_NEW_QUESTION:
            return {
                ...state,
                [action.question.id]: action.question
            }
        case ADD_QUESTION_VOTE:
            return {
                ...state,
                [action.qid]: {
                    ...state[action.qid],
                    [action.answer]: {
                        ...state[action.qid][action.answer],
                        votes: state[action.qid][action.answer].votes.concat([action.authedUser])
                    }
                }
            }
        default:
            return state
    }
}