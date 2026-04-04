import Nav from "./components/Nav"
import Nav1 from "./components/Nav1.js"
import "./components/Nav.css"
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.js"
import ServicesHero from "./components/Service-hero.js"
import Card from "./components/Card.js"
import Pet from "./components/Pet.js"
import Footer from "./components/Footer.js"
export default function Services(){
    return(
        <div>
            <Nav></Nav>
            <Nav1></Nav1>
            <ServicesHero></ServicesHero>
            <Card></Card>
            <Pet></Pet>
            <Pet></Pet>
            <Footer></Footer>
          
            
        </div>
    )
}