import React, { useState, useEffect } from 'react';
import 'bulma/css/bulma.min.css';
import Filters from './Component/Filters.js';
import Hero from './Component/Hero.js';
import Hotels from './Component/Hotels.js';
// import Hotel from '../Components/Hotel.js' ;
import { today } from './data.js';
 import { hotelsData } from  './data.js';
//import { today, hotelsData } from './scripts/data.js' ;
// import { today, hotelsData } from './scripts/data.js' ;
import '@fortawesome/fontawesome';
import '@fortawesome/free-solid-svg-icons';
import '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-free-solid';
import moment from 'moment' ;
import  './config/momentConfig' ;
    function App() {
     

        const initialValuesFilter = {
          dateFrom: today,
          dateTo: new Date(today.valueOf() + 86400000 ),
          country: undefined,
          price: undefined,
          rooms: undefined
      
      } ;
      
  const initialCountry =[{ value: undefined, name: 'Todos los países'},
                              { value: 'Argentina', name: 'Argentina'},
                              { value: 'Brasil', name: 'Brasil'},
                              { value: 'Chile', name: 'Chile'},
                              { value: 'Uruguay', name: 'Uruguay'}
                              ]
    const initialPrice = [
                            {value:undefined, name: 'Cualquier precio'},
                            {value:1, name: '$'},
                            {value:2, name: '$$'},
                            {value:3, name: '$$$'},
                            {value:4, name: '$$$$'},
]
 

      const initialSize=[ { value: undefined, name: 'Cualquier Tamaño' },
                          { value: 10, name: 'Hotel Pequeño' },
                          { value: 20, name: 'Hotel Mediano' },
                          { value: 30, name: 'Hotel Grande' }];
 


      const [ filter , setFilters ] = useState(initialValuesFilter);
      const [data, setData]=useState(hotelsData);
      const [Options, setOptions]=useState();
      const [size, setSize] = useState(initialSize);
      const [country, setCountry] = useState(initialCountry);
      const [price, setPrice] = useState(initialPrice);
       
    //   const handleChangeDateFrom = ( e ) => {
    //     console.log( e.target.value ) ;
    // } ;
    // const handleChangeDateTo = ( e ) => {
    //     console.log( e.target.value ) ;
    // } ;
  //   const handleChangeDateFrom = (e) => {
  //     let selected = e.target.value;  
      
  //     const dateFormat = selected.replace(/-/gi,',');
      
      
  const handleChangeFilter = ( e ) => {
    const { name } = e.target ;
    const { type } = e.target;
    const value = ( type === 'date' ) ? moment( e.target.value ) : e.target.value ;

    /* if ( type === 'date' ) {
   value = new Date( value )
  } */

    setFilters( {
        ...filter,
        [name]: value,
    } ) ;

    console.log( name, value, type ) ;
} ;

      console.log(data)
      console.log(hotelsData)
      useEffect( () => {
        
        let filteredHotels = hotelsData ;

        filteredHotels = filteredHotels.filter( hotel => {
            return (
                moment( hotel.availabilityFrom ).isSameOrBefore( filter.dateFrom, 'D' ) &&
                moment( hotel.availabilityTo ).isSameOrAfter( filter.dateTo, 'D' )
            ) ; 
        } ) ;



        if ( filter.price && !( filter.price === 'Cualquier precio' ) ) {
            filteredHotels = filteredHotels.filter( hotel => hotel.price === parseInt( filter.price ) ) ;
        }

        if ( filter.country && !( filter.country === 'Todos los países' ) ) {
            filteredHotels = hotelsData.filter( hotel => hotel.country === filter.country ) ;
        }

        if ( filter.rooms && !( filter.rooms === 'Cualquier tamaño' ) ) {

            switch ( filter.rooms ) {
                case '10':
                    filteredHotels = filteredHotels.filter( hotel => hotel.rooms <= 10 ) ;
                    break ;
            
                case '20':
                    filteredHotels = filteredHotels.filter( hotel => hotel.rooms > 10 && hotel.rooms <= 20 ) ;
                    break ;
            
                case '30':
                    filteredHotels = filteredHotels.filter( hotel => hotel.rooms > 20 ) ;
                    break ;
                default:
                    break ;
            }
        }

        setData( filteredHotels ) ;

    }, [ filter ] ) ;

      
        return (
         
          <div>
          <Hero filters={ filter} 
        
          />
          <Filters filters={filter} 
                   Options={Options}
                   onChange={ handleChangeFilter }
                   countries = { country }
                   prices = { price }
                   sizes = {size}
         />
              
                <Hotels hotel={data} />
            
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
