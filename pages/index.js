import Head from 'next/head'
import Login from '../components/Login'
import Header from '../components/Header'
import {useMoralis} from 'react-moralis'
import Messages from '../components/Messages'
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
  
     <button onClick={logout}>Logout</button>
    </div>
  )
}
