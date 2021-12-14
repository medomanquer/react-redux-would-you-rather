import React from "react";
import { useSelector, useDispatch } from 'react-redux'
import { Link, useNavigate } from "react-router-dom";
import { Image, Button } from 'semantic-ui-react'
import { setAuthenticatedUser } from '../actions/authenticatedUser'
const NavBar = () => {
    // get needed hooks
    const navigate = useNavigate();
    const dispatch = useDispatch()
    // read from store
    const users = useSelector(state => state.users);
    const authedUser = useSelector(state => state.authenticatedUser);

    const currentUser = users[authedUser].name;
    const userAvatar = users[authedUser].avatarURL;

    return (
        <>
            <ul>
                <li> <Link to='/'>Home</Link></li>
                <li><Link to='/add'>New Question</Link></li>
                <li><Link to='/leaderboard'>Leaderboard</Link></li>
                <li >
                    <span>Welcome, {currentUser} </span>
                    <Image
                        floated='left'
                        size='mini'
                        src={userAvatar}
                    />

                    <Button icon='sign out alternate'
                        onClick={() => {
                            dispatch(setAuthenticatedUser(null))
                            navigate("/", { replace: true });
                        }} />
                </li>
            </ul>
            <hr />
        </>
    )
}
export default NavBar;