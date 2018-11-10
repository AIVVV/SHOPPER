export const User = {
  fields: [
    {
      id: 'username',
      className: 'textField',
      label: 'User Name',
      placeholder: 'Enter User Name',
      margin: 'normal'
    },
    {
      id: 'email',
      className: 'textField',
      label: 'Email',
      placeholder: 'Enter E-mail',
      margin: 'normal'
    },
    {
      id: 'password',
      className: 'textField',
      label: 'Password',
      placeholder: 'Enter Password',
      margin: 'normal'
    },
    {
      id: 'confirmPassword',
      className: 'textField mBottom20',
      label: 'Confirm Password',
      placeholder: 'Confirm Password',
      margin: 'normal'
    }
  ],
  buttons: [
    {
      variant: 'contained',
      size: 'large',
      color: 'primary',
      className: 'button mBottom20',
      name: 'Create Account'
    },
    {
      variant: 'contained',
      size: 'large',
      color: 'primary',
      className: 'button mBottom10',
      name: 'Register with Google'
    },
    {
      variant: 'contained',
      size: 'large',
      color: 'primary',
      className: 'button',
      name: 'Register with Facebook'
    }
  ]
};

export const Shoper = {
  fields: [
    {
      id: 'partnername',
      className: 'textField',
      label: 'Partner/Shop Name',
      placeholder: 'Enter Partner/Shop Name',
      margin: 'normal'
    },
    {
      id: 'email',
      className: 'textField',
      label: 'Email',
      placeholder: 'Enter E-mail',
      margin: 'normal'
    },
    {
      id: 'password',
      className: 'textField',
      label: 'Password',
      placeholder: 'Enter Password',
      margin: 'normal'
    },
    {
      id: 'confirmPassword',
      className: 'textField mBottom20',
      label: 'Confirm Password',
      placeholder: 'Confirm Password',
      margin: 'normal'
    },
    {
      multiline: true,
      rowsMax: '3',
      rows: '3',
      id: 'description',
      className: 'textField mBottom20',
      label: 'Short Description',
      placeholder: 'Enter Short Description',
      margin: 'normal'
    }
  ],
  buttons: [
    {
      variant: 'contained',
      size: 'large',
      color: 'primary',
      className: 'button',
      name: 'Submit'
    }
  ]
};
