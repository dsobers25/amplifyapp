import logo from './logo.svg';
import './App.css';
import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>The Black Man is God</h1> 
      </header>
      <AmplifySignOut />
    </div>
  );
}

export default withAuthenticator(App);