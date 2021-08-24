import React, { FormEvent, useEffect, useState } from 'react';
import { LoginForm } from '../../types/auth';
import { login } from '../../actions/auth';
import { useDispatch } from 'react-redux';

export default function Login() {
  const dispatch = useDispatch();
  const [loginForm, setLoginForm] = useState<LoginForm>({
    email: '',
    password: '',
  });

  const handleChange = (
    e: React.ChangeEvent<{ name: string; value?: unknown }>,
  ) => {
    setLoginForm({
      ...loginForm,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await dispatch(login(loginForm));
  };

  useEffect(() => {
    console.log(process.env.REACT_APP_API_URL);
  }, [loginForm]);

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          email: <input type="text" name="email" onChange={handleChange} />
        </div>
        <div>
          password:{' '}
          <input type="password" name="password" onChange={handleChange} />
        </div>
        <button type="submit">로그인</button>
      </form>
    </div>
  );
}
