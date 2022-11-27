import { BiTrash } from "react-icons/bi";

function AppointmentInfo({ appointment, onDeleteAppointment }) {
  return (
    <li className="px-3 py-3 flex items-start">
      <button
      onClick={()=>{onDeleteAppointment(appointment.id); 
      }}
       type="button"
      className=" p-1.5 mr-1.5 mt-1 rounded hover:bg-yellow-700 bg-red-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
        <BiTrash />
      </button>
      <div className=" flex-grow">
        <div className=" flex items-center">
          <span className=" flex-none font-medium text-2xl text-blue-500">
            {appointment.petName}
          </span>
          <span className=" relative right-4 flex-grow text-center font-semibold text-black">
            {" "}
            {appointment.aptDate}
          </span>
        </div>
        <div className=" font-semibold text-xl text-blue-500">
          <b className=" font-semibold text-xl text-black">Owner:</b>
            {appointment.ownerName}
          {" "}
        </div>
        <div className=" font-medium leading-tight">{appointment.aptNotes}</div>
      </div>
    </li>
  );
}

export default AppointmentInfo;