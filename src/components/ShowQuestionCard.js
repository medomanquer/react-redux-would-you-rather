import PropTypes from 'prop-types'
import { Link } from "react-router-dom";
import { Image, Button, Card } from 'semantic-ui-react'
const ShowQuestionCard = (props) => {
    //reading needed props
    const { userName, userAvatar, questioID, questionOptionOneText, flag } = props
    return (
        <Card key={questioID} fluid>
            <Card.Content>
                <Image
                    floated='left'
                    size='mini'
                    src={userAvatar}
                />
                <Card.Header>{userName} asks:</Card.Header>
                <Card.Meta>Would You Rather?</Card.Meta>
                <Card.Description>
                    <strong>{questionOptionOneText}</strong>
                </Card.Description>
            </Card.Content>
            <Card.Content extra>
                <Button basic color='green'>
                    <Link to={`/questions/${questioID}`}> {flag === true ? 'Show Votes' : 'Answer Question'}</Link>
                </Button>
            </Card.Content>
        </Card>
    )
}
// prop types for props validation
ShowQuestionCard.propTypes = {
    userName: PropTypes.string.isRequired,
    userAvatar: PropTypes.string.isRequired,
    questioID: PropTypes.string.isRequired,
    questionOptionOneText: PropTypes.string.isRequired,
    flag: PropTypes.bool.isRequired
}
export default ShowQuestionCard