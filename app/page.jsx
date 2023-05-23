import Feed from "@components/Feed";

const Home = () => {
  return (
    <section className="w-full flex-center flex-col text-center">
      <h1 className="head_text">
        Discover and Share
        <br/>
        <span className="orange_gradient text-center">AI powered prompts</span>
      </h1>
      <p className="description text-center"></p>
      <Feed />
    </section>
  );
};

export default Home;
