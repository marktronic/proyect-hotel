
import React from 'react';
function OptionsFilter(props) {
  const prueba=()=>{
    alert('hola');
  }
  const options =props.options
    return (
      <div>
         
<div className="field">
  <div className="control has-icons-left">
    <div className="select" style={ {width: '100%'} }>
      <select style={ {width: '100%'} }>
      {   
                               options.map((option) =>
                                <option key={option.name} 
                                        value={option.value} 
                                        onClick={prueba}>
                                        {option.name}
                                </option>
                               )
                            }                      
      </select>
    </div>
    <div className="icon is-small is-left">
      <i className="fas"></i>
    </div>
  </div>
</div>

    
 
      </div>
    );
  }export default OptionsFilter;
  
  // A diferencia del componente anterior, en este caso deberíamos recibir tres props.
  //  Una debería determinar las opciones posibles que tiene el campo (options),
  //   otra la opción que se encuentra seleccionada (selected) 
  //   y por último, en otra prop, el ícono que cambia en cada instancia (icon).
