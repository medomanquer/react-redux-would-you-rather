import { useSelector } from 'react-redux'
import ShowQuestionCard from './ShowQuestionCard'
import { Tab, Container } from 'semantic-ui-react'
import NavBar from './NavBar'

const Home = () => {
    // read from the store
    const authedUser = useSelector(state => state.authenticatedUser)
    const questions = useSelector((state) => state.questions)
    const users = useSelector((state) => state.users)

    let userAnsweredQuestions = []
    let userUnAnsweredQuestions = []

    // find user answered questions
    for (let uAQuestionID in users[authedUser].answers) {
        userAnsweredQuestions.push(uAQuestionID);
    }
    // find user unanswered questions 
    for (let questionID in questions) {
        if (userAnsweredQuestions.find(elem => elem === questionID) === undefined) userUnAnsweredQuestions.push(questionID)
    }

    // sort by timestamp from most to least recent
    userAnsweredQuestions.sort((a, b) => a.timestamp < b.timestamp ? 1 : -1)
    userUnAnsweredQuestions.sort((a, b) => a.timestamp < b.timestamp ? 1 : -1)

    let qCardsAnswered = []
    let qCardsUnAnswered = []

    userAnsweredQuestions.forEach((qid) => {
        qCardsAnswered.push(<ShowQuestionCard key={qid}
            questioID={qid}
            questionOptionOneText={questions[qid].optionOne.text}
            userName={users[questions[qid].author].name}
            userAvatar={users[questions[qid].author].avatarURL}
            flag={true} />)
    })

    userUnAnsweredQuestions.forEach((qid) => {
        qCardsUnAnswered.push(<ShowQuestionCard key={qid}
            questioID={qid}
            questionOptionOneText={questions[qid].optionOne.text}
            userName={users[questions[qid].author].name}
            userAvatar={users[questions[qid].author].avatarURL}
            flag={false} />)
    })

    const panes = [
        { menuItem: `UnAnswered Questions {${qCardsUnAnswered.length}}`, render: () => <Tab.Pane> {qCardsUnAnswered}</Tab.Pane> },
        { menuItem: `Answered Questions {${qCardsAnswered.length}}`, render: () => <Tab.Pane>{qCardsAnswered}</Tab.Pane> }
    ]
    return (
        <>
            <NavBar />
            <Container>
                <Tab panes={panes} />
            </Container>
        </>
    )
}
export default Home