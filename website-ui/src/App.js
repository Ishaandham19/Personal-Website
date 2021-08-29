import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import HomePage from './components/HomePage';
import SkillsPage from './components/SkillsPage';
import EducationPage from './components/EducationPage';
import ProjectPage from './components/ProjectPage';
import Footer from './components/Footer';
import ContactPage from './components/ContactPage';


function App() {

  return (
    <>
    <div className="App">
      <HomePage></HomePage>
      <SkillsPage></SkillsPage>
      <EducationPage></EducationPage>
      <ProjectPage></ProjectPage>
      <ContactPage></ContactPage>
      <Footer></Footer>
    </div>

    </>
  );
}

export default App;
