import React from 'react';
import './Avatar.css';
import 'tachyons';
import Avatarlist from './Avatarlist';


const Avatar =(props)=>{

const avatarlistarray=[{

    id:1,
    name:"ashish",
    work:"full stack devloper"
},

{

    id:1,
    name:"Sakshi",
    work:"full stack devloper"
},
{

    id:1,
    name:"Swetha",
    work:"back end devloper"
},
{

    id:1,
    name:"suresh",
    work:"front devloper"
},

{

    id:1,
    name:"sai",
    work:"front devloper"
},
{

    id:1,
    name:"arjun",
    work:"back devloper"
},
{

    id:1,
    name:"ram",
    work:"back devloper"
},
{

    id:1,
    name:"saketh",
    work:"back devloper"
},
{

    id:1,
    name:"pranay",
    work:"back devloper"
},
{

    id:1,
    name:"sruthi",
    work:"back devloper"
}


]

 const arraycsard = avatarlistarray.map((avatarcard,i)=>
 {
    return  <Avatarlist id={avatarlistarray[i].name}
                    name= {avatarlistarray[i].name}
                    work={avatarlistarray[i].work}/>

})
 
    return (<div className="mainpage">
        
        <h1>Welcome To Avatar</h1>
        
   
           ${arraycsard}

    <button>submit pic </button>
        
        </div>
        
    )
    

}

export default Avatar;