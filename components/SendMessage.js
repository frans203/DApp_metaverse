import {useMoralis} from 'react-moralis'
import {useState} from 'react'


const SendMessage = ({endOfMessagesRef}) => {
    const {user, Moralis} = useMoralis()
    const [message, setMessage] = useState('')
    const sendMessage = (e) => {
        e.preventDefault()
        if(!message) return

        const Messages = Moralis.Object.extend("Messages")
        const messages = new Messages()

        messages.save({
            message: message,
            username: user.getUsername(),
            ethAddress: user.get('ethAddress')
        }).then(
            (message) => {
                
            }, 
            (error) => {
                console.log(error.message)
            }
        )

        endOfMessagesRef.current.scrollIntoView({behavior:"smooth"})
        setMessage("")

    }
    return (
        <form 
        onSubmit={sendMessage}
        className='flex w-11/12 fixed bottom-10 bg-black opacity-80 px-6 py-4 max-w-2xl shadow-2xl rounded-full border-2 border-gray-400'>
           <input 
           type="text " 
           value={message}
           onChange={e => {
               setMessage(e.target.value)
           }}
           placeholder={`Enter a Message, ${user.getUsername()}`}
           className="outline-none flex-grow bg-transparent border-b text-white border-blue-400 placeholder-gray-500"/>
           <button 
           type="submit"
           onClick={sendMessage}>Send</button>
        </form>
    )
}

export default SendMessage
