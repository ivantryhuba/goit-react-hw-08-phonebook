import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { register } from '../../redux/auth/authOperations';
import { v4 as uuidv4 } from 'uuid';

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
      <h1>Sign up for PhoneBook</h1>

      <form onSubmit={handleSubmit} autoComplete="off">
        <label htmlFor={nameInputId}>Name</label>
        <input
          id={nameInputId}
          type={'text'}
          name={'name'}
          value={name}
          onChange={handleInputValues}
          required={true}
        />

        <label htmlFor={passwordInputId}>Password</label>
        <input
          id={passwordInputId}
          type={'text'}
          name={'password'}
          value={password}
          onChange={handleInputValues}
          required={true}
        />

        <label htmlFor={nameInputId}>E-mail</label>
        <input
          id={emailInputId}
          type={'text'}
          name={'email'}
          value={email}
          onChange={handleInputValues}
          required={true}
        />

        <button type="submit">Sing up</button>
      </form>
    </div>
  );
}
