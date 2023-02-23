import { useEffect, useState } from 'react'
// import { isValidToken } from './api'
// import { useContext } from 'react'
// import { Context } from '.'
import { observer } from 'mobx-react-lite'
import { useContext } from 'react'
import { Context } from '.'
import './App.css'
// import { AuthModal } from './components/AuthModal/AuthModal'
// import { CustomModal } from './components/CustomModal/CustomModal'
import { HeaderMenu } from './components/HeaderMenu/HeaderMenu'
import { MainPage } from './components/MainPage/MainPage'
import { check } from './api'
import { setTokenToLocalStore } from './helpers'
import { Spinner } from './components/Spinner/Spinner'
import jwtDecode from 'jwt-decode'

// import { deleteTokenFromLocalStore } from './helpers'
// import { RichTextEditor } from './components/RichTextEditor/RichEditor'

const App = observer(() => {
  const { user } = useContext(Context)
  const [loading, setLoading] = useState(true)

  useEffect(()=>{
    check().then(data=>{
      setTokenToLocalStore(data.token)
      user.setUser(jwtDecode(data.token))
      user.setIsAuth(true)
    }).finally(()=>setLoading(false))
  },[])

  if(loading) return <Spinner />


  return (
    <>
         {/* <RichTextEditor /> */}
      {/* <CustomModal/> */}
      <HeaderMenu />
      <MainPage />
    </>
  )
})

export default App
