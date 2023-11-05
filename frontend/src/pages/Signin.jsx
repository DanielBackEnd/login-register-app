import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useLoginMutation } from '../slices/userApiSlice';
import { setCredentials } from '../slices/authSlice';
import { toast } from 'react-toastify';

const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [login, { isLoading }] = useLoginMutation();

  const { userInfo } = useSelector(state => state.auth);

  useEffect(() => {
    if (userInfo) {
      navigate('/profile');
    }
  }, [navigate, userInfo]);

  const submitHandler = async e => {
    e.preventDefault();
    try {
      const response = await login({ email, password }).unwrap();
      dispatch(setCredentials({ ...response }));
      navigate('/profile');
    } catch (error) {
      toast.error(error?.data?.errorMessage || error.errorMessage);
    }
  };

  return (
    <>
      <div className='wrapper sign-wrapper'>
        <h3 className='title'>Login</h3>
        <p className='subtitle'>
          Master web development by making real-life projects. There are
          multiple paths for you to choose
        </p>
        <form onSubmit={submitHandler}>
          <input
            type='email'
            placeholder='Email'
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
          <input
            type='password'
            placeholder='Password'
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
          <button type='submit'>Sing in</button>
        </form>
        <p className='member-link'>
          Don’t have an account yet? <Link to={`/`}>Register</Link>
        </p>
      </div>
    </>
  );
};

export default Signup;
