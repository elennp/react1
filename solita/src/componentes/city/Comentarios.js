import React, { useState, useEffect } from "react";
import { useStateValue } from "../../StateProvider";
import "../city/comentarios.css";


import axios from "axios";
import { FaTrashAlt } from "react-icons/fa";
import { MdCreate } from "react-icons/md";
import swal from 'sweetalert';

function Comments(props) {
    const [comment, setComment] = useState();
    const [{ user }, dispatch] = useStateValue();
    const [reload, setReload] = useState(false);
    const [cambio, setCambio] = useState()


    const submitComment = async (event) => {
        event.preventDefault();
        console.log(props)
        const dataComents = {
            itinerario: props.itinerarios,
            mensaje: event.target[0].value,
            user: user.id,

        }
         
        await axios.post("http://localhost:4000/api/comments", { dataComents })
            .then(response => 
              
                 swal({
                     title: response.data.message,
                     icon: "success",
                    buttons: "ok"
                })
                // setComment(response.data.response.comentario)
                  

            )
            setReload(!reload) 
           
    }

    

    useEffect(() => {
        let id = props.itinerarios
        axios.get(`http://localhost:4000/api/comments/${id} `)
            .then(response => {
                setComment(response.data.response.comentario)


            })


          // console.log(response)
    }, [reload])

    const borrarComentario = async (id) => {
       await axios.delete(`http://localhost:4000/api/comments/${id} `)
            .then(response => {
                console.log(response)
                swal({
                    title: response.data.message,
                    icon: "success",
                    buttons: "ok"
                })
            })
        setReload(!reload)


    }

    const handelChange = (event) => {
        setCambio(event.target.value)

    }

      const modificar = async (id) => {

        let data = cambio
       await axios.put(`http://localhost:4000/api/comments/${id} `, { data })
            .then(response => {
                console.log(response)
                swal({
                    title: response.data.message,
                    icon: "success",
                    buttons: "ok"
                })
            })


        setReload(!reload)
    
        }

           
    return (
        
        <div className="contentComment">
        <div class="accordion-item">
          <h2 class="accordion-header" id="flush-headingOne">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
              COMMENTS
            </button>
          </h2>

          <div id="flush-collapseOne" class="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
            {comment?.map(iti =>
              <div class="accordion-body">
                <div className="AquiVaEstilo mb-2" >
                  <div className="commentUserImg">
                   
                    <p>{iti.user.name}</p>
                  </div>
                  {user?.id===iti.user._id?
                    <div>
                      <div className="commentText">
                        {/* event entra como parámetro del onChange y pasa como parámetro a la función y pasa hacia arriba */}
                        <input onKeyUp={handelChange} defaultValue={iti.comment} className="styleInput"></input>
                      </div>
                      <div className="btnComment">
                        {/* captura el comentario por cada boton q se genera se pasa el id a la funcion y la funcion pasa el parametro al controlador y este la ejecuta */}
                        <button className="btn btn-warning mx-2" onClick={() => borrarComentario(iti._id)}><FaTrashAlt /></button>
                        <button className="btn btn-warning" onClick={() => modificar(iti._id)}><MdCreate /></button>
                      </div>
                    </div>:
                    <div className="commentText">
                   
                    <div className="styleInput">{iti.comment}</div>
                  </div>
                  }
                </div>


              </div>
            )}
            {user?
            <div>
            <form onSubmit={submitComment} className="p-3">
              <textarea name="textarea" placeholder="Write us..." className="itineraryTextarea">

              </textarea>
              <div className="btn-comentario-form">
                <button type="submit" className="btn btn-warning">Send</button>
              </div>
            </form>
            </div>
            :
            <h6 className="p-3">You must login to comment</h6>
            }
          </div>
        </div>
      </div>
    )
    }

 

                        export default Comments;