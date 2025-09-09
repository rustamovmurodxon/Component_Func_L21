import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Component_func extends Component {
  constructor() {
    super();
    this.state = {
      title: "",
      price: "",
      discount: "",
      data: [],
      editingItem: null,
    };
  }
  handleSubmit = (e) => {
    e.preventDefault();
    const { price, data, title, discount, editingItem } = this.state;
    if (Number(price) < 0) {
      return alert("error price");
    }

    if (editingItem) {
      const editedData = data.map((product) =>
        product.id === editingItem.id
          ? { id: editingItem.id, title, discount, price }
          : product
      );
      this.setState({
        data: editedData,
        title: "",
        price: "",
        discount: "",
        editingItem: null,
      });
    } else {
      const product = {
        id: Date.now(),
        title,
        price: Number(price),
        discount,
      };
      this.setState({
        data: [...data, product],
        title: "",
        price: "",
        discount: "",
      });
    }
  };

  handleDelete = (id) => {
    this.setState({
      data: this.state.data.filter((product) => product.id !== id),
    });
  };

  handleUpdate = (product) => {
    console.log(product);
    this.setState({
      title: product.title,
      price: product.price,
      discount: product.discount,
      editingItem: product,
    });
  };

  render() {
    const { price, title, data, discount, editingItem } = this.state;
    return (
      <div>
        <h2>Component_func</h2>
        <form onSubmit={this.handleSubmit} action="">
          <input
            className="border mx-0.5 rounded-md"
            placeholder="Title"
            value={title}
            onChange={(e) => this.setState({ title: e.target.value })}
            type="text"
          />
          <input
            className="border mx-0.5 rounded-md"
            placeholder="price"
            value={price}
            onChange={(e) => this.setState({ price: e.target.value })}
            type="number"
          />
          <input
            className="border mx-0.5 rounded-md"
            placeholder="discount"
            value={discount}
            onChange={(e) => this.setState({ discount: e.target.value })}
            type="number"
          />
          <button className="border px-3 py-1 mt-0.5 bg-blue-200 rounded-xl">
            {editingItem ? "update" : "submit"}
          </button>
          <button className="border px-3 py-1 mt-0.5 bg-red-400 rounded-xl" type="button"><Link to={"/home"}>Go back</Link></button>
        </form>
        <div>
          {data?.map((product) => (
            <div
              className="border w-2xs rounded-md bg-amber-100 m-2.5"
              key={product.id}
            >
              <h3>Name: {product.title}</h3>
              <p>Price:{product.price} ming</p>
              <p>
                Discount:
                {product.price - (product.discount * product.price) / 100} ming
              </p>
              <button
                className="border px-2 mx-2 rounded-md bg-red-600"
                onClick={() => this.handleDelete(product.id)}
              >
                delete
              </button>
              <button
                className="border mx-2 px-2 rounded-md bg-green-400"
                onClick={() => this.handleUpdate(product)}
              >
                update
              </button>
              <hr />
            </div>
          ))}
        </div>
      </div>
    );
  }
}
