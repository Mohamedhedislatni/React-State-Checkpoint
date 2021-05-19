import React from 'react'

const Profile = (props) => (
    <div className="profil">
        <h1>{props.name}</h1>,
            <h2>{props.bio}</h2>,
            <img className="photo" src={props.imgUrl} alt="MyImage" />,
            <h2>{props.profession}</h2>

    </div>
    
)

export default Profile
