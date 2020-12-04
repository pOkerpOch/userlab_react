import React, { Component } from 'react';
import { Formik, Field, Form } from 'formik';

class CCliente extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
          nit: "",
          nombre: "",
          apellido: ""
      };
  
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(event) {
        const target = event.target;
        const value = target.type === 'text' ? target.value : target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }
  
    handleSubmit(event) {
      alert('A name was submitted: ' + this.state.value);
      event.preventDefault();
    }
  
    render() {
      return (
        <form onSubmit={this.handleSubmit}>
          <label>
            NIT:
            <input name="nit" type="text" value={this.state.nit} onChange={this.handleChange} />
          </label>
          <label>
            Nombre:
            <input name="nombre" type="text" value={this.state.nombre} onChange={this.handleChange} />
          </label>
          <label>
            Apellido:
            <input name="apellido" type="text" value={this.state.apellido} onChange={this.handleChange} />
          </label>
          <input type="submit" value="Ingresar" />
        </form>
      );
    }
  }

  export default CCliente;