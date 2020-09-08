import React from 'react'
import { useEffect } from 'react'
import {Link} from 'react-router-dom'
import FormInput from '../form-input/form-input.component'

import './user-details.styles.scss'

const UserDetails = ({values, handleChange, handleSubmit, errors, isSubmitting}) => {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
    <div className='pedal'>
        <div className='order-form'>
            <div className='order-form-text'>
                <h1>Shipping Information</h1>
                <p>Please enter contact informations and shipping address</p>
                <p><i>* required fields</i></p>
            </div>
            <form onSubmit = {handleSubmit}>
                <div className='label-input'>
                    <label>First Name<span>*</span></label>
                    <FormInput 
                        name='firstName'
                        value={values.firstName} 
                        handleChange={handleChange}
                        label='First Name'
                    />    
                    {errors.firstName && <p className='form-error'>{errors.firstName}</p>}
                    <label>Last Name<span>*</span></label>
                    <FormInput 
                        name='lastName' 
                        value={values.lastName} 
                        handleChange={handleChange}
                        label='Last Name'
                    /> 
                    {errors.lastName && <p className='form-error'>{errors.lastName}</p>}    
                    <label>Address<span>*</span></label>
                    <FormInput 
                        name='address' 
                        value={values.address} 
                        handleChange={handleChange}
                        label='Address'
                    />
                    {errors.address && <p className='form-error'>{errors.address}</p>}
                    <label>Town/City<span>*</span></label>
                    <FormInput 
                        name='city' 
                        value={values.city} 
                        handleChange={handleChange}
                        label='City'
                    />   
                    {errors.city && <p className='form-error'>{errors.city}</p>}   
                    <label>Phone<span>*</span></label>
                    <FormInput 
                        name='phone' 
                        value={values.phone} 
                        handleChange={handleChange}
                        label='Phone'
                    />  
                    {errors.phone && <p className='form-error'>{errors.phone}</p>}   
                    <label>Email<span>*</span></label>
                    <FormInput 
                        name='email' 
                        // type='email' 
                        value={values.email}
                        handleChange={handleChange}
                        label='Email' 
                    />   
                    {errors.email && <p className='form-error'>{errors.email}</p>}   
                    <label>Additional Instructions (optional)</label>
                    <textarea 
                        name='text' 
                        value={values.text} 
                        onChange={handleChange}
                        rows="7" 
                        cols="40"
                        maxLength="500"
                        placeholder="Message"  
                        >       
                    </textarea>
                </div>    
                    <Link to='/checkout'>
                    <button id='back'>
                        Back
                    </button>
                    </Link>
                    <button id='forward' disabled={isSubmitting} type='submit' >
                        Continue
                    </button>
            </form>
        </div>
    </div>
    )
}
export default UserDetails