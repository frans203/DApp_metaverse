import Head from 'next/head'
import Login from '../components/Login'
import Header from '../components/Header'
import {useMoralis} from 'react-moralis'
import Messages from '../components/Messages'
import {BiLogOut} from 'react-icons/bi'
export default function Home() {
  const {isAuthenticated, logout} = useMoralis()

  if(!isAuthenticated) {
    return <Login/>
  }
  return (
    <div className="h-screen overflow-y-auto bg-gradient-to-b from-black to-blue-900">
      <Head>
        <title>Metaverse Challenge</title>
        <link rel="icon" href="/favicon.icon"/>
      </Head>

    
      <div className='max-w-screen-2xl mx-auto '>
        <Header/>
        <Messages/>
      </div>
  
     <button className='flex items-center space-x-2 text-white top-4 z-50 sticky lg:bottom-2 hover:scale-125 transition-all duration-300 transform lg:left-2 left-2 '  onClick={logout}> <BiLogOut className="w-5 h-5" />Logout</button>
    </div>
  )
}
