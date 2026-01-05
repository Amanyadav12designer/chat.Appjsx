import {useState} from "react";

import AddPropertyForm from "./AddPropertyForm";
import PropertyList from "./PropertyList";


export default function App(){
  const [properties,setProperties]= useState([]);

  function addProperty(newProperty){
    setProperties([...properties,newProperty]);

    function toggleAvailability(id){
      setProperties(properties.map(p=>

        p.id===id?{...p,available:!p.available}:p

      )

    

      )
    }


    function deleteProperty(id){
      setProperties(properties.filter(p=>p.id!==id));
    }
  }

return(
<div style={{padding:"20px"}}>


<AddPropertyForm onAdd={addProperty}/> 
<PropertyList properties={properties} onToggle={toggleAvailability} onDelete={deleteProperty}/>





    


</div>

);



}




