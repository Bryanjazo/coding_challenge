import React, {useState} from 'react'
import {useSelector, useDispatch} from 'react-redux'

const handleChargeFunc = (amount, details) => {
  let sortedDetails = details.slice().sort(function (a, b) {
  	let dateA = new Date(a.timestamp),  dateB = new Date(b.timestamp)
  	return dateA - dateB
  });

  let amountNum = parseInt(amount)
  let newArr = []
  let newObj = {}
  for(let i = 0; i < sortedDetails.length; i++){
    if(sortedDetails[i].points < 0 && sortedDetails[i].payer === sortedDetails[i + 1].payer){
      sortedDetails[i] = {id: sortedDetails[i].id,
        payer: sortedDetails[i].payer ,
        points: sortedDetails[i].points + sortedDetails[i + 1].points,
        timestamp: sortedDetails[i].timestamp}
        sortedDetails.splice(i+1,1)
        console.log(sortedDetails, '=======')
    }

  }





  console.log(sortedDetails)

 // amount = 5000
 // user points = 200
 // amount = 4800
 // user2 = 100
 // amount = 4700
 // sortedDetails[i].points = Dannon points 100



 let subtracted;
 let arr = []
 let tempNum = amountNum
 let totalAmount = 0

for(let i = 0; i < sortedDetails.length ; i++){
  if(totalAmount < 0){
    break
  }
  totalAmount =  tempNum - sortedDetails[i].points
  tempNum = totalAmount

  if(sortedDetails[i].points < totalAmount){

  sortedDetails[i] = {id: sortedDetails[i].id,
      payer: sortedDetails[i].payer ,
      points: 0,
      timestamp: sortedDetails[i].timestamp}
      console.log(sortedDetails[i])
    }

  if(sortedDetails[i].points > totalAmount){

    sortedDetails[i] = {id: sortedDetails[i].id,
        payer: sortedDetails[i].payer ,
        points:  Math.abs(totalAmount),
        timestamp: sortedDetails[i].timestamp}
        console.log(sortedDetails[i])
  }
  console.log(totalAmount,tempNum,sortedDetails)

}

  updateUser(sortedDetails)

}

const  updateUser = (arr) =>{
  for(let i = 0; i < arr.length; i++){
    fetch()
  }
}

const Charge = () =>{
  const {userDetails} = useSelector((state) => state.basket)
  const [amount, setAmount] = useState(0)

  const handleSubmit = (e) => {
    e.preventDefault()
    handleChargeFunc(amount,userDetails)
  }

  return(
    <div>
      <h1>Charge Points</h1><br></br>
      <form onSubmit={handleSubmit}>
      <p>Input amount</p>
      <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)}/>
      <button type="submit">Charge {amount}</button>
      </form>

    </div>
  )
}

export default Charge;
