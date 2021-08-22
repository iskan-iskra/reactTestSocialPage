import React from 'react';
import NavBar from './Components/NavBar/NavBar';
import UserPage from './Pages/UserPage';
import './Style/app.scss';
import './Style/AppVariables.scss'

function App() {
  return (
    <div className="App">
      <NavBar/>
      <UserPage/>
    </div>
  );
}

export default App;
