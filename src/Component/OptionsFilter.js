
import React from 'react';
function OptionsFilter({Options,icon, name, onChange,onOptionChange,selected}) {
 
  
//  const handleOptionChange=(e)=> {
//     return onOptionChange(e)
//   }
 
    return (
      <div>
         
<div className="field">
  <div className="control has-icons-left">
    <div className="select" style={ {width: '100%'} }>
      <select style={ {width: '100%'} } 
      // onChange={ handleOptionChange } 
      name={ name }
      value={ selected } >
      { Options.map((option) => <option value={ option.value || '' } key={ option.value }>{ option.name }</option> ) }
      </select>
    </div>
    <div className="icon is-small is-left">
      <i className={ `fas fa-${icon}` }></i>
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
