import PropTypes from 'prop-types'
import { Image, Card } from 'semantic-ui-react'
const ShowLeaderBoardCard = (props) => {
    //reading needed props
    const { userName, avatar, qCount, aCount, total } = props.details
    return (
        <Card fluid>
            <Card.Content>
                <Image
                    floated='left'
                    size='mini'
                    src={avatar}
                />
                <Card.Header>{userName}</Card.Header>
                <Card.Meta>Score: {total}</Card.Meta>
                <Card.Description>
                    <strong>Questions Created:{qCount}</strong>
                    <br />
                    <strong>Answered Questions:{aCount}</strong>
                </Card.Description>
            </Card.Content>
            <Card.Content extra>
            </Card.Content>
        </Card>
    )
}
// prop types for props validation
ShowLeaderBoardCard.propTypes = {
    details: PropTypes.object.isRequired
}
export default ShowLeaderBoardCard