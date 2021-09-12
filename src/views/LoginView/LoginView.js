import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../../redux/auth/authOperations';
import { v4 as uuidv4 } from 'uuid';

import {
  H2Styled,
  FormStyled,
  LabelStyled,
  InputStyled,
  SubmitButtonStyled,
} from './LoginView.styles';

export default function LoginView() {
  const dispatch = useDispatch();
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');

  const handleInputValues = evt => {
    const { name, value } = evt.currentTarget;

    switch (name) {
      case 'password':
        setPassword(value);
        break;

      case 'email':
        setEmail(value);
        break;

      default:
        return;
    }
  };

  const resetForm = () => {
    setPassword('');
    setEmail('');
  };

  const handleSubmit = evt => {
    evt.preventDefault();
    dispatch(login({ password, email }));
    resetForm();
  };

  const passwordInputId = uuidv4();
  const emailInputId = uuidv4();

  return (
    <div>
      <H2Styled>Sign in to Phonebook</H2Styled>

      <FormStyled onSubmit={handleSubmit} autoComplete="off">
        <LabelStyled htmlFor={emailInputId}>E-mail</LabelStyled>
        <InputStyled
          id={emailInputId}
          type={'email'}
          name={'email'}
          value={email}
          onChange={handleInputValues}
          required={true}
        />

        <LabelStyled htmlFor={passwordInputId}>Password</LabelStyled>
        <InputStyled
          id={passwordInputId}
          type={'password'}
          name={'password'}
          value={password}
          onChange={handleInputValues}
          required={true}
        />

        <SubmitButtonStyled type="submit">Log In</SubmitButtonStyled>
      </FormStyled>
    </div>
  );
}
