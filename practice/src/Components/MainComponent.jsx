import React, { createContext } from 'react'
import SubComponent1 from './SubComponent1';
import "./Style.css"

const data = createContext();
const MainComponent = () => {
    const details = [
        {name:"Devendar", email:"devendar@gmail.com",animal:"/Images/Rabbit.jpg", flower:"/Images/Rose.jpg",place:"/Images/delhi.jpg",bird:"/Images/Peacock.jpg", animalName:"Rabbit", flowerName:"Rose",placeName:"Delhi",birdName:"Peacock",id:1},
        {name:"Ajay", email:"ajay@gmail.com",animal:"/Images/Lion.jpg", flower:"/Images/tulip.jpg",place:"/Images/kolkata.jpg",bird:"/Images/Parrot.jpg",animalName:"Lion", flowerName:"Tulip",placeName:"Kolkata",birdName:"Parrot", id:2},
        {name:"Kiran", email:"kiran@gmail.com",animal:"/Images/dear.jpg", flower:"/Images/lilly.jpg",place:"/Images/mumbai.jpg",bird:"/Images/Sparrow.jpg",animalName:"Dear", flowerName:"Lilly",placeName:"Mumbai",birdName:"Sparrow", id:3},
        {name:"Jeevan", email:"jeevan@gmail.com",animal:"/Images/Tiger.jpg", flower:"/Images/Hybiscus.jpg",place:"/Images/chennai.jpg",bird:"/Images/King Fisher.jpg",animalName:"Tiger", flowerName:"Hybiscus",placeName:"Chennai",birdName:"King Fisher", id:4},
        {name:"Keerthi", email:"keerthi@gmail.com",animal:"/Images/Elephant.jpg", flower:"/Images/jasmine.jpg",place:"/Images/goa.jpg",bird:"/Images/White Parrot.jpg",animalName:"Elephant", flowerName:"Jasmine",placeName:"Goa",birdName:"White Parrot", id:5},
        {name:"Mukesh", email:"mukesh@gmail.com",animal:"/Images/Cat.jpg", flower:"/Images/marie gold.jpg",place:"/Images/agra.jpg",bird:"/Images/Eagle.jpg",animalName:"Cat", flowerName:"Marie Gold",placeName:"Agra",birdName:"Eagle", id:6},
        {name:"Ishu", email:"ishu@gmail.com",animal:"/Images/Kangaroo.jpg", flower:"/Images/white rose.jpg",place:"/Images/bangaloore.jpg",bird:"/Images/Vulture.jpg",animalName:"Kangaroo", flowerName:"White Rose",placeName:"Bangalore",birdName:"Vulture", id:7},
        {name:"Divyamsh", email:"divyamsh@gmail.com",animal:"/Images/Cheetah.jpg", flower:"/Images/lotus.jpg",place:"/Images/munnar.jpg",bird:"/Images/Woodpecker.jpg",animalName:"Cheetah", flowerName:"Lotus",placeName:"Munnar",birdName:"Wood Pecker", id:8},
        {name:"Srikanth", email:"srikanth@gmail.com",animal:"/Images/Black panther.jpg", flower:"/Images/flower1.jpg",place:"/Images/kodaikanal.jpg",bird:"/Images/Ku Ku.jpg",animalName:"Black Panther", flowerName:"Hybrid Tulip",placeName:"Kodaikanal",birdName:"KU KU Bird", id:9},
        {name:"Sanjay", email:"sanjay@gmail.com",animal:"/Images/Squirrel.jpg", flower:"/Images/flower 2.jpg",place:"/Images/kerala.jpg",bird:"/Images/Humming Bird.jpg",animalName:"Squirrel", flowerName:"Lilly",placeName:"Kerala",birdName:"Humming Bird", id:10},
    ]
  return (
    <div>
      <data.Provider value={{detail:details}}>
        <SubComponent1/>
      </data.Provider>
    </div>
  )
}

export default MainComponent
export {data}