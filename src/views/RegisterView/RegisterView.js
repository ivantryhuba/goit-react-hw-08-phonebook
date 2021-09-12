import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { register } from '../../redux/auth/authOperations';
import { v4 as uuidv4 } from 'uuid';

import {
  H2Styled,
  FormStyled,
  LabelStyled,
  InputStyled,
  SubmitButtonStyled,
} from './RegisterView.styles';

export default function RegisterView() {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');

  const handleInputValues = evt => {
    const { name, value } = evt.currentTarget;

    switch (name) {
      case 'name':
        setName(value);
        break;

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
    setName('');
    setPassword('');
    setEmail('');
  };

  const handleSubmit = evt => {
    evt.preventDefault();
    dispatch(register({ name, password, email }));
    resetForm();
  };

  const nameInputId = uuidv4();
  const passwordInputId = uuidv4();
  const emailInputId = uuidv4();

  return (
    <div>
      <H2Styled>Sign up for PhoneBook</H2Styled>

      <FormStyled onSubmit={handleSubmit} autoComplete="off">
        <LabelStyled htmlFor={nameInputId}>Name</LabelStyled>
        <InputStyled
          id={nameInputId}
          type={'text'}
          name={'name'}
          value={name}
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

        <LabelStyled htmlFor={nameInputId}>E-mail</LabelStyled>
        <InputStyled
          id={emailInputId}
          type={'email'}
          name={'email'}
          value={email}
          onChange={handleInputValues}
          required={true}
        />

        <SubmitButtonStyled type="submit">Sing up</SubmitButtonStyled>
      </FormStyled>
    </div>
  );
}
