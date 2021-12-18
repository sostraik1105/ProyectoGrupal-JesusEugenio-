import React from 'react'
import libros from '../JSon/libros.json'

export function CProducto(props) {
    return (
        <>
        <div className="card-group" style={{flexWrap: "wrap", width:"80%", position:"absolute", left:"10%", justifyContent: "space-around"}}>
        {
                libros.map(
                    l=>{
                        return(
                            <div style={{width: "30%"}}>
                                <div className="card">
                                    <img src={l.portada} className="card-img-top" alt="..."/>
                                    <div className="card-body">
                                    <h5 className="card-title">Card title</h5>
                                    <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                    <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                                    </div>
                                </div>
                            </div>
                            
                        )
                    })
            }

        </div>
        </>
    )
}
