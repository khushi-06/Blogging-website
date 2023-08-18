import './App.css';

import Navbar from './componets/navbar';
import Login from './componets/loginpage';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <div style={{marginTop: 64}}>
      <Login/>
      </div>
      
      
    </div>
  );
}

export default App;
