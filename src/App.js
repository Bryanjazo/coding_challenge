import React, {useEffect} from 'react'
import Payers from './Components/Payers'
import {useSelector, useDispatch} from 'react-redux'
import {setUserStatus} from './Reducer/UserReducer.js'

function App() {
  const dispatch = useDispatch()

  useEffect(() =>{
      dispatch(setUserStatus())
  },[])

  return (
    <div className="App">
      <Payers />
    </div>
  );
}

export default App;
