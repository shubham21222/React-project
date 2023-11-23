import { useState } from "react";




function Card({id,image,info,price,name ,removeTour}) {

    const[readmore,setReadmore] = useState(false);
    const description = readmore ? info : `${info.substring(0,200)}....` ;

        function readmoreHandler() {
            setReadmore(!readmore);
        }

    return (
        <div className="card">
           <img src={image} alt="shu" className="image" />
           <div className="tour-info">

           <div className="tour_details">
            <h4 className="tour_price">
            ₹{price}
            </h4>
            <h4 className="toue_name">
                {name}
            </h4>
            </div>
            <div className="description">
                {description}
                <span className="read-more" onClick={readmoreHandler}>
                    {readmore ? `show less`: `read more`}
                </span>
            </div>

           </div>
           <button onClick={() => removeTour(id)} className="btn-red"  >
            Not Intresed 
           </button>
            
        </div>
        
    );
};


export default Card;