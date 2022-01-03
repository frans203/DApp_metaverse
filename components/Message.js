import {useMoralis, useMoralisQuery} from "react-moralis"
import Avatar from "./Avatar"
import TimeAgo from 'timeago-react'

function Message({message}) {
    const {user} = useMoralis()

    const isUserMessage = message.get("ethAddress") === user.get("ethAddress")
    return (
        <div className={`flex items-end space-x-2 relative ${isUserMessage && "justify-end"}`}>

            <div className={`relative h-8 w-8 ${isUserMessage && "order-last ml-2"}`}>
                <Avatar username={message.get("username")}/>
            </div>
            <div className={`text-lgflex space-x-4 p-3 rounded-lg ${isUserMessage? "rounded-br-none text-black bg-white": "rounded-bl-none text-gray-800 bg-blue-400"}`}>
              <p >{message.get("message")}</p>
            </div>
            <TimeAgo className={`italic text-gray-400 text-[10px] ${isUserMessage && "order-first pr-2"}`}datetime={message.createdAt} />
            <p className={`absolute -bottom-6 font-bold text-md ${isUserMessage ? 'text-gray-900' : "text-white"}`}> {message.get("username")}</p>

        </div>
    )
}

export default Message
