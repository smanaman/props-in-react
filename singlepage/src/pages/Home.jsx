import Navbar from "../components/Navbar"
import Card from "../components/Card"
import Hero from "../components/Hero"
import './Home.css'
import Footer from "../components/Footer"
function Home() {
  const carddata=[
    {
      name:" India Gate",
      pic:"/place-1.jpg",
      dis:'The India Gate is a war memorial located near the Rajpath'

    },
    {
      name:" Taj Mahal",
      pic:"/place-2.webp",
      dis:'The Taj Mahal is an ivory-white marble mausoleum '
    },
    {
      name:" Indonesia",
      pic:"/place-3.jpg",
      dis:'Indonesia is the worlds largest archipelagic state'
    },
    {
      name:" eiffel tower",
      pic:"/place-4.jpg",
      dis:'The tower is 330 metres (1,083 ft) tall'
    },
    {
      name:" Petra",
      pic:"/place-5.webp",
      dis:'Petra is a symbol of Jordans.Jordans most-visited tourist attraction'
    },
    {
      name:" The Colosseum",
      pic:"/place-6.avif",
      dis:'The Colosseum is an elliptical amphitheatre in the centre of the city of Rome'
    },
    {
      name:"Great Pyramid",
      pic:"/place-7.jpg",
      dis:'The Great Pyramid of Giza is the largest Egyptian pyramid'
    },
    {
      name:"Christ the Redeemer",
      pic:"/place-8.avif",
      dis:'a monumental statue of Jesus Christ in Rio de Janeiro, Brazil'
    }
  ]

  
  return(
    <>
    <Navbar/>
    <Hero/>
    
    
   <div className="card-sec">
{carddata.map((val,index)=>{


return <Card name={val.name} pic={val.pic} dis={val.dis}/>


})

}
   
    </div>

    <Footer/>
    </>
   
  )

}
export default Home