import { Formik, Form, Field, ErrorMessage } from "formik";;
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

    // console.log('Visited Fields', )

    return (
        <Formik
            initialValues={initialValues}
            onSubmit={onSubmit}
            validate={validate}
            >
                <div data-testid='form' className="flex items-center justify-center mt-12">
                <Form className="w-80 border-2 border-gray-400 p-2 inline-grid mx-auto rounded-md shadow-[]">
                <div className="my-2">
                    <label htmlFor="name">Name</label><br />
                    <Field type="text" id="name" name='name' className=" w-full border border-gray-600 rounded-md outline-none"/>
                    <br />
                    <ErrorMessage name="name"/>
                </div>

                <div className="my-2">
                    <label htmlFor="email">Email</label><br />
                    <Field type="email" id="email" name='email' className="w-full border border-gray-600 rounded-md outline-none"/>
                    <br />
                    <ErrorMessage name="email"/>
                </div>

                <div className="my-2">
                    <label htmlFor="channel">Channel</label><br />
                    <Field type="text" id="channel" name='channel' className="w-full border border-gray-600 rounded-md outline-none"/>
                    <br />
                    <ErrorMessage name="channel"/>
                </div>

                <button className="border bg-blue-600 text-white px-4 py-2 mt-5 rounded-md hover:bg-blue-500" type="submit">Submit</button>
            </Form>
                </div>
        </Formik>
    )
}

export default LoginForm;