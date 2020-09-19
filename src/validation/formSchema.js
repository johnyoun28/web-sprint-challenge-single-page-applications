import * as yup from 'yup';

export default yup.object().shape({
  name: yup.string().required('Name is required').min(3, 'Name is too short'),

  size: yup.string().required('Pizza must have a size'),
  pepperoni: yup.boolean(),
  sausage: yup.boolean(),
  chicken: yup.boolean(),
  onions: yup.boolean(),
  instructions: yup.string(),
});
