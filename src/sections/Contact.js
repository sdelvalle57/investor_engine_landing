import React from 'react';
import Fondo from '../images/Imagen contacto-07.png';
import {pushToFirebase} from '../helpers/db_services'; 
import {validateEmail} from '../helpers/validators'; 
import {LANDING_FORM_PATH} from '../helpers/constants';
import Paragraph from '../components/Paragraph';

function Contact(){

    const [submission, setSubmission] = React.useState({
        submitted: false,
        error: false,
        message: ""
    })

    const [data, setData] = React.useState({
        name: {
            value: "",
            error: false
        },
        email: {
            value: "",
            error: false
        },
        phone: {
            value: "",
            error: false
        },
        text: {
            value: "",
            error: false
        }
    });



    const setDataValues = (name, value) => {
        setData({
            ...data,
            [name]: {
                ...[name].error,
                value,
            }
        })
      }

      const submit = async (e) => {
          e.preventDefault();
        const error = !validateEmail(data.email.value.trim()) || data.name.value.trim() === "";
        setData({
            email: {
                value: data.email.value,
                error: !validateEmail(data.email.value.trim())
            },
            name: {
                value: data.name.value,
                error: data.name.value.trim() === ""
            },
            phone: {
                value: data.phone.value,
                error: data.phone.value.trim() === ""
            },
            text: {
                value: data.text.value,
                error: data.text.value.trim() === ""
            }
        })
        setSubmission({
            submitted: false,
            error: false,
            message: ""
        })
        if(error) return;
        
        const saveData = await pushToFirebase(LANDING_FORM_PATH, {
            email: data.email.value,
            name: data.name.value,
            phone: data.phone.value,
            text: data.text.value
        })
        if(!saveData.error) {
            setSubmission({
                submitted: true,
                error: false,
                message: "Your data has been successfully submitted, we will contact you soon"
            })
            setData({
                name: {
                    value: "",
                    error: false
                },
                email: {
                    value: "",
                    error: false
                },
                phone: {
                    value: "",
                    error: false
                },
                text: {
                    value: "",
                    error: false
                }
            })
        } else {
            setSubmission({
                submitted: true,
                error: true,
                message: "There was an error trying to submit the form, please try again later"
            })
        }
      }
    
    return(
        <div className="view jarallax">
            <img src={Fondo} className="jarallax-img" />
            <div className="mask rgba-indigo-lighten-1 text-white">
                <div className="flex-center">

                
                    
                    <div className="col-lg-5 col-sm-4 col-6 wow fadeInLeft">

                    
                        <h5 className="mb-3 font-weight-bolder">
                            <b>Would you like to be involved?</b>  
                        </h5>
                        <p className="mb-4 font-weight-bolder">
                            We're a rowdy bunch, obsessed with holochain, and can't wait to make this project live. We have a clear roadmap, but many hands make light work.
                        </p>
                        <p>We'd love to talk.</p>
                    </div>

                    <div className="col-lg-4 col-sm-6 ml-sm-5 col-6 wow fadeInRight">
                        <form>

                            <div className="md-form">
                                <input 
                                    type="text" 
                                    className="form-control" 
                                    value={data.name.value}
                                    onChange= {({target}) => setDataValues("name", target.value)}
                                    id="name" 
                                    name="name" />
                                <label htmlFor="name" className="text-white font-weight-bolder">Name:</label>
                                {data.name.error ? "Complete this field":null}
                            </div>

                            <div className="md-form">
                                <input 
                                    type="text" 
                                    className="form-control" 
                                    value={data.phone.value}
                                    onChange= {({target}) => setDataValues("phone", target.value)}
                                    id="phone" 
                                    name="phone" />
                                <label htmlFor="phone" className="text-white font-weight-bolder">Phone:</label>
                                {data.phone.error ? "Complete this field":null}
                            </div>

                            <div className="md-form">
                                <input 
                                    type="email" 
                                    className="form-control" 
                                    value={data.email.value}
                                    onChange= {({target}) => setDataValues("email", target.value)}
                                    id="email" 
                                    name="email" />
                                <label htmlFor="email" className="text-white font-weight-bolder">Email:</label>
                                {data.email.error ? "Invalid email":null}
                            </div>

                            <div className="md-form">
                                <textarea 
                                    id="serviceInterested" 
                                    value={data.text.value}
                                    onChange= {({target}) => setDataValues("text", target.value)}
                                    className="form-control md-textarea"></textarea>
                                <label htmlFor="serviceInterested" className="text-white font-weight-bold label-min"><small>
                                    How do you think you can help?
                                    </small>
                                </label>
                                {data.text.error ? "Complete this field":null}
                            </div>

                            <div className="md-form">
                                <button 
                                    className="btn btn-outline-white mb-5 wow fadeInUp" 
                                    onClick={submit}
                                    >Submit Expression of Interest</button>
                            </div>

                        </form>
                        {submission.error && submission.submitted?
                            <div class="alert alert-danger" role="alert">
                                {submission.message}
                            </div>:null
                        }
                        {!submission.error && submission.submitted?
                            <div class="alert alert-primary" role="alert">
                                {submission.message}
                            </div>:null
                        }
                        
                        
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Contact;