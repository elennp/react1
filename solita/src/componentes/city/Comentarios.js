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

        const dataComents = {
            itinerario: props.itinerario,
            mensaje: event.target[0].value,
            user: user.id,

        }

        await axios.post("https://localhost:4000/api/comment", { dataComents })
            .then(response => {

                swal({
                    title: response.data.mensaje,
                    icon: "success",
                    buttons: "ok"
                })
                // setComment(response.data.response.comentario)


            })


    }

    useEffect(() => {
        let id = props.itinerario
        axios.get(`https://localhost:4000/api/comment/${id} `)
            .then(response => {
                setComment(response.data.response.comentario)


            })


        //  console.log(response)
    }, [reload])

    const borrarComentario = (id) => {
        axios.delete(`https://localhost:4000/api/comment/${id} `)
            .then(response => {
                console.log(response)
                swal({
                    title: response.data.mensaje,
                    icon: "success",
                    buttons: "ok"
                })
            })
        setReload(!reload)


    }

    const handelChange = (event) => {
        setCambio(event.target.value)

    }

    const modificar = (id) => {

        let data = cambio
        axios.put(`https://localhost:4000/api/comment/${id} `, { data })
            .then(response => {
                console.log(response)
                swal({
                    title: response.data.mensaje,
                    icon: "success",
                    buttons: "ok"
                })
            })


        setReload(!reload)
    };
    


    return (
        <>

            <div className="accordion d-grid col-10 mx-4" id="accordionExample">

                <h2 className="accordion-header " id="headingOne">
                    <button className="accordion-button   "
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseOne"
                        aria-expanded="true"
                        aria-controls="collapseOne"
                    >
                        COMMENTS
                    </button>

                </h2>
                <br />

                <div
                    id="collapseOne"
                    className="accordion-collapse collapse"
                    aria-labelledby="headingOne"
                >
                    {comment?.map(iti =>
                        <div className="d-flex position-relative mx-3 ">

                          
                            <h5>{iti.name}</h5>
                            {iti.user?._id === user?.id ?


                                <div className="floating" >

                                    <div>
                                        <input  onKeyUp={handelChange} className="inputBoton" defaultValue={iti.comment}></input>
                                    </div>


                                    <button type="button" className="btn btn-info mx-3 " onClick={() => borrarComentario(iti._id)} >
                                        <FaTrashAlt />
                                    </button>
                                    <button type="button" className="btn btn-info" onClick={() => modificar(iti._id)}>
                                        <MdCreate />
                                    </button>

                                </div>

                                :
                                <div className="estilo comente ">
                                    <div style={{ backgroundColor: "#F3E9DD", borderRadius: "0.3em", padding: "2px", marginLeft: "1em", marginTop: "0.3em" }}>{iti.comment}</div>
                                </div>
                            }

                        </div>


                    )}

                    {/* BODY  */}

                    {user ?
                        <div className="accordion-body">


                            <form onSubmit={submitComment}>
                                <div className="form-floating">
                                    <textarea className="form-control" id="floatingTextarea"></textarea> <br />
                                    <div className="btn-comentario-form">

                                        <button type="submit" className="btn btn-info">
                                            Send<i className="fas fa-paper-plane"></i>
                                        </button>


                                    </div>

                                </div>
                            </form>
                        </div>

                        :
                        <div className="floating" >
                            <p style={{ backgroundColor: "rgba(201, 215, 219, 0.212)", borderRadius: "1em", width: "100%", height: "100%", marginTop: "1em" }} >You must be logged in to comment</p>
                        </div>

                    }
                </div>
            </div>
        </>

    );
                }        


  
    export default Comments