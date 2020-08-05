
import React from 'react'
 import Tags from './tags.js';

export default function Hotel ( { data }) {
     console.log(data)

     return (
      <div className="card">
        <div className="card-image">
          <figure className="image is-4by3">
            <img src={ data.photo } alt={ data.name } />
          </figure>
        </div>
        <div className="card-content">
          <p className="title is-4"> { data.name } </p>
          <p> { data.description } </p>
          <div className="field is-grouped is-grouped-multiline" style={{marginTop: '1em'}}>
      
             <Tags icons={ [ { name:'fa-map-marker' } ] } >
               { data.city }, { data.country }
             </Tags> 
      
             <Tags icons={ [ { name:'fa-bed' } ] } >
               { data.rooms } Habitaciones 
             </Tags>
      
             <Tags icons={
                          Array.from( { length: 4 } )
                          .fill( { name:'fa-dollar-sign' }, 0, data.price )
                          .fill( { name:'fa-dollar-sign', style:{ opacity: '.25' } }, data.price, 4 )  
                         }
               />
                      <Tags icons={
                          Array.from( { length: 5 } )
                          .fill( { name:'fa-star' }, 0, data.price )
                          .fill( { name:'fa-star', style:{ opacity: '.25' } }, data.price, 5 )  
                         }
               />
      
          </div>
        </div>
        <div className="card-footer">
          <a href="javascript:alert('Aún no está implementado :(')" className="card-footer-item has-background-primary has-text-white has-text-weight-bold">Reservar</a>
        </div>
      </div>
      
          )
    
}







// function Hotel(props) {
//   console.log(data)
//     return (
//       <div className="card">
//         <div className="card-image">
//           <figure className="image is-4by3">
//             <img src={props.children.photo} alt={props.children.name} />
//           </figure>
//         </div>
//         <div className="card-content">
//           <p className="title is-4">{props.children.name}</p>
//           <p>{data.description}</p>
//           <div className="field is-grouped is-grouped-multiline" style={{marginTop: '1em'}}>
//             <DataTag icon="map-marker">{ `${props.children.city}, ${data.country}` }</DataTag>
//             <DataTag icon="bed">{ `${data.rooms} Habitaciones` }</DataTag>
//             <PriceTag count={data.price} />
//           </div>
//         </div>
//         <div className="card-footer">
//           <a href="javascript:alert('No implementamos esto aún :(')" className="card-footer-item has-background-primary has-text-white has-text-weight-bold">Reservar</a>
//         </div>
//       </div>
//     )
//   }
  