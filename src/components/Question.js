import { useParams } from 'react-router'
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux'

import { Image, Card, Radio, Form, Progress, Container } from 'semantic-ui-react'

import { handleAddVote } from '../actions/shared'

import NotFound from './NotFound'
import NavBar from './NavBar'

const Question = () => {
    //define hooks
    const navigate = useNavigate();
    const dispatch = useDispatch()
    // read from the store
    const authedUser = useSelector(state => state.authenticatedUser)
    const users = useSelector(state => state.users);
    const questions = useSelector(state => state.questions);

    const { id } = useParams()
    if (questions[id] === undefined) return (<NotFound />)
    else {
        const userName = users[questions[id].author].name
        const userAvatar = users[questions[id].author].avatarURL;

        const questionOptionOneText = questions[id].optionOne.text
        const questionOptionTwoText = questions[id].optionTwo.text

        const votesOptionOne = questions[id].optionOne.votes.length
        const votesOptionTwo = questions[id].optionTwo.votes.length

        const totalVotes = votesOptionOne + votesOptionTwo

        if (users[authedUser].answers[id] !== undefined) {
            const userVoteOption = (users[authedUser].answers[id])
            return (
                <>
                    <NavBar />
                    <Container>
                        <Card key={id} className="centered fluid">
                            <Card.Content>
                                <Image
                                    floated='left'
                                    size='mini'
                                    src={userAvatar}
                                />
                                <Card.Header>{userName} Asks</Card.Header>
                                <Card.Meta>Would You Rather?</Card.Meta>
                                <Card.Description>
                                    <Container>
                                        {questionOptionOneText}  {userVoteOption === 'optionOne' && ' ---- You voted here'}
                                        <Progress percent={(votesOptionOne / totalVotes) * 100} color='green' progress>[{votesOptionOne} out of {totalVotes}]</Progress>

                                        {questionOptionTwoText} {userVoteOption === 'optionTwo' && ' ---- You voted here'}
                                        <Progress percent={(votesOptionTwo / totalVotes) * 100} color='green' progress>[{votesOptionTwo} out of {totalVotes}] </Progress>
                                    </Container>
                                </Card.Description>
                            </Card.Content>
                        </Card>
                    </Container>
                </>
            )
        } else {
            return (
                <>
                    <NavBar />
                    <Container>
                        <Card key={id} className="centered fluid">
                            <Card.Content>
                                <Image
                                    floated='left'
                                    size='mini'
                                    src={userAvatar}
                                />
                                <Card.Header>{userName} Asks</Card.Header>
                                <Card.Meta>Would You Rather?</Card.Meta>
                                <Card.Description>
                                    <Form>
                                        <Form.Field>
                                            <Radio name='radioGroup' label={questionOptionOneText} value='optionOne'
                                                onChange={() => {
                                                    dispatch(handleAddVote(authedUser, id, 'optionOne'))
                                                    setTimeout(() => {
                                                        navigate(`/questions/${id}`, { replace: true });
                                                    }, 200);
                                                }} />
                                        </Form.Field>
                                        <Form.Field>
                                            <Radio name='radioGroup' label={questionOptionTwoText} value='optionTwo'
                                                onChange={() => {
                                                    dispatch(handleAddVote(authedUser, id, 'optionTwo'))
                                                    setTimeout(() => {
                                                        navigate(`/questions/${id}`, { replace: true });
                                                    }, 200);
                                                }} />
                                        </Form.Field>
                                    </Form>
                                </Card.Description>
                            </Card.Content>
                        </Card>
                    </Container>
                </>
            )
        }
    }
}
export default Question