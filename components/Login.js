import Image from 'next/image'
import {useMoralis} from 'react-moralis'
function Login() {
    const {authenticate} = useMoralis();
    return (
        <div className="bg-black relative text-white h-screen">
            <div className='flex flex-col absolute z-50 h-screen w-full justify-center items-center text-black space-y-4'>
                <Image src="https://links.papareact.com/3pi"
                height={200} 
                width={200}
                className='rounded-full object-cover '
                />
                <button onClick={authenticate} className='bg-yellow-500 rounded-lg p-5 font-bold animate-pulse'>Login to the METAVERSE</button >
                <h3 
                className='text-center bg-gray-900 p-2 rounded-full text-md font-bold italic drop-shadow-md text-white'>
                    To enter this metaverse you need to have a 
                    <a className="text-center cursor-pointer text-purple-500" 
                    href="https://metamask.io/">
                        {' '} MetaMask {' '}
                    </a> 
                    account and extension</h3>
            </div>

            <div>
                <Image src="https://i.imgur.com/WYAjt3T.jpeg" 
                objectFit='cover'
                layout="fill"
                />
            </div>

        </div>
    )
}

export default Login
