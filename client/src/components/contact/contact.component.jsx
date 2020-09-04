import React, {useState, useEffect} from 'react'
import axios from 'axios'
import {validateAuthContact} from './validate-auth-contact.util'
import GoogleMaps from '../google-maps/googlemaps.component'
import FormInput from '../form-input/form-input.component'


import './contact.styles.scss'

const INITIAL_STATE = {
    firstlastName: '',
    email: '',
    text: '',
}

const Contact = () => {

    const [values, setValues] = useState(INITIAL_STATE)
    const [errors, setErrors] = useState({})
    const [success, setSuccess] = useState(false)
    const [isSubmitting, setSubmitting] = useState(false)

    useEffect(() => {
        if(isSubmitting){
            const noErrors = Object.keys(errors).length === 0
            if(noErrors){
                setSubmitting(false)
                const {firstlastName, email, text} = values
                const data = {
                    firstlastName,
                    email,
                    text
                }

                setSuccess(true)
                axios.post('/contact/mail', data)
                .then(()=>{
                    console.log('Success! Data has been sent.')
                })
                .catch(()=>{
                    console.log('Failure! Data has NOT been sent.')
                    // alert('Error while sending message')
                })
                setTimeout(() => {
                    setSuccess(false)
                }, 4000)
                setValues(INITIAL_STATE)
            } else {
                setSubmitting(false)
            }
        }
    }, [errors])

    const handleSubmit = event => {
        event.preventDefault()

        const validationErrors = validateAuthContact(values)
        setErrors(validationErrors)
        setSubmitting(true)
            
    }

    const handleChange = event => {
        const {value, name} = event.target

        setValues({
            ...values,    
            [name]: value
         })
    }

    return (
        <div className='contact'>
            
            <div className='maps'>
                <GoogleMaps />
            </div>

            <div className='contact-data'>
                <div className='contact-info'>
                    <h2>Get in touch</h2>
                    <p>You can contact us regarding any custom mod enquiries you might have.</p>
                    <p>Our team will analyse your request and get back to you right away with either more questions, or if the request is straight-forward, with a quote.</p>
                    <ul>
                        <li><i className='fas fa-map-marker-alt'></i> Vuka Karadžića 1. 35213 Despotovac, Serbia</li>
                        <li><i className='fas fa-mobile-alt'></i> +381 65 8855 932</li>
                        <li><i className='fa fa-envelope'></i> office@alexandarfx.com</li>
                    </ul>
                </div>

                <div className='contact-form'>
                    <h2>Drop us a line</h2>
                    <p>Feel free to contact us at any time with questions, thoughts, issues, or even to send us kind words.</p>

                    {/* FORM */}
                    <form onSubmit={handleSubmit}>
                        <FormInput 
                            name='firstlastName' 
                            value={values.firstlastName} 
                            handleChange={handleChange}
                            id='input-name'
                            placeholder='Name'
                        />
                        <FormInput 
                            name='email' 
                            value={values.email} 
                            handleChange={handleChange}
                            id='input-email'
                            placeholder='Email'
                        />
                        <textarea
                            name='text' 
                            value={values.text} 
                            onChange={handleChange}
                            cols='30'
                            rows='5'
                            maxLength="500"
                            placeholder='Message'>
                        </textarea>
                        {errors.firstlastName && <p className='form-error'>{errors.firstlastName}</p>}
                        {errors.email && <p className='form-error'>{errors.email}</p>}
                        {errors.text && <p className='form-error'>{errors.text}</p>}
                        {success && <p className='form-success'>Thank you for writing us!</p>}
        
                        <button className='form-button' disabled={isSubmitting} type='submit'>Send Message</button>    
                    </form>    
                    {/* END FORM */}
                </div>
            </div>
        </div>      
    )
}

export default Contact
