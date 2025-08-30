
import './App.css';
import Contacts from './pages/contactsPage/Contacts';
import Header from './pages/header/Header';
import Works from './pages/works/Works';
function App() {
  return (
    <div className="App">
      <Header/>
      <Works/>
      <Contacts/>
    </div>
  );
}

export default App;
