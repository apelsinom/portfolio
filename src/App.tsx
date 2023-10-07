import './App.css';
import {Header} from "./layout/header/Header";
import {Main} from "./layout/sections/main/Main";
import {Skills} from "./layout/sections/skills/Skills";
import {Works} from "./layout/sections/works/Works";
import {AboutMe} from "./layout/sections/about-me/About-me";
import {Contact} from "./layout/sections/contact/Contact";
import {Slogan} from "./layout/sections/slogan/Slogan";
import {Footer} from "./layout/footer/Footer";



function App() {
    return (
        <div className="App">
            <Header/>
            <Main/>
            <Skills/>
            <Works/>
            {/*<AboutMe/>*/}
            {/*<Contact/>*/}
            {/*<Slogan/>*/}
            {/*<Footer/>*/}
        </div>
    );
}

export default App;

