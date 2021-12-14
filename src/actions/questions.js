export const ADD_NEW_QUESTION = 'ADD_NEW_QUESTION'
export const ADD_QUESTION_VOTE = 'ADD_QUESTION_VOTE'

export function addNewQuestion(question) {
    return {
        type: ADD_NEW_QUESTION,
        question
    }
}


export function addQuestionVote(payload) {
    return {
        type: ADD_QUESTION_VOTE,
        authedUser: payload.authedUser,
        qid: payload.qid,
        answer: payload.answer
    }
}
