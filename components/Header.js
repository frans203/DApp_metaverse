import Image from 'next/image'
import {useMoralis} from 'react-moralis'
import Avatar from './Avatar'
import ChangeUsername from './ChangeUsername'
function Header() {
    const {user} = useMoralis()
    return (
        <div className='text-blue-500 sticky top-0 p-5 z-50 bg-gray-900 shadow-2xl'>
            <div className='grid grid-cols-5 lg:grid-cols-6 items-center'>
                <div className='relative h-24 w-24 mx-auto hidden lg:inline-grid'>
                    <Image src="https://links.papareact.com/3pi" layout="fill" className='rounded-full' objectFit='cover'/>
                </div>
               <div className='col-span-4 text-left lg:text-center'>
                <div className="h-48 w-48 relative lg:mx-auto border-8 border-blue-500 rounded-full ">
                    <Avatar/>
                </div>

                <h1 className='text-3xl '>Welcome to SAINTVERSE</h1>
                <h2 className='text-5xl font-bold truncate'>{user.getUsername()}</h2>
                <ChangeUsername/>
                </div>
            </div>
        </div>
    )
}

export default Header
