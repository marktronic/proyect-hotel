import React from 'react';
import moment from 'moment' ;
function Hero({filters,onFiltersChange}) {
    
   // console.log(filters)
    
    return (
        
                    <section className="hero is-primary">
                        <div className="hero-body">
                        <div className="container">
                            <h1 className="title">
                            Hoteles
                            </h1>
                            <h2 className="subtitle">
                            {/* desde el <strong>{moment(filters.dateFrom).format('LL')}</strong> hasta el <strong>{moment(filters.dateTo).format('LL')}</strong>  */}
                            desde el <strong>{filters.dateFrom.toLocaleDateString('es-ES', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }) }</strong> hasta el <strong>{filters.dateTo.toLocaleDateString('es-ES', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }) }</strong>
           
                        
                            
                            </h2>
                        </div>
                        </div>
                    </section>
    )
  } export default Hero;
  