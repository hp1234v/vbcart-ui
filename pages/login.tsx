import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

import styles from './login.module.css';

const DUMMY_USER = {
  username: 'user',
  password: 'password123',
};

export default function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();

  useEffect(() => {
    if (typeof window !== 'undefined' && localStorage.getItem('isLoggedIn') === 'true') {
      router.replace('/');
    }
  }, [router]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (username === DUMMY_USER.username && password === DUMMY_USER.password) {
      localStorage.setItem('isLoggedIn', 'true');
      router.replace('/');
    } else {
      setError('Invalid credentials');
    }
  };

  return (
    <div className={styles.container}>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div className={styles.inputGroup}>
          <label>Username</label>
          <input
            type="text"
            value={username}
            onChange={e => setUsername(e.target.value)}
            className={styles.input}
            required
          />
        </div>
        <div className={styles.inputGroup}>
          <label>Password</label>
          <input
            type="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            className={styles.input}
            required
          />
        </div>
        {error && <div className={styles.error}>{error}</div>}
        <button type="submit" className={styles.button}>Login</button>
      </form>
      <div className={styles.hint}>
        <div>Dummy credentials:</div>
        <div>Username: <b>user</b></div>
        <div>Password: <b>password123</b></div>
      </div>
    </div>
  );
}
