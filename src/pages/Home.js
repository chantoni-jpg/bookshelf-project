import HomeHeader from "../components/Header";
import FormForHome from "../components/Form";
import "./Home.css";
function Home() {
  return (
    <div className="home">
      <HomeHeader />
      <FormForHome />
    </div>
  );
}

export default Home;
