const Profil = () => {
  return (
    <>
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
          <span className='user-data'>12312312</span>
        </div>
        <div className='email'>
          <span>EMAIL</span>
          <span className='user-data'>12312312</span>
        </div>
      </div>
    </>
  );
};

export default Profil;
