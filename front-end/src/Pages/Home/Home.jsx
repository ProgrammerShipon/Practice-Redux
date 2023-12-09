import { Provider } from "react-redux";
import store from "../../Features/Store";
import AllTodos from "./AllTodos";
import CompleteClear from "./CompleteClear";
import CreateTodo from "./CreateTodo";
import FooterAction from "./FooterAction";

const Home = () => {
  return (
    <>
      <Provider store={store}>
        <section>
          <div className="grid place-items-center bg-blue-100 h-screen px-6 font-sans">
            <div className="w-full max-w-3xl shadow-lg rounded-lg p-6 bg-white">
              <div>
                <CreateTodo />

                <CompleteClear />
              </div>
              <hr className="mt-4" />

              <AllTodos />

              <hr className="mt-4" />

              <FooterAction />
            </div>
          </div>
        </section>
      </Provider>
    </>
  );
};

export default Home;
