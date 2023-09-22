import { ChatEngine } from 'react-chat-engine';
import './App.css';
import ChatFeed from './components/ChatFeed';
import LoginForm from './components/LoginForm';

function App() {
  if (!localStorage.getItem('username')) return <LoginForm />;
  return (
    <div className="App">
      <ChatEngine
        height="100vh"
        projectID="5dff8c69-c31f-48d9-a30a-1983315a101d"
        userName="Sandeep"
        userSecret="Sandeep@2000 "
        renderChatFeed={ (chatAppProps) => <ChatFeed{...chatAppProps} /> } 
        onNewMessage={ ()=>new Audio('https:/chat-engine-assests.s3.amazonaws.com/click.mp3')}


      />


    </div>
  );
}

export default App;
