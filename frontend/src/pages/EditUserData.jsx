const EditUserData = () => {
  return (
    <>
      <div className='wrapper desc-wrapper'>
        <div className='description'>
          <div className='info'>
            <p>Change Info</p>
            <span>Changes will be reflected to every services</span>
          </div>
        </div>
        <form className='edit-data-form'>
          <label htmlFor='name'>Name</label>
          <input type='text' placeholder='Enter your name...' />
          <label htmlFor='email'>Email</label>
          <input type='text' placeholder='Enter your email...' />
          <button type='submit'>Save</button>
        </form>
      </div>
    </>
  );
};

export default EditUserData;
