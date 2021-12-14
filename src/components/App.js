import { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'

import 'semantic-ui-css/semantic.min.css'

import { handleInitialData } from '../actions/shared'

import NotFound from './NotFound'
import Login from './Login'
import NewQuestion from './NewQuestion'
import Question from './Question';
import Home from './Home'
import Leaderboard from './Leaderboard';

function App() {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(handleInitialData())
  })
  const authedUser = useSelector(state => state.authenticatedUser)
  return (
    <>
      {!authedUser ? <Login /> :
        <div className="App">
          <Routes>
            <Route exact path='/' element={<Home />} />
            <Route path='/questions/:id' element={<Question />} />
            <Route path='/questions/unknonwn_id' element={<NotFound />} />
            <Route exact path='/leaderboard' element={<Leaderboard />} />
            <Route exact path='/add' element={<NewQuestion />} />
            <Route path='*' element={<NotFound />} />
          </Routes>
        </div>}
    </>
  );
}
export default App;
