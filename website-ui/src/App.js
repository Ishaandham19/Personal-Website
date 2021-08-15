import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import HomePage from './components/HomePage';
import SkillsPage from './components/SkillsPage';
import ProjectPage from './components/ProjectPage';
import Footer from './components/Footer';


function App() {

  return (
    <>
    <div className="App">
      <HomePage></HomePage>
      <SkillsPage></SkillsPage>
      <ProjectPage></ProjectPage>
      <Footer></Footer>
    </div>

    </>
  );
}

export default App;
