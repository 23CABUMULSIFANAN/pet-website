import Nav from "./components/Nav"
import Nav1 from "./components/Nav1.js"
import "./components/Nav.css"

import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.js"
import Hero from "./components/Hero.js"
import Card from "./components/Card.js"
import "./components/Home.css"
import "./components/Card.css"
import Frequent from "./components/Frequent.js"
import "./components/Frequent.css"
import Feedback from "./components/Feedback.js"
import Plan from "./components/Plan.js"
import Gallery1 from "./components/Gallery-sec.js"
import Form from "./components/Form.js"
import Footer from "./components/Footer.js"
export default function Home(){
    return(
        <div>
            <Nav></Nav>
            <Nav1></Nav1>
            <Hero></Hero>
            <Card></Card>
            <Frequent></Frequent>
            <Feedback></Feedback>
            <Plan></Plan>
            <Gallery1></Gallery1>
            <Form></Form>
            <Footer></Footer>
        </div>
    )
}