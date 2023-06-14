import Messenger from "./components/messenger"
import { GoogleOAuthProvider } from '@react-oauth/google'
import AccountProvider from "./context/AccountProvider";

function App() {
  
  const clientId =  '299821271033-rav9himsuu20sddfi0bj4jupn4uj7413.apps.googleusercontent.com'
  return (
    <GoogleOAuthProvider clientId = {clientId} >
      <AccountProvider>
        <Messenger />
      </AccountProvider>      
    </GoogleOAuthProvider>
  );
}

export default App;
