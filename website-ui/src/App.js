import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import HomePage from './components/HomePage';
import SkillsPage from './components/SkillsPage';
import EducationPage from './components/EducationPage';
import ProjectPage from './components/ProjectPage';
import Footer from './components/Footer';
import ContactPage from './components/ContactPage';
import { ParallaxProvider } from 'react-scroll-parallax';
import backgroundImg from './components/images/moon-fullscreen.jpg'


function App() {
    return (
      <>
      <div className="App">
        <ParallaxProvider>
          <HomePage></HomePage>
        </ParallaxProvider>
      </div>
      <SkillsPage></SkillsPage>
      <EducationPage></EducationPage>
      <ProjectPage></ProjectPage>
      <ContactPage></ContactPage>
      <Footer></Footer>
      </>
    );
}

export default App