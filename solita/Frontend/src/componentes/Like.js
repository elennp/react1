import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { FcLike,FcDislike } from "react-icons/fc";
import React, { useState } from 'react';
import { useStateValue } from "../StateProvider";
import axios from 'axios';

function Likes(props) {

    const [{ user}, dispatch] = useStateValue()
    const [like, setLike] = useState(props.likes); 
    console.log(props)

    const likeDislike= async()=>{
        const token = localStorage.getItem("token") 
        console.log(user)
     
        await axios.put(`https://mytinerayelenn.herokuapp.com/api/likesDislike/${props.id}`,{},{
            headers: {
    
              "Authorization": "Bearer " +token
            }
          })
        .then(response=>
            setLike(response.data.response)
            )
    }
    const Ilike = like?.includes(user?.id)?<FcLike/>:<FcDislike/>
    return (
        <>
            <div className='contentLikes'>
             
               {user?
                <div className="iLike">
                    <Button variant="outlined" onClick={likeDislike} color="primary" size="large">
                        {Ilike}
                    </Button>
                    
                    <span>{like?.length}</span>
                </div>
                :
                <div className="iLike">
                    <div variant="outlined" onClick={likeDislike} color="primary" size="large">
                        {Ilike}
                    </div>
                    <span>{like?.length}</span>
                </div>

                }
            </div>
        </>

    )

};
export default Likes;
