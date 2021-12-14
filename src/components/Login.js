import { useSelector, useDispatch } from 'react-redux'
import { Dropdown, Card } from 'semantic-ui-react'
import { setAuthenticatedUser } from '../actions/authenticatedUser'

const Login = () => {
    const dispatch = useDispatch()
    const users = useSelector(state => state.users);
    let usersOptions = []
    for (let userID in users) {
        usersOptions.push({
            key: userID,
            text: users[userID].name,
            value: userID,
            image: { avatar: true, src: users[userID].avatarURL }
        })
    }
    const extra = <>
        <Dropdown
            placeholder='Select a user to simulate login'
            fluid
            selection
            options={usersOptions}
            onChange={(e, data) => {
                dispatch(setAuthenticatedUser(data.value))
            }}
        />
    </>
    return (
        <Card
            image='https://cdn-icons-png.flaticon.com/512/149/149071.png'
            header='Authuenticatioon Required'
            description='Choose a user from the dropdown below to proceed'
            extra={extra}
            className='centered'
        />
    )
}
export default Login
