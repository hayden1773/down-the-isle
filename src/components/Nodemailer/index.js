
import React,{useState} from 'react'
import axios from 'axios'
function SendingEmail() {
    const [sent, setSent] = useState(false)
    const [text, setText] = useState("")
    const handleSend = async () => {
        setSent(true)
        try {
            await axios.post("http://localhost:3000/mailer", {text})
        } catch (error) {
            console.log(error)
        }
    }
  return (
    <div className="container">
            {!sent ? (               
            <form onSubmit={handleSend}>
            <input type="text" value={text} onChange={(e)=>setText(e.target.value)}/>
            <button  onClick="" type="submit">Send Email</button>
            <h1>Hello</h1>
        </form>
        ):(
            <h1>Email Sent!</h1>
        )}
    </div>
  )
}

export default SendingEmail