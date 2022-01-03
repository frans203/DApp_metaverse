import { useRef } from 'react'
import {ByMoralis, useMoralis, useMoralisQuery} from 'react-moralis'
import Message from './Message'


//only show messages for the last 15 minutes
const MINS_DURATION = 15

import SendMessage from './SendMessage'
const Messages = () => {
    const {user} = useMoralis()
    const endOfMessagesRef = useRef(null)
    const {data, loading, error} = useMoralisQuery(
        'Messages',
        (query) => query
        .ascending('createdAt')
        .greaterThan("createdAt", new Date(Date.now() - 1000 * 60 * MINS_DURATION)),
        [],
        {
            live:true
        }
    )

    console.log(data)
    return (
        <div className="pb-56">
            <div className="my-5">
                <ByMoralis variant='dark' style={{marginRight: "auto", marginLeft:"auto"}}/>
            </div>

            <div className="space-y-10 p-4">
                {data.map(message => {
                    return <Message key={message.id} message={message}/>
                } )}
            </div>

            <div className="flex items-center justify-center">
                <SendMessage endOfMessagesRef={endOfMessagesRef}/>
            </div>

            <div ref={endOfMessagesRef} className="text-center text-lg text-gray-500 mt-5">
                <p>You're up to date {user.getUsername()}!</p>
            </div>
                
        </div>
    )
}

export default Messages
