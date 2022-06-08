import { BrowserRouter } from 'react-router-dom';
import Header from './components/Header/Header';
import Main from './components/Main/Main';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Main />
    </BrowserRouter>
  );
};

export default App;
