import { useState } from 'react';
import './LoginCard.css';

const validate = (values) => {
  const errors = {};

  if (!values.email.trim()) {
    errors.email = 'Email is required';
  } else if (!/^[\w-.]+@[\w-]+\.[a-zA-Z]{2,}$/.test(values.email)) {
    errors.email = 'Enter a valid email address';
  }

  if (!values.password) {
    errors.password = 'Password is required';
  } else if (values.password.length < 6) {
    errors.password = 'Password must be at least 6 characters';
  }

  return errors;
};

function LoginCard() {
  const [values, setValues] = useState({ email: '', password: '', remember: true });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;
    setValues((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));

    if (errors[name]) {
      setErrors((prev) => {
        const { [name]: ignored, ...rest } = prev;
        return rest;
      });
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const validation = validate(values);

    if (Object.keys(validation).length) {
      setErrors(validation);
      setStatus('');
      return;
    }

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setStatus('Welcome back! You have been securely signed in.');
    }, 600);
  };

  return (
    <section className="login-card" aria-label="Sign in form">
      <div className="login-card__header">
        <p className="micro-copy">Welcome back</p>
        <h2>Sign in to your workspace</h2>
        <p className="micro-copy">Enter your credentials securely below.</p>
      </div>
      <form onSubmit={handleSubmit} noValidate>
        <label className="input-group">
          <span>Email</span>
          <input
            type="email"
            name="email"
            placeholder="you@example.com"
            value={values.email}
            onChange={handleChange}
            className={errors.email ? 'input-invalid' : ''}
          />
          <small>{errors.email || ' '}</small>
        </label>

        <label className="input-group">
          <span>Password</span>
          <input
            type="password"
            name="password"
            placeholder="••••••••"
            value={values.password}
            onChange={handleChange}
            className={errors.password ? 'input-invalid' : ''}
          />
          <small>{errors.password || ' '}</small>
        </label>

        <div className="login-card__actions">
          <label className="checkbox-group">
            <input
              type="checkbox"
              name="remember"
              checked={values.remember}
              onChange={handleChange}
            />
            <span>Remember me</span>
          </label>
          <button type="button" className="text-button">
            Forgot password?
          </button>
        </div>

        <button type="submit" className="primary-button" disabled={isSubmitting}>
          {isSubmitting ? 'Signing you in…' : 'Sign in'}
        </button>

        {status && <p className="status-message">{status}</p>}
      </form>

      <div className="login-card__footer">
        <p>
          Need an account? <button type="button" className="text-button">Create one</button>
        </p>
      </div>
    </section>
  );
}

export default LoginCard;
