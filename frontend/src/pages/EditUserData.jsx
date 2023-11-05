import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useUpdateUserMutation } from '../slices/userApiSlice';
import { setCredentials } from '../slices/authSlice';
import { toast } from 'react-toastify';

const EditUserData = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { userInfo } = useSelector(state => state.auth);

  const [updateProfile] = useUpdateUserMutation();

  useEffect(() => {
    setName(userInfo.name);
    setEmail(userInfo.email);
  }, [userInfo.name, userInfo.email]);

  const submitHandler = async e => {
    e.preventDefault();
    try {
      const response = await updateProfile({
        _id: userInfo._id,
        name,
        email,
      }).unwrap();
      dispatch(setCredentials(...res));
      toast.success('Profile updated!');
      navigate('/profile');
    } catch (error) {
      toast.error(error?.data?.errorMessage || error.errorMessage);
    }
  };

  return (
    <>
      <div className='wrapper desc-wrapper'>
        <div className='description'>
          <div className='info'>
            <p>Change Info</p>
            <span>Changes will be reflected to every services</span>
          </div>
        </div>
        <form className='edit-data-form' onSubmit={submitHandler}>
          <label htmlFor='name'>Name</label>
          <input
            type='text'
            placeholder='Enter your name...'
            value={name}
            onChange={e => setName(e.target.value)}
          />
          <label htmlFor='email'>Email</label>
          <input
            type='text'
            placeholder='Enter your email...'
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
          <button type='submit'>Save</button>
        </form>
      </div>
    </>
  );
};

export default EditUserData;
