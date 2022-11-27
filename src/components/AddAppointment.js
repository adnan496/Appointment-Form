import { useState } from "react";
import { BiCalendarPlus } from "react-icons/bi";
function AddAppointment({ onSendAppointment, lastId }) {
    const clearData = {
        ownerName: "",
        petName: "",
        aptDate: "",
        aptTime: "",
        aptNotes: "",
    };

    let [toggleForm, setToggleForm] = useState(false);
    let [formData, setFormData] = useState(clearData);

    function formDataSubmit() {
        const appointmentInfo = {
            id: lastId + 1,
            ownerName: formData.ownerName,
            petName: formData.petName,
            aptDate: formData.aptDate + " " + formData.aptTime,
            aptNotes: formData.aptNotes,
        };
        onSendAppointment(appointmentInfo);
        setFormData(clearData);
        setToggleForm(!toggleForm);
    }

  return (
    <div>
        <button 
            onClick={ () => { setToggleForm (!toggleForm); } } 
            className={`bg-blue-400 text-white px-2 py-3 w-full text-left rounded-t-md
            ${ toggleForm ? "rounded-t-md bg-blue-400" : "rounded-md bg-red-400"}` }  >
            <div className=" font-medium">
                <BiCalendarPlus className="inline-block align-text-top" />Add Appointment
            </div>
        </button>
        {toggleForm && (
            <div className="border-r-2 border-b-2 border-l-2 border-light-blue-500 rounded-b-md pl-4 pr-4 pb-4">
            <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:pt-5">
                <label htmlFor="ownerName" className="block font-medium text-black sm:mt-px sm:pt-2 relative left-3">
                    Owner Name
                </label>
                <div className="mt-1 sm:mt-0 sm:col-span-2">
                    <input
                        onChange={(event) => {
                            setFormData({ ...formData, ownerName: event.target.value });
                        }}
                        value={formData.ownerName}
                        id="ownerName"
                        name="ownername"
                    className="max-w-lg block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:max-w-xs font-medium border-gray-300 rounded-md" type="text"></input>
                </div>
            </div>

            <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:pt-5">
                <label htmlFor="petName" className="block font-medium text-black sm:mt-px sm:pt-2">
                    Pet Name
                </label>
                <div className="mt-1 sm:mt-0 sm:col-span-2">
                    <input
                        onChange={(event) => {
                            setFormData({ ...formData, petName: event.target.value });
                        }}
                        value={formData.petName}
                    className="max-w-lg block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:max-w-xs font-medium border-gray-300 rounded-md" type="text"></input>
                </div>
            </div>

            <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:pt-5">
                <label htmlFor="aptDate" className="block font-medium text-black sm:mt-px sm:pt-2 relative left-7">
                    Appointment Date
                </label>
                <div className="mt-1 sm:mt-0 sm:col-span-2">
                    <input 
                        onChange={(event) => {
                            setFormData({ ...formData, aptDate: event.target.value });
                        }}
                        value={formData.aptDate}
                    className="max-w-lg block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:max-w-xs font-medium border-gray-300 rounded-md" type="date"></input>
                </div>
            </div>  

            <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:pt-5">
                <label htmlFor="aptTime" className="block font-medium text-black sm:mt-px sm:pt-2 relative left-7">
                    Appointment Time
                </label>
                <div className="mt-1 sm:mt-0 sm:col-span-2">
                    <input 
                        onChange={(event) => {
                            setFormData({ ...formData, aptTime: event.target.value });
                        }}
                        value={formData.aptTime}
                    className="max-w-lg block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:max-w-xs font-medium border-gray-300 rounded-md" type="time"></input>
                </div>
            </div>   

            <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:pt-5">
                <label htmlFor="message" className="block font-medium text-black sm:mt-px sm:pt-2 relative -left-3">
                    Message   
                </label>
                <div className="mt-1 sm:mt-0 sm:col-span-2">
                    <textarea
                        onChange={(event) => {
                            setFormData({ ...formData, aptNotes: event.target.value });
                        }}
                        value={formData.aptNotes}
                    rows="3" className="max-w-lg block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:max-w-xs font-medium border-gray-300 rounded-md" type="text"></textarea>
                </div>
            </div> 

            <div className="pt-5">
                <div>
                    <button 
                      type="submit"
                      onClick={formDataSubmit}
                     >
                    Submit
                    </button>
                </div>
            </div>

        </div>
        )}
   </div>
  );
}

export default AddAppointment