import Nav from "./components/Nav"
import Nav1 from "./components/Nav1.js"
import "./components/Nav.css"
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.js"
import ContactHero from "./components/ContactHero.js"
import ContactForm from "./components/ContactForm.js"
import Footer from "./components/Footer.js"
import Form from "./components/Form.js"
export default function Contact(){
    return(
        <div>
            <Nav></Nav>
            <Nav1></Nav1>
            <ContactHero></ContactHero>
            <ContactForm></ContactForm>
            <Form></Form>
            <Footer></Footer>
        </div>
    )
}