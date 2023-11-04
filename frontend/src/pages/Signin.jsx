const Signup = () => {
  return (
    <>
      <div className='wrapper sign-wrapper'>
        <h3 className='title'>Login</h3>
        <p className='subtitle'>
          Master web development by making real-life projects. There are
          multiple paths for you to choose
        </p>
        <form>
          <input type='email' name='' id='' placeholder='Email' />
          <input type='password' name='' id='' placeholder='Password' />
          <button type='submit'>Sing in</button>
        </form>
        <p className='member-link'>
          Don’t have an account yet? <a href='#'>Register</a>
        </p>
      </div>
    </>
  );
};

export default Signup;
