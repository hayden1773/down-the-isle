import React from 'react'

function Mail() {
    const [sent, setSent] = useState(false)
    const [text, setText] = useState("")
    const handleSend = async () => {
        try {
            await axios.post("http://localhost:3000/send_mail", {text})
        } catch (error) {
            console.log(error)
        }
    }
  return (
    <div className="mail">
            {!sent ? (
            <form onSubmit={handleSend}>
            <input type="text" value={text} onChange={(e)=>setText(e.target.value)}/>
            <button type="submit">Send Email</button>
        </form>
        ):(
            <h1>Email Sent!</h1>
        )}
    </div>
  )
}

export default Mail