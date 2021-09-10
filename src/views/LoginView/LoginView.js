import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../../redux/auth/authOperations';
import { v4 as uuidv4 } from 'uuid';

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
      <h2>Sign in to Phonebook</h2>

      <form onSubmit={handleSubmit} autoComplete="off">
        <label htmlFor={emailInputId}>E-mail</label>
        <input
          id={emailInputId}
          type={'email'}
          name={'email'}
          value={email}
          onChange={handleInputValues}
          required={true}
        />

        <label htmlFor={passwordInputId}>Password</label>
        <input
          id={passwordInputId}
          type={'password'}
          name={'password'}
          value={password}
          onChange={handleInputValues}
          required={true}
        />

        <button type="submit">Log In</button>
      </form>
    </div>
  );
}
