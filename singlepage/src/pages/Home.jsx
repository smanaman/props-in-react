import Navbar from "../components/Navbar"
import Card from "../components/Card"
import Hero from "../components/Hero"
import './Home.css'
import Footer from "../components/Footer"
function Home() {
  
  return(
    <>
    <Navbar/>
    <Hero/>
    
    
   <div className="card-sec">
    <Card name=" India Gate" pic="/place-1.jpg"/>
    <Card name="Taj Mahal" pic="/place-2.webp"/>
    <Card name="Indonesia" pic="/place-3.jpg"/>
    <Card name="Eiffel tower" pic="/place-4.jpg"/>
    </div>

    <Footer/>
    </>
   
  )

}
export default Home