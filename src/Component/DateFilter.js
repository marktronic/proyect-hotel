
import React from 'react';
import moment from 'moment' ;


export default function DateFilter ( { icon, onChangeDate, onChange,date } ) {

    
    return (
        <div className="field">
            <div className="control has-icons-left">
                <input 
                    className="input"
                    type="date"
                    onChange= { onChange } 
                    value= { moment(date).format('YYYY-MM-DD') }
                />
                <span className="icon is-small is-left">
                    <i className={icon}/>
                </span>
            </div>
        </div>

    );

}