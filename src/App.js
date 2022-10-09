import CenterBlock from './componets/centerblock/centerblock';
import Header from './componets/header/header';

import './App.css';

import Startedblock from './componets/startedblock/startedblock';
import Footer from './componets/footer/footer';

function App() {
  return (
    <div className='App'>
      <Header />
      <CenterBlock />
   
      <Startedblock />
      <Footer />

    </div>
  );
}

export default App;
