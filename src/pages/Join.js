const Join = () => {
  return (
    <form className="container">
      <label htmlFor="name">Name</label>
      <input type="text" name="name" id="name" />
      <label htmlFor="email">Email</label>
      <input type="email" name="email" id="email" />
      <label htmlFor="category">Category</label>
      <select name="category" id="category">
        <option value="sports">Sports</option>
        <option value="entertainment">Entertainment</option>
        <option value="Technology">Technology</option>
      </select>

      <input type="submit" value="submit" />
    </form>
  );
};

export default Join;
