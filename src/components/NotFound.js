import { Image, Container } from 'semantic-ui-react'
import NavBar from './NavBar'

const NotFound = () => {
    return (
        <>
            <NavBar />
            <Container>
                <Image src='https://i.stack.imgur.com/6M513.png' fluid />
            </Container>
        </>
    )
}
export default NotFound