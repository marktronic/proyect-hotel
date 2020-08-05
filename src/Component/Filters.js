import React from 'react'
import DateFilter from './DateFilter.js';
import OptionsFilter from './OptionsFilter.js';
export default function Filters ({filters,Options, onChange,prices,countries,sizes}) {
 








      return (
        <nav className="navbar is-info" style= {{justifyContent:'center'} }>
            <div className="navbar-item">
                <DateFilter
                   onChange={onChange}
                    date={filters.dateFrom}
                    name="dateFrom"
                    icon="fas fa-sign-in-alt" />
                   
            </div>
            <div className="navbar-item">
                <DateFilter
                    onChange={onChange}
                    date={filters.dateTo}
                    name="dateTo"
                    icon="fas fa-sign-out-alt"
                />
            </div>
            <div className="navbar-item">
                          <OptionsFilter 
                               onChange={onChange}
                               name='country'
                               Options={countries}
                                selected={filters.country}
                                icon="fas fa-globe"
                />
            </div>
            <div className="navbar-item">
                             
                <OptionsFilter 
                               onChange={onChange}
                               name='price'
                               Options={prices}
                                selected={filters.price}
                                icon="fas fa-dollar-sign"
                />
            </div>
            <div className="navbar-item">
                    <OptionsFilter 
                                    onChange={onChange}
                                    name='rooms'
                                    Options={ sizes }
                                    selected={ filters.rooms }
                                    icon="fas fa-bed"
                />
            </div>

        </nav>
)
}

