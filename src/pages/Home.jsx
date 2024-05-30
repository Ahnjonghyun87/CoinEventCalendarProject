import Calendar from "react-calendar";
import AddNewSchedule from "../components/AddNewSchedule";
import SearchEvent from "../components/SearchEvent";
import TodayNews from "../components/TodayNews";

const Home = () => {
  return (
    <main>
      <SearchEvent />
      <AddNewSchedule />
      <Calendar />
      <TodayNews />
    </main>
  );
};

export default Home;
