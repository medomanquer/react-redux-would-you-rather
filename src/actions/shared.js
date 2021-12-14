import { _getUsers, _getQuestions, _saveQuestion, _saveQuestionAnswer } from '../utils/_DATA';
import { addUserQuestion, saveUserAnswer } from '../actions/users';
import { addNewQuestion, addQuestionVote } from '../actions/questions';

export const RECEIVE_DATA = 'RECEIVE_DATA'


function receiveData(users, questions) {
    return {
        type: RECEIVE_DATA,
        users,
        questions,
    }
}

export function handleInitialData() {
    return (dispatch) => {

        return Promise.all([
            _getUsers(),
            _getQuestions()
        ]).then(([users, questions]) => {
            dispatch(receiveData(users, questions))

        })
    }
}

export function handleAddQuestion(optionOneText, optionTwoText, author) {
    const question = { optionOneText, optionTwoText, author }
    return (dispatch) => {

        return _saveQuestion(question)
            .then((savedQuestion) => {
                dispatch(addNewQuestion(savedQuestion))
                dispatch(addUserQuestion(savedQuestion))

            })
    }
}

export function handleAddVote(authedUser, qid, answer) {

    return (dispatch) => {

        return _saveQuestionAnswer({ authedUser, qid, answer }).then(() => {
            //call the questions to add the vote to the question ({ authedUser, qid, answer })
            dispatch(addQuestionVote({ authedUser, qid, answer }))
            // call the users to add the question to the user answered questions ({ authedUser, qid })
            dispatch(saveUserAnswer({ authedUser, qid, answer }))

        })
    }
}