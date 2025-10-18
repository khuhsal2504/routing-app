import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

export default function Login() {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    console.log('Login data:', data);
    // Simulate login
    alert('Login successful!');
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card">
            <div className="card-body">
              <h2 className="card-title text-center">Login</h2>
              <form onSubmit={handleSubmit(onSubmit)}>
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
                    {...register('password', { required: 'Password is required' })}
                  />
                  {errors.password && <div className="text-danger">{errors.password.message}</div>}
                </div>
                <button type="submit" className="btn btn-primary w-100">Login</button>
              </form>
              <div className="text-center mt-3">
                <p>Don't have an account? <Link to="/signup">Sign up</Link></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
