import React from 'react';  
import '../assets/styles/Form.css';
import { options } from '../vars';
import useSelect from '../hooks/useSelect';

const Form = ({setCategory}) => {

    const [ category, SelectNews ] = useSelect('general', options);

    const searchNews = e => {
        e.preventDefault();
        setCategory(category);
    }

    return ( 
        <div className= 'search row'>
            <div className="col s12 ">
                <form onSubmit={searchNews} >
                    <h2 className='heading'>Search By Category</h2>
                    <SelectNews />
                    <div className="input-field">
                        <input type="submit" className='myinput btn-block btn-large amber darken-2 col s12' value="Search"/>
                    </div>
                </form>
            </div>
        </div>
     );
}
 
export default Form;