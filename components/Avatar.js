import Image from 'next/image';
import {useMoralis} from 'react-moralis'

function Avatar({username, logoutOnPress}) {
    const {user, logout} = useMoralis();
    return (
        <Image 
        className='rounded-full bg-black cursor-pointer hover:opacity-80 transition-all duration-300 transform hover:-rotate-12 '
        src={`https://avatars.dicebear.com/api/miniavs/${username || user.get('username')}.svg`} 
        layout="fill"
        onClick={() => logoutOnPress && logout()}
        />
    )
}

export default Avatar
