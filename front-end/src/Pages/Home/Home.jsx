import AddNewBook from "../../Components/AddNewBook";
import BookList from "../../Components/BookList";
import Header from "../../Components/Header";

const Home = () => {
  return (
    <>
      <Header />

      <main className="py-12 2xl:px-6">
        <div className="container grid xl:grid-cols-[auto_350px] 2xl:grid-cols-[auto_400px] gap-4 2xl:gap-8">
          <BookList />

          <AddNewBook />
        </div>
      </main>
    </>
  );
};

export default Home;
