import UserProfile from "./components/UserProfile" 
import "./App.css"

const userDetailsList=[
    { 
          uniqueNo:1,
        imageUrl:"https://upload.wikimedia.org/wikipedia/commons/d/d6/Sundar_pichai.png",
        role:"CEO",
        name:"Sundar Pichai",
        company:"Google"
    }, 
    {  
         uniqueNo:2,
        imageUrl:"https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Elon_Musk_Royal_Society_%28crop2%29.jpg/1200px-Elon_Musk_Royal_Society_%28crop2%29.jpg",
        role:"CEO",
        name:"Elon Musk",
        company:"Tesla"
    }, 
    {  
         uniqueNo:3,
        imageUrl:"https://economictimes.indiatimes.com/thumb/msid-83620068,width-1200,height-900,resizemode-4,imgsize-577654/satya-nadella.jpg?from=mdr",
        role:"CEO",
        name:"satya nadella",
        company:"Microsoft"
    }, 
    {  
         uniqueNo:4,
        imageUrl:"https://image.cnbcfm.com/api/v1/image/104410446-GettyImages-669889288.jpg?v=1529474846",
        role:"CEO",
        name:"MarkZukarburg",
        company:"Facebook"
    }, 
    {  
        uniqueNo:5,
       imageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaWYQZoHEW4QYeb9pLAcAmlHGbCF5G4iuOXySsXNiyPg&s",
       role:"CEO",
       name:"Tim Cook",
       company:"Apple"
   },
]
const App=()=>(
    <div className="list-container">
        <h1 className="title">Top Tech Companies CEO'S List</h1> 
        <ul>
            {userDetailsList.map((eachItem)=>(
                <UserProfile userDetails={eachItem} key={eachItem.uniqueNo}/>
            ))}
        </ul>
    </div>
)
export default App
