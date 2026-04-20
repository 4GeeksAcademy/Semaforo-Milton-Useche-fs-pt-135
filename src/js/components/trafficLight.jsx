import React, { useState } from "react";

//include images into your bundle

//create your first component
export const TrafficLight = () => {

    let colors = [`red`,`yellow`,`green`,`purple`];

    const[color,setColor] = useState("red")
    const[visible, setVisible] = useState(false)

    const randomColor = () =>{
        let oneColor = colors[Math.floor(Math.random()* colors.length)]
        while (oneColor === color){
            oneColor = colors[Math.floor(Math.random()* colors.length)]
        }
        setColor(oneColor)
    }
    console.log(color)


    return (
        <div className="text-center">
            <div className="container" >
                <div className="row justify-content-center">
                    <div className="d-flex flex-column align-items-center">
                        <div className="bg-dark" style={{ width: "10px", height: "60px" }}></div>

                        <div className="col-3 col-sm-3 col-md-2 col-lg-1 d-flex bg-dark justify-content-center align-items-center flex-column gap-2 rounded-3">

                            {/** -----------------------------------COLORES DEL SEMAFORO ----------------------------------- */}
                            <div 
                            onClick={()=>{setColor("red")}}
                            className={`rounded-circle bg-danger ${color===`red`? `redOn`:``} `}
                            style={{ width: "40px", height: "40px" }} >
                            </div>

                            <div
                            onClick={()=>{setColor("yellow")}}
                            className={`rounded-circle bg-warning ${color === `yellow`?`yellowOn`:``}`}
                            style={{ width: "40px", height: "40px" }} >

                            </div>

                            <div
                            onClick={()=>{setColor("green")}}
                            className={`rounded-circle bg-success ${color=== `green`?`greenOn`:``}`}
                            style={{ width: "40px", height: "40px" }} >

                            </div>

                            <div
                             onClick={()=>{setColor("purple")}}
                            className={`rounded-circle purple ${visible? `d-block`:`d-none`} ${color === `purple` ? `purpleOn` : ``}`}
                            style={{ width: "40px", height: "40px" }} >
                                
                            </div>

                        </div>

                        {/** -----------------------------------BOTONES----------------------------------- */}
                        <div className="mt-3">
                            <button type="button" className="btn btn-primary" onClick={()=>randomColor(colors)}>Color aleatorio</button>
                        </div>
                        <div className="mt-3">
                            <button type="button" className="btn btn-success" onClick={()=>{setVisible(!visible)}}>Agregar color purpura</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
