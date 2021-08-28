import {Col} from "react-bootstrap";
import "./css/grid.css";

function grid({title,calories,image,ingredients}){
    return(
           
               <Col className="box mt-3">
               <div className="boxII">

               <img src={image} alt="pic" weight="200px" height="200px" className="" />

                <div className="boxIII">
                <h1 className="sourcefont" >{title}</h1>
               <p className="popperfont"> calories : {calories} </p>
               <p className="firafont">{ingredients.map(ingredient => (
                        <li>{ingredient.text}</li>
               ))}</p>
                </div>
              

               </div>
              
               </Col>
           
    );
}

export default grid;