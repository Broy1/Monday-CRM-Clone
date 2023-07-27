import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Nav from './components/Nav'
import Dashboard from './pages/Dashboard';
import TicketPage from './pages/TicketPage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      {/* nav here so no matter the route its displayed */}
      <Nav />
        <Routes>
          {/* if we go to the / page we get dashboard*/}
          <Route path='/' element={<Dashboard/>}/>
          <Route path='/ticket' element={<TicketPage/>}/>
          {/* we pass some id, enable edit mode */}
          <Route path='/ticket/:id' element={<TicketPage editMode={true}/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
