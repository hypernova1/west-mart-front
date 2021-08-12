import React, { FormEvent, useEffect, useState } from 'react';
import { LoginForm } from '../../types/auth';
import { login } from '../../actions/auth';

export default function Login() {

  const [loginForm, setLoginForm] = useState<LoginForm>({
    email: '',
    password: '',
  });

  const handleChange = (e: React.ChangeEvent<{ name: string, value?: unknown }>) => {
    setLoginForm({
      ...loginForm,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    await login(loginForm);
    console.log(1);
  }

  useEffect(() => {
  }, [loginForm])

  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmit(e);
      }}
      >
        <div>
          email: <input type="text" name="email" onChange={handleChange} />
        </div>
        <div>
          password: <input type="password" name="password" onChange={handleChange} />
        </div>
        <button type="submit">로그인</button>
      </form>
    </div>
  );
}