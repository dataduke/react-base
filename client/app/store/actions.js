export const set_name = (name) => ({
  type: 'SET_NAME',
  step: '2',
  name
});

export const delete_name = () => ({
  type: 'SET_NAME',
  name: undefined,
  step: '1'
});

export const set_age = (age) => ({
  type: 'SET_AGE',
  step: '3',
  age
});

export const reset_app = () => ({
  type: 'RESET_APP',
  name: undefined,
  age: undefined,
  step: '1'
});