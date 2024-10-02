import BlogList from "./BlogList";
import useFetch from "./useFetch";

const Home = () => {
  const {
    error,
    isPending,
    data: blogs,
  } = useFetch("https://db-data.onrender.com/blogs");

  return (
    <div className="home">
      {error && <div>{error}</div>}
      {isPending && <div>Dhruv's JSON server is currently taking its sweet time to awaken from its free service slumber on Render.com. Please bear with us—good things come to those who wait... or so they say!</div>}
      {blogs && <BlogList blogs={blogs} />}
    </div>
  );
};

export default Home;
