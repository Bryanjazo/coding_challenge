import React, {useState,useEffect} from 'react'
import User from './User.js'
import Charge from './charge.js'
import {useSelector, useDispatch} from 'react-redux'


function Payers(){



  const {userDetails } = useSelector((state) => state.basket)

  console.log(userDetails)
  const users = userDetails.map(user => <User {...user}/>)
  return(
    <div>
    <h1 > Fetch Rewards Coding Exercise</h1><br></br>
      <div>
        {users}
      </div>
      <div>
      <Charge />
      </div>
    </div>
  )

}

export default Payers;
