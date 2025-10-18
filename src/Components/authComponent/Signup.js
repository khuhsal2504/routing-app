import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

export default function Signup() {
  const { register, handleSubmit, formState: { errors }, getValues } = useForm();

  const onSubmit = (data) => {
    console.log('Signup data:', data);
    // Simulate signup
    alert('Signup successful!');
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card">
            <div className="card-body">
              <h2 className="card-title text-center">Sign Up</h2>
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="mb-3">
                  <label htmlFor="username" className="form-label">Username</label>
                  <input
                    type="text"
                    className="form-control"
                    id="username"
                    {...register('username', { required: 'Username is required', minLength: { value: 3, message: 'Min 3 characters' } })}
                  />
                  {errors.username && <div className="text-danger">{errors.username.message}</div>}
                </div>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">Email</label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    {...register('email', { required: 'Email is required' })}
                  />
                  {errors.email && <div className="text-danger">{errors.email.message}</div>}
                </div>
                <div className="mb-3">
                  <label htmlFor="password" className="form-label">Password</label>
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                    {...register('password', { required: 'Password is required', minLength: { value: 6, message: 'Min 6 characters' } })}
                  />
                  {errors.password && <div className="text-danger">{errors.password.message}</div>}
                </div>
                <div className="mb-3">
                  <label htmlFor="confirmPassword" className="form-label">Confirm Password</label>
                  <input
                    type="password"
                    className="form-control"
                    id="confirmPassword"
                    {...register('confirmPassword', {
                      required: 'Confirm password is required',
                      validate: value => value === getValues('password') || 'Passwords do not match'
                    })}
                  />
                  {errors.confirmPassword && <div className="text-danger">{errors.confirmPassword.message}</div>}
                </div>
                <button type="submit" className="btn btn-primary w-100">Sign Up</button>
              </form>
              <div className="text-center mt-3">
                <p>Already have an account? <Link to="/login">Login</Link></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
