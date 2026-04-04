import Nav from "./components/Nav"
import Nav1 from "./components/Nav1.js"
import "./components/Nav.css"
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.js"
import Abouthero from "./components/Abouthero.js"
import Card from "./components/Card.js"
import Frequent from "./components/Frequent.js"
import Feedback from "./components/Feedback.js"
import Form from "./components/Form.js"
import Footer from "./components/Footer.js"
export default function About(){
    return(
        <div>
            <Nav></Nav>
            <Nav1></Nav1>
            <Abouthero></Abouthero>
            <Card></Card>
            <Frequent></Frequent>
            <Feedback></Feedback>
            <Form></Form>
            <Footer></Footer>
        </div>
    )
}