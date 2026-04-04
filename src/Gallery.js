import Nav from "./components/Nav"
import Nav1 from "./components/Nav1.js"
import "./components/Nav.css"
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.js"

import GalleryHero from "./components/GalleryHero.js"
import Gallery1 from "./components/Gallery-sec.js"
import Footer from "./components/Footer.js"
export default function Gallery(){
    return(
        <div>
            <Nav></Nav>
            <Nav1></Nav1>
            <GalleryHero></GalleryHero>
            <Gallery1></Gallery1>
            <Footer></Footer>
        </div>
    )
}