import { useSelector } from 'react-redux'
import { Card, Container } from 'semantic-ui-react'
import NavBar from './NavBar'
import ShowLeaderBoardCard from './ShowLeaderBoardCard'

const LeaderBoard = () => {
    const users = useSelector(state => state.users);

    let leaderBoard = []
    let leaderBoardCards = []

    for (let userID in users) {
        const temp = {
            uID: userID,
            uName: users[userID].name,
            avatar: users[userID].avatarURL,
            qCount: users[userID].questions.length,
            aCount: Object.keys(users[userID].answers).length,
            total: users[userID].questions.length + Object.keys(users[userID].answers).length
        }
        leaderBoard.push(temp)
    }
    // sorting users descendingly  by the sum of their questions created and answers provided 
    leaderBoard.sort((a, b) => a.total < b.total ? 1 : -1)
    leaderBoard.forEach((lb) => leaderBoardCards.push(<ShowLeaderBoardCard key={lb.uID} details={lb} />))
    return (
        <>
            <NavBar />
            <Container>
                <Card.Group>{leaderBoardCards}</Card.Group>
            </Container>
        </>
    )
}
export default LeaderBoard