import React, { useState, useEffect } from 'react';
import Form from './components/Form';
import axios from 'axios';
import './App.css';
import PizzaCard from './components/PizzaCard';
import { Route, Link, Switch, useHistory } from 'react-router-dom';
import * as yup from 'yup';
import schema from './validation/formSchema';

const initialFormValue = {
  name: '',
  size: '',
  pepperoni: false,
  sausage: false,
  chicken: false,
  onions: false,
  instructions: '',
};

const initialFormError = {
  name: '',
  size: '',
  pepperoni: false,
  sausage: false,
  chicken: false,
  onions: false,
  instructions: '',
};

const initialPizza = {
  name: '',
  size: '',
  toppings: [],
  instructions: '',
};

const App = () => {
  const [formValue, setFormValue] = useState(initialFormValue);
  const [pizza, setPizza] = useState(initialPizza);
  const [disabled, setDisabled] = useState(true);
  const [formErrors, setFormErrors] = useState(initialFormError);
  const history = useHistory();

  const newPizza = (name, value) => {
    validate(name, value);
    setFormValue({ ...formValue, [name]: value });
  };

  const pizzaPost = (newPostPizza) => {
    axios
      .post('https://reqres.in/api/users', newPostPizza)

      .then((res) => {
        console.log(res);
        setPizza(res.data);

        setFormValue(initialFormValue);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const submit = () => {
    const newPostPizza = {
      name: formValue.name.trim(),
      size: formValue.size,
      toppings: ['peppironi', 'sausage', 'chicken', 'onions'].filter(
        (top) => formValue[top]
      ),
      instructions: formValue.instructions.trim(),
    };
    pizzaPost(newPostPizza);
  };

  useEffect(() => {
    schema.isValid(formValue).then((valid) => {
      setDisabled(!valid);
    });
  }, [formValue]);

  const validate = (name, value) => {
    yup
      .reach(schema, name)
      .validate(value)

      .then((valid) => {
        // eslint-disable-line
        setFormErrors({
          ...formErrors,
          [name]: '',
        });
      })

      .catch((err) => {
        setFormErrors({
          ...formErrors,
          [name]: err.errors[0],
        });
      });
  };
  return (
    <>
      <div className="App-header">
        <nav>
          <h1>Lambda Eats</h1>
        </nav>

        <Link to="/">
          <div className="App-link">
            <h3> Home </h3>
          </div>
        </Link>

        <Link to="/pizza">
          <div className="App-link">
            <h3> Pizza </h3>
          </div>
        </Link>

        <Switch>
          <Route path="/pizza">
            <Form
              value={formValue}
              submit={submit}
              newPizza={newPizza}
              disabled={disabled}
              errors={formErrors}
            />
            <PizzaCard pizza={pizza} />
          </Route>
        </Switch>
      </div>
    </>
  );
};
export default App;
