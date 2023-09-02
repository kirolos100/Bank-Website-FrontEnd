import React, { useState } from "react"
import HeadTitle from "../../Common/HeadTitle/HeadTitle"
import "./design.css"

const Register = () => {
  const [name, setName] = useState("")
  const [account, setAccount] = useState("")
  const [routing, setRouting] = useState("")
  const [amount, setAmount] = useState("")

  const [recValue, setRecValue] = useState([])
  const submitForm = (e) => {
    e.preventDefault()
    const newValue = { name: name, account:account, routing:routing, amount:amount }

    setRecValue([...recValue, newValue])
    console.log(newValue)

    setName("")
    setAccount("")
    setRouting("")
    setAmount("")
  }
  return (
    <>
      <HeadTitle />
      <section className='forms top'>
        <div className='container'>
          <div className='sign-box'>
            <p>Please Fill the required information to complete the tranfer correctly.</p>
            <form action='' onSubmit={submitForm}>
              <input type='text' name='name' value={name} onChange={(e) => setName(e.target.value)} placeholder='Recipient Name' required />
              <input type='number' name='account' value={account} onChange={(e) => setAccount(e.target.value)} placeholder='His Bank Account ' required />
              <input type='number' name='routing' value={routing} onChange={(e) => setRouting(e.target.value)} placeholder='His Bank Routing Number' required />
              <input type='number' name='amount' value={amount} onChange={(e) => setAmount(e.target.value)} placeholder='The Amount Transfered' required />

              <button type='submit' className='primary-btn'>
                Submit
              </button>
            </form>
          </div>
        </div>
      </section>

      <section className='show-data'>
        {recValue.map((cureentValue) => {
          return (
            <>
              <div className='sign-box'>
                <h1>The Amount Required was Trasfered Successfully</h1>
                <h3>
                  Name of the recipient : <p>{cureentValue.name}</p>
                </h3>
                <h3>
                  The Recipient Bank Account : <p>{cureentValue.account}</p>
                </h3>
                <h3>
                  The Routing Bank Number : <p>{cureentValue.routing}</p>
                </h3>
                <h3>
                  The Amount Transfered : <p>{cureentValue.amount}</p>
                </h3>
              </div>
            </>
          )
        })}
      </section>
    </>
  )
}

export default Register
