import React, { useState, useEffect } from 'react';
import 'bulma/css/bulma.min.css';
import Filters from './Component/Filters.js';
import Hero from './Component/Hero.js';
import Hotels from './Component/Hotels.js';
import { today } from './data.js';
import { hotelsData } from  './data';
import '@fortawesome/fontawesome';
import '@fortawesome/free-solid-svg-icons';
import '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-free-solid';
    function App() {
     

        const initialValuesFilter = {
          dateFrom: today,
          dateTo: new Date(today.valueOf() + 86400000 ),
          country: undefined,
          price: undefined,
          rooms: undefined
      
      } ;
      const OptionsData=[ { value: undefined, name: 'Cualquier Tamaño' },
                            { value: 10, name: 'Hotel Pequeño' },
                            { value: 20, name: 'Hotel Mediano' },
                            { value: 30, name: 'Hotel Grande' }];
  //       const handleShowConditionalFilters = () => {    

  //   let country, price, rooms;    

  //   (initialValuesFilter.country !== undefined) ? country = `en ${initialValuesFilter.country}` : country = "";

  //   (initialValuesFilter.price !== undefined) ? price = ` a ${initialValuesFilter.price} pesos` : price = "";    

  //   (initialValuesFilter.rooms !== undefined) ? rooms = ` de hasta ${initialValuesFilter.rooms} habitaciones` : rooms = "";
    
  //   return country + price + rooms;
  // }                  



      const [ filter , setFilters ] = useState(initialValuesFilter);
      const [data, setdata]=useState(hotelsData);
      const [Options, setOptions]=useState(OptionsData);
       
    //   const handleChangeDateFrom = ( e ) => {
    //     console.log( e.target.value ) ;
    // } ;
    // const handleChangeDateTo = ( e ) => {
    //     console.log( e.target.value ) ;
    // } ;
    const handleChangeDateFrom = (e) => {
      let selected = e.target.value;  
      
      const dateFormat = selected.replace(/-/gi,',');
      
      
      const newDateFrom = new Date(dateFormat);
      
      setFilters({
        ...filter,
        dateFrom : newDateFrom
      }); 
      
    } 
   
    const handleChangeDateTo  = (e) => {
      let selectd = e.target.value;  
      
      const dateFormat = selectd.replace(/-/gi,',');
      
      
      const newDateTo = new Date(dateFormat);
      
      setFilters({
        ...filter,
        dateTo : newDateTo
      }); 
      
    }
   const  handleFilterChange=(payload)=> {
      setFilters({
        filter: payload
      })
    }

      console.log(data)
      console.log(filter.dateTo)
      console.log(filter.dateFrom)
      // console.log(hotelsData);
        return (
         
          <div>
          <Hero filters={ filter} 
        
          />
          <Filters filters={filter} 
                   Options={Options}
                   onChangeDateFrom={ handleChangeDateFrom }
                   onChangeDateTo = { handleChangeDateTo  }
                   onFilterChange={handleFilterChange}
         />
          <Hotels data={data}/>
          </div>
        )
      }

export default App;

        //  const  getData = async () => {
        //    const respuesta = await fetch("http://localhost:3000/data.js");
        //     const datos = respuesta.json();
        //     setdata(datos)
        //     console.log(datos)
        // } 
        //  useEffect(()=>{ 
        //    getData();


        //  },[])
