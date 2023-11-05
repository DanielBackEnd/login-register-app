import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useLogoutMutation } from '../slices/userApiSlice';
import { logout } from '../slices/authSlice';

const Profil = () => {
  const { userInfo } = useSelector(state => state.auth);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [logoutApiCall] = useLogoutMutation();

  const logoutHandler = async () => {
    try {
      await logoutApiCall().unwrap();
      dispatch(logout());
      navigate('/login');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className='logout-btn' onClick={logoutHandler}>
        <a href='#'>Logout</a>
      </div>
      <h1 className='desc-title'>Personal info</h1>
      <p className='desc-subtitle'>Basic info, like your name and email</p>
      <div className='wrapper desc-wrapper'>
        <div className='description'>
          <div className='info'>
            <p>Profile</p>
            <span>Some info may be visible to other people</span>
          </div>
          <div className='edit-btn'>
            <a href='#'>Edit</a>
          </div>
        </div>
        <div className='name'>
          <span>NAME</span>
          <span className='user-data'>{userInfo && userInfo.name}</span>
        </div>
        <div className='email'>
          <span>EMAIL</span>
          <span className='user-data'>{userInfo && userInfo.email}</span>
        </div>
      </div>
    </>
  );
};

export default Profil;
