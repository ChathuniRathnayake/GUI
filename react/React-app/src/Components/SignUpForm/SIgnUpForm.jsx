import React from 'react';
import './SignUpForm.css';

export function SignupForm() {
  return (
    <form className="formContainer">
      <label htmlFor="name" className="visually-hidden">Name</label>
      <input
        type="text"
        id="name"
        className="inputField"
        placeholder="Name"
        required
      />

      <label htmlFor="email" className="visually-hidden">Email</label>
      <input
        type="email"
        id="email"
        className="inputField"
        placeholder="E-mail"
        required
      />

      <label htmlFor="password" className="visually-hidden">Password</label>
      <input
        type="password"
        id="password"
        className="inputField"
        placeholder="Password"
        required
      />

      <button type="submit" className="submitButton">
        Sign up
      </button>
    </form>
  );
}
