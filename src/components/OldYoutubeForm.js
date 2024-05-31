import { useFormik, Form } from "formik";;
// first letter should be in capital 

const initialValues = {
        name: "",    // All these properties corresponds to the name attribute of the input field
        email: "",
        channel: "",
    }

    const onSubmit = values => {
        console.log("Form data ", values);            // another properties which is onsubmit that is a function (the arguments here automatically receives the values of the object)
    }

    const validate = value => {            // the validate function must follow some condition in order to work as intended
        //value.name, value.email, value.channel
        // errors.name, errors.email, errors.channel 
        let errors = {};
        if (!value.name) {
            errors.name = 'Required Field';
        }
        if (!value.email) {
            errors.email = 'Required Field';
        } else if (!/[^\s@]+@[^\s@]+\.[^\s@]+/.test(value.email)) {
            errors.email = 'Invalid Email format'
        }
        if (!value.channel) {
            errors.channel = 'Required Field';
        }
        return errors;
    }
const LoginForm = () => {
    

    const formik = useFormik({        // Refactoring the code 
        initialValues,
        onSubmit,
        validate,
    }); // It takes in an object

    console.log('Visited Fields', formik.touched)

    return (
        <div className="formContainer" onSubmit={formik.handleSubmit}>
            <h2>Welcome to the Login Page</h2>
            <Form>
                <div className="formInput">
                    <label htmlFor="name">Name</label><br />
                    <input type="text" id="name" name='name'  
                    onChange={formik.handleChange} 
                    value={formik.values.name}
                    onSubmit={formik.handleSubmit}
                    onBlur={formik.handleBlur}/>
                    <br />
                    {formik.errors.name && formik.touched.name ? <div className="error">{formik.errors.name}</div> : null}
                </div>

                <div className="formInput">
                    <label htmlFor="email">Email</label><br />
                    <input type="email" id="email" name='email'
                     onChange={formik.handleChange} 
                     value={formik.values.name}
                     onSubmit={formik.handleSubmit}
                     onBlur={formik.handleBlur} />
                    <br />
                    {formik.errors.email && formik.touched.email ? <div className="error">{formik.errors.email}</div> : null} 
                </div>

                <div className="formInput">
                    <label htmlFor="channel">Channel</label><br />
                    <input type="text" id="channel" name='channel'
                     onChange={formik.handleChange} 
                     value={formik.values.name}
                     onSubmit={formik.handleSubmit}
                     onBlur={formik.handleBlur} />
                    <br />
                    {formik.errors.channel && formik.touched.channel ? <div className="error">{formik.errors.channel}</div> : null}
                </div>

                <button type="submit">Submit</button>
            </Form>
        </div>
    )
}

export default LoginForm;