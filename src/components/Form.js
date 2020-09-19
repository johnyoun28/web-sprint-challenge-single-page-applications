import React from 'react';

const Form = (props) => {
  const { value, submit, newPizza, disabled, errors } = props;

  const changeHandler = (evt) => {
    const { name, value, checked, type } = evt.target;
    const valueToUse = type === 'checkbox' ? checked : value;
    newPizza(name, valueToUse);
  };

  const submitHandler = (evt) => {
    evt.preventDefault();
    submit();
  };

  return (
    <form onSubmit={submitHandler} className="formDiv">
      <h1>Build Your Own</h1>
      <label>
        {' '}
        Name
        <input
          name="name"
          type="text"
          value={value.name}
          onChange={changeHandler}
          placeholder="enter name"
        ></input>
      </label>

      <br />

      <label>
        {' '}
        Size
        <select onChange={changeHandler} value={value.size} name="size">
          <option value="">- Select an option -</option>
          <option value="small">Small</option>
          <option value="medium">Medium</option>
          <option value="large">Large</option>
        </select>
      </label>

      <br />

      <div className="toppings">
        <h2>Toppings</h2>
        <label>
          {' '}
          Pepperoni
          <input
            name="pepperoni"
            type="checkbox"
            checked={value.pepperoni}
            onChange={changeHandler}
          ></input>
        </label>
        <br />

        <label>
          {' '}
          Sausage
          <input
            name="sausage"
            type="checkbox"
            checked={value.sausage}
            onChange={changeHandler}
          ></input>
        </label>

        <br />

        <label>
          {' '}
          Chicken
          <input
            name="chicken"
            type="checkbox"
            checked={value.chicken}
            onChange={changeHandler}
          ></input>
        </label>

        <br />

        <label>
          {' '}
          Onions
          <input
            name="onions"
            type="checkbox"
            checked={value.onions}
            onChange={changeHandler}
          ></input>
        </label>
      </div>

      <br />

      <label>
        {' '}
        Special Instructions
        <input
          name="instructions"
          type="text"
          value={value.instructions}
          onChange={changeHandler}
          placeholder="Special Instructions"
        ></input>
      </label>

      <br />

      <button disabled={disabled}>Place Order</button>
      <div>{errors.name}</div>
    </form>
  );
};

export default Form;
