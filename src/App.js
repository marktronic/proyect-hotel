import React, { useState, useEffect } from 'react';
import 'bulma/css/bulma.min.css';
import Filters from './Component/Filters.js';
import Hero from './Component/Hero.js';
import Hotels from './Component/Hotels.js';
    function App() {
      const [data, setdata]=useState([]);
      const [Filter,setFilter]=useState()
       

         const  getData = async () => {
           const respuesta = await fetch("http://localhost:3000/data.json");
            const datos = await respuesta.json()
            setdata(datos)
            console.log(datos)
        } 
         useEffect(()=>{ 
           getData();


         },[])

         const today = new Date()
        
          const filters = {
            dateFrom:today, 
            dateTo:new Date(today.valueOf() + 86400000),
            country: '',
            price: 0,
            rooms: 0
          }
          const options=[
            { value: undefined, name: 'Cualquier Tamaño' },
            { value: 10, name: 'Hotel Pequeño' },
            { value: 20, name: 'Hotel Mediano' },
            { value: 30, name: 'Hotel Grande' },
          ] 
      
        return (
          //<h1 className="title is-1"><i className="fas fa-home"></i> ¡Hola!</h1>
         
          <div>
          <Hero filters={ filters } />
          <Filters filters={filters}   />
          <Hotels data={data}/>
          </div>
        )
      }

export default App;
