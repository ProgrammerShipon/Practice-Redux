import VideoGrid from "../Components/Grid/VideoGrid";
import Pagination from "../Components/Pagination/Pagination";
import Tags from "../Components/Tags/Tags.jsx";

const Home = () => {
  return (
    <>
      <Tags />
      <VideoGrid />
      <Pagination />
    </>
  );
};

export default Home;
