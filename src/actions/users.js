export const ADD_USER_QUESTION = 'ADD_USER_QUESTION'
export const SAVE_USER_ANSWER = 'SAVE_USER_ANSWER'

export function addUserQuestion(question) {
    return {
        type: ADD_USER_QUESTION,
        question
    }
}

export function saveUserAnswer(payload) {
    return {
        type: SAVE_USER_ANSWER,
        authedUser: payload.authedUser,
        qid: payload.qid,
        answer: payload.answer
    }
}