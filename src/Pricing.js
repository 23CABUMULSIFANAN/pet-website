import Nav from "./components/Nav"
import Nav1 from "./components/Nav1.js"
import "./components/Nav.css"
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.js"
import PriceHero from "./components/PriceHero.js"
import Packages from "./components/Packages.js"
import Footer from "./components/Footer.js"
import Form from "./components/Form.js"
export default function Pricing(){
    return(
        <div>
            <Nav></Nav>
            <Nav1></Nav1>
            <PriceHero></PriceHero>
            <Packages></Packages>
            <Form></Form>
            <Footer></Footer>
        </div>
    )
}