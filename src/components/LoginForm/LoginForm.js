export const LoginForm = () => {
  const handleSubmit = e => {
    e.preventDefault();
  };

  return (
    <form autoComplete="off" onSubmit={handleSubmit}>
      <label>
        Email
        <input type="email" name="email" />
      </label>
      <label>
        Password
        <input type="password" name="password" />
      </label>
      <button type="submit">Log In</button>
    </form>
  );
};
