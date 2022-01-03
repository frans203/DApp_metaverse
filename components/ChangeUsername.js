import {useMoralis} from 'react-moralis'
import {useState} from 'react'
function ChangeUsername() {
    const {setUserData, isUserUpdating, userError, user} = useMoralis()
    //create a modal 
    const setUsername = () => {
        const username = prompt(`Enter your new Username (current: ${user.getUsername()
        })`)

        if(!username) return

        setUserData({
            username,

        })
    }
    return (
        <div className="text-sm absolute top-5 right-5">
            <button 
            onClick={setUsername}
            disabled={isUserUpdating}
            className={`transition-all duration-300 hover:text-green-200 ${isUserUpdating &&"opacity-20"}`}>Change your Username</button> 

        </div>
    )
}

export default ChangeUsername
