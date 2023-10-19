import React, { Component } from 'react';

class NewProductForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      description: '',
      category: '',
      quantity: '',
      price: '',
    };
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleSubmit = (e) => {
    event.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', this.state);
  };

  handleCancel = () => {
    // Handle cancel action here
    this.setState({
      name: '',
      description: '',
      category: '',
      quantity: '',
      price: '',
    });
  };

  render() {
    return (
      <div>
        <button className='App' type='button'>New Product</button>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={this.state.name}
              onChange={this.handleChange}
              required
            />
          </div>
          <div>
            <label htmlFor="description">Description:</label>
            <input
              type="text"
              id="description"
              name="description"
              value={this.state.description}
              onChange={this.handleChange}
              required
            />
          </div>
          <div>
            <label htmlFor="category">Category:</label>
            <input
              type="text"
              id="category"
              name="category"
              value={this.state.category}
              onChange={this.handleChange}
              required
            />
          </div>
          <div>
            <label htmlFor="quantity">Quantity:</label>
            <input
              type="number"
              id="quantity"
              name="quantity"
              value={this.state.quantity}
              onChange={this.handleChange}
              required
            />
          </div>
          <div>
            <label htmlFor="price">Price:</label>
            <input
              type="number"
              id="price"
              name="price"
              value={this.state.price}
              onChange={this.handleChange}
              required
            />
          </div>
          <div className='AppStyle'>
            <button type="submit">SUBMIT</button>
            <button type="button" onClick={this.handleCancel}>CANCEL</button>
          </div>
        </form>
      </div>
    );
  }
}

export default NewProductForm;
