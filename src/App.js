import { useState, useEffect, useCallback } from 'react';
import { BiArchive ,BiTrash } from "react-icons/bi";
import './App.css';
import AddAppointment from './components/AddAppointment';
import Search from './components/Search';
import AppointmentInfo from './components/AppointmentInfo';
import { data } from 'autoprefixer';


function App() {
  let [appointmentList, setAppointmentList] = useState([]);
  const [nameSearch, setNameSearch] = useState("");
  let [sortBy, setSortBy] = useState("petName");
  let [orderBy, setOrderBy] = useState("asc");

  const filteredAppointments = appointmentList.filter((item) => {
    return (
      item.petName.toLowerCase().includes(nameSearch.toLowerCase() ) ||
      item.ownerName.toLowerCase().includes(nameSearch.toLowerCase() )
    );
  }).sort((a,b) => {
    let order = orderBy === 'asc' ? 1 : -1;
    return a[sortBy].toLowerCase() < b[sortBy].toLowerCase() ? -1 * order : 1 * order;
  });



  const fetchData = useCallback(() => {
    fetch("./data.json")
      .then((response) => response.json())
      .then((data) => {
        setAppointmentList(data);
      });
  }, []);

  useEffect(() => {fetchData();}, [fetchData]);
  return (
    <div className="App container mx-auto mt-2 font-thin">
      <h1 className="text-5xl">
        <BiArchive className="inline-block text-red-400 align-top" /> Your Appointments
      </h1>
      <AddAppointment 
        onSendAppointment={(myAppointment) => 
        setAppointmentList([...appointmentList, myAppointment])
        }
        lastId={appointmentList.reduce(
          (max, item) => (Number(item.id) > max ? Number(item.id) : max), 0
        )}
        />
      <Search  
        nameSearch = {nameSearch} 
        setNameSearch={(newSearch) => setNameSearch(newSearch)} 
        orderBy = {orderBy}
        onOrderByChange = {(mySort) => setOrderBy(mySort)}
        sortBy = {sortBy}
        onSortByChange = {(mySort) => setSortBy(mySort)}
      />
      
    <ul className=" divide-y divide-gray-200">
      { filteredAppointments.map((appointment) => (
          <AppointmentInfo key={appointment.id} appointment={appointment}
          onDeleteAppointment={(appointmentId) => 
          setAppointmentList(appointmentList.filter((appointment) => appointment.id !== appointmentId))} />
      ))}
    </ul>
    </div>
  );
}

export default App;