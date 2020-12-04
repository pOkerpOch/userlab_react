import React from 'react';
import { Formik, userField, Form } from 'formik';
import * as Yup from 'yup';


const TextInput = ({ label, ...props}) => {
    const [field, meta] = userField(props);

    return (
        <>
            <label htmlFor={props.id || props.name}>{label}</label>
            <input className="text-input" {...field} {...props} />
            {meta.touched && meta.error ? (
                <div className="error">{meta.error}</div>
            ) : null}
        </>
    );
}

 
function Prueba(){

    return (
        <div>
            <Formik
                initialValues={{
                    nit: '',
                    nombre: '',
                    apellido: ''
                }}
                validationSchema={Yup.object({
                    nit: Yup.string()
                    .min(7, 'Debe contener al menos 7 caracteres')
                    .max(10, 'No debe contener mas de 10 caracteres')
                    .required('Requerido'),
                    nombre: Yup.string()
                    .min(1, 'Debe contener al menos 1 caracter')
                    .max(15, 'No debe contener mas de 15 caracteres')
                    .required('Requerido'),
                    apellido: Yup.string()
                    .min(1, 'Debe contener al menos 1 caracter')
                    .max(15, 'No debe contener mas de 15 caracteres')
                    .required('Requerido')
                })}
                onSubmit={(values, {setSubmitting, resetForm}) => {
                    setTimeout(() => { alert(JSON.stringify(values, null, 2));
                    resetForm();
                    setSubmitting(false);
                    }, 3000)
                } }
            >
                {props => (
                    <Form>
                        <h1>CLIENTES</h1>
                        <TextInput label="Nit" name="nit" type="text" />
                        <TextInput label="Nombre" name="nombre" type="text" />
                        <TextInput label="Apellido" name="apellido" type="text" />
                <button type="submit">{props.isSubmitting ? 'Ingresando...' : 'Ingresar'}</button>
                    </Form>
                )}
            </Formik>
        </div>
    );

}

export default Prueba;