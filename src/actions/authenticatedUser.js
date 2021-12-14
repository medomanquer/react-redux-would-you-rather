export const SET_AUTHENTICATED_USER = 'SET_AUTHENTICATED_USER';

export function setAuthenticatedUser(userID) {
    return {
        type: SET_AUTHENTICATED_USER,
        userID
    }
}
