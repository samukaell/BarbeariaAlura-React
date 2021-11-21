import './styles/reset.css'
import './styles/global.css'
import {Header} from './components/Header';
import {Main} from './components/Main';
import {Footer} from './components/Footer';

function Home() {
  return (
    <div className="Home">
     <Header/>
     <Main/>
     <Footer/>
    </div>
  );
}

export default Home;