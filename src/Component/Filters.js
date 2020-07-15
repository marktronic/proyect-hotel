import React from 'react'
import DateFilter from './DateFilter.js';
import OptionsFilter from './OptionsFilter.js';
export default function Filters ({filters,Options,onChangeDateFrom, onChangeDateTo, onChange,onFilterChange}) {
 



//   const handleOptionChange=(e)=> {
//     let payload = filters
//     payload[e.target.name] = e.target.value
//     let  filterschange =  onFilterChange(payload)
//    return filterschange;
//   }






      return (
        <nav className="navbar is-info" style= {{justifyContent:'center'} }>
            <div className="navbar-item">
                <DateFilter
                   onChange={onChange}
                   onChangeDate={ onChangeDateFrom }
                    date={filters.dateFrom}
                    name="dateFrom"
                    icon="fas fa-sign-in-alt" />
                   
            </div>
            <div className="navbar-item">
                <DateFilter
                    onChangeDate={ onChangeDateTo }
                    date={filters.dateTo}
                    name="dateTo"
                    icon="fas fa-sign-out-alt"
                />
            </div>
            <div className="navbar-item">
                          <OptionsFilter 
                              
                               Options={[{ value: undefined, name: 'Todos los países'},
                                        { value: 'Argentina', name: 'Argentina'},
                                        { value: 'Brasil', name: 'Brasil'},
                                        { value: 'Chile', name: 'Chile'},
                                        { value: 'Uruguay', name: 'Uruguay'}
                                        ]}
                                selected={filters.country}
                                icon="fas fa-globe"
                />
            </div>
            <div className="navbar-item">
                             
                <OptionsFilter 
                           
                               Options={[{value:undefined, name: 'Cualquier precio'},
                                            {value:1, name: '$'},
                                            {value:2, name: '$$'},
                                            {value:3, name: '$$$'},
                                            {value:4, name: '$$$$'},
                                        ]}
                                selected={filters.price}
                                icon="fas fa-dollar-sign"
                />
            </div>
            <div className="navbar-item">
                    <OptionsFilter 
                                    
                                    Options={ Options }
                                    selected={ filters.rooms }
                                    icon="fas fa-bed"
                />
            </div>

        </nav>
)
}

