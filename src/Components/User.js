import React from 'react'


function User(props){

  return(
    <div>
      <p>Name: {props.payer}</p>
      <p>Points: {props.points}</p>
      <p>Time: {props.timestamp}</p><br></br>

    </div>
  )

}

export default User;
