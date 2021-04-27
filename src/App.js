import React, { useEffect } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { AuthProvider, useAuth } from '@praxis/component-auth'
import Header from './components/Header'
import Welcome from './Welcome'
import CustomChatbot from './chatbot/CustomChatbot'

const Main = () => {
  const auth = useAuth() // connect to the \`AuthContext\` provided by \`App\` below, using a React hook.
  const { isAuthorized, login, logout, session } = auth // assign variables of same name as properties off of \`auth\`

  useEffect(() => {
    login()
  })

  return (
    <>
      {isAuthorized() ? ( //conditionally render either a login button or a welcome / logout.
        <>
          <Header userName={[session.userInfo.firstName, logout]} />
          <Welcome />
          <CustomChatbot username = {session.userInfo.firstName}/>
        </>
      ) : (
        <React.Fragment></React.Fragment>
      )}
    </>
  )
}

const App = () => {
  return (
    <AuthProvider
      clientId="psc_npe_im"
      loginRedirect={`${window.location.href}auth/login`}
    >
      <Router>
        <Main />
      </Router>
    </AuthProvider>
  )
}
export default App
