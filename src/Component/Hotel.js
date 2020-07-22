
import React from 'react'
import { hotelsData } from '../scripts/data'

export default function Hotel ( { data }) {
     console.log(data)

    return (
<div className="card">
  <div className="card-image">
    <figure className="image is-4by3">
      <img src="" alt=""/>
    </figure>
  </div>
  <div className="card-content">
    <p className="title is-4"> { data.name } </p>
    <p> { data.description } </p>
    <div className="field is-grouped is-grouped-multiline" style={{marginTop: '1em'}}>
      <div className="control">
        <div className="tags has-addons">
          <span className="tag is-medium is-info"><i className="fas fa-map-marker"></i></span>
          <span className="tag is-medium"> { data.city }, { data.country }</span>
        </div>
      </div>
      <div className="control">
        <div className="tags has-addons">
          <span className="tag is-medium is-info"><i className="fas fa-bed"></i></span>
    <span className="tag is-medium"> { data.rooms } </span>
        </div>
      </div>
      <div className="control">
        <div className="tags">
          <span className="tag is-medium is-info">
            <i className="fas fa-dollar-sign" style={{margin: '0 .125em'}}></i>
            <i className="fas fa-dollar-sign" style={{margin: '0 .125em'}}></i>
            <i className="fas fa-dollar-sign" style={{margin: '0 .125em', opacity: '.25'}}></i>
            <i className="fas fa-dollar-sign" style={{margin: '0 .125em', opacity: '.25'}}></i>
          </span>
        </div>
      </div>
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
  