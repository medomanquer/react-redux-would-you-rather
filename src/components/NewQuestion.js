import { useState } from 'react'
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux'
import { Form, Button, Card, Container } from 'semantic-ui-react'
import { handleAddQuestion } from '../actions/shared'
import NavBar from './NavBar'

const NewQuestion = () => {
    // init state for controlled component
    const [optionOne, setOptionOne] = useState('');
    const [optionTwo, setOptionTwo] = useState('');

    const authedUser = useSelector(state => state.authenticatedUser)
    // define hooks
    const dispatch = useDispatch()
    const navigate = useNavigate();

    const extra = <>
        <Form>
            <Form.Field>
                <label>Option One</label>
                <input placeholder='Option One' value={optionOne} onChange={(e) => setOptionOne(e.target.value)} />
            </Form.Field>
            <Form.Field>
                <label>Option Two</label>
                <input placeholder='Option Two' value={optionTwo} onChange={(e) => setOptionTwo(e.target.value)} />
            </Form.Field>
            <Button primary className='fluid ui button' onClick={(e) => {
                e.preventDefault()
                dispatch(handleAddQuestion(optionOne, optionTwo, authedUser))
                setTimeout(() => {
                    navigate('/', { replace: true });
                }, 500);
            }}>Save Question</Button>
        </Form>
    </>
    return (
        <>
            <NavBar />
            <Container>
                <Card
                    header='New Question'
                    description='Would You Rather?'
                    extra={extra}
                    className='centered fluid'
                />
            </Container>
        </>
    )
}
export default NewQuestion