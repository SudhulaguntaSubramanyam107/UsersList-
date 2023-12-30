import "./index.css"

const UserProfile=(props)=>{  
    const {userDetails}=props 
    const {imageUrl,name,role,company}=userDetails
    return(
    <li className="user-card-container">

        <img src={imageUrl} className="avatar" alt="avatar"/> 
        <div className="user-details-container">
           <h1 className="user-name">{name}</h1>
           <p className="user-designaion">{role}</p> 
           <p className="user-designation">{company}</p>
        </div>
    </li> 
    )
}
export default UserProfile