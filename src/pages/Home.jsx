import Calendar from "react-calendar";
import AddNewSchedule from "../components/AddNewSchedule";
import AirdropCalendar from "../components/Calendar";
import SearchEvent from "../components/SearchEvent";
import TodayNews from "../components/TodayNews";

const Home = () => {
  return (
    <main>
      <SearchEvent />
      <AddNewSchedule />
      <Calendar />
      <TodayNews />
      <AirdropCalendar />
    </main>
  );
};

export default Home;
