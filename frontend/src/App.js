import Header from './components/Header';
import Footer from './components/Footer';
import {Container} from 'react-bootstrap';

const App =() => {
  return (
    <>

     <Header/>
     {/* py is padding on the y position. This gave padding between the main tag and the header */}
     <main className="py-3">
       <Container>
       <h1>Welcome To Esther Prep</h1>
       </Container>
     </main>
     
     <Footer/>
    </>
  );
}

export default App;
