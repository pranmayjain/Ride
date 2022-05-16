import "./App.css";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const data = {
    Ride: [
      {
        id: "001",
        origin_station_code: "23",
        station_path: "[23, 42, 45, 48, 56, 60, 77, 81, 93]",
        destination_station_code: "93",
        date: "1644924365",
        map_url: "url",
        state: "Maharashtra",
        city: "Panvel",
      },
      {
        id: "002",
        origin_station_code: "20",
        station_path: "[20, 39, 40, 42, 54, 63, 72, 88, 98]",
        destination_station_code: "98",
        date: "1644924365",
        map_url: "url",
        state: "Gujrat",
        city: "Surat",
      },
      {
        id: "003",
        origin_station_code: "13",
        station_path: "[13, 25, 41, 48, 59, 64, 75, 81, 91]",
        destination_station_code: "91",
        date: "1644924365",
        map_url: "url",
        state: "Rajasthan",
        city: "Jaipur",
      },
    ],
  };

  const user = {
    station_code: "40",
    name: "Dhruv Singh",
    profile_key: "url",
  };

  let arr = JSON.parse("[" + data.Ride[0].station_path + "]");
  let arr1 = JSON.parse("[" + data.Ride[1].station_path + "]");
  let arr2 = JSON.parse("[" + data.Ride[2].station_path + "]");
  let arr3 = arr + "," + arr1 + "," + arr2;
  arr3 = arr3.split(",");
  arr3.sort(function (a, b) {
    return a - b;
  });
  arr3 = [...new Set(arr3)];

  return (
    <>
      <Router>
        <Navbar user={user} />

        <Routes>
          <Route
            path="/"
            element={
              <Home
                data={data}
                user={user}
                arr={arr}
                arr1={arr1}
                arr2={arr2}
                arr3={arr3}
              />
            }
          ></Route>
        </Routes>
        <Routes>
          <Route
            path="/nearestrides"
            element={
              <Home
                data={data}
                user={user}
                arr={arr}
                arr1={arr1}
                arr2={arr2}
                arr3={arr3}
              />
            }
          ></Route>
        </Routes>
        <Routes>
          <Route
            path="/upcomingrides"
            element={
              <Home
                data={data}
                user={user}
                arr={arr}
                arr1={arr1}
                arr2={arr2}
                arr3={arr3}
              />
            }
          ></Route>
        </Routes>
        <Routes>
          <Route
            path="/pastrides"
            element={
              <Home
                data={data}
                user={user}
                arr={arr}
                arr1={arr1}
                arr2={arr2}
                arr3={arr3}
              />
            }
          ></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
