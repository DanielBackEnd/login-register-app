const Signup = () => {
  return (
    <>
      <div className='wrapper sign-wrapper'>
        <h3 className='title'>
          Join thousands of learners from around the world
        </h3>
        <p className='subtitle'>
          Master web development by making real-life projects. There are
          multiple paths for you to choose
        </p>
        <form>
          <input type='email' name='' id='' placeholder='Email' />
          <input type='text' name='' id='' placeholder='Name' />
          <input type='password' name='' id='' placeholder='Password' />
          <button type='submit'>Sing up</button>
        </form>
        <p className='member-link'>
          Already a member? <a href='#'>Login</a>
        </p>
      </div>
    </>
  );
};

export default Signup;
