// import React from "react";
// import { useContext } from "react";
// import { AdminContext } from "../../context/AdminContext";
// import { useEffect } from "react";
// import { AppContext } from "../../context/AppContext";
// import { assets } from "../../assets/assets";

// const AllAppointments = () => {
//   const { aToken, appointments, getAllAppointments, cancelAppointment } =
//     useContext(AdminContext);
//   const { calculateAge, slotDateFormat, currency } = useContext(AppContext);

//   useEffect(() => {
//     if (aToken) {
//       getAllAppointments();
//     }
//   }, [aToken]);

//   return (
//     <div className="w-full max-w-6xl m-5">
//       <p className="mb-3 text-lg font-medium">All Appointments</p>
//       <div className="bg-white border border-gray-300 rounded text-sm max-h-[80vh] min-h-[60vh] overflow-y-scroll">
//         <div className="hidden sm:grid grid-cols-[0.5fr_3fr_1fr_3fr_3fr_1fr_1fr] grid-flow-col py-3 px-6 border-b border-gray-300 ">
//           <p>#</p>
//           <p>Patient:</p>
//           <p>Age</p>
//           <p>Date & Time</p>
//           <p>Doctor</p>
//           <p>Fees</p>
//           <p>Actions</p>
//           <p></p>
//         </div>

//         {appointments.map((item, index) => (
//           <div
//             className="flex flex-wrap justify-between max-sm:gap-2 sm:grid sm:grid-cols-[0.5fr_3fr_1fr_3fr_3fr_1fr_1fr] items-center text-gray-500 py-3 px-6 border-b border-gray-300 hover:bg-gray-50"
//             key={index}
//           >
//             <p className="max-sm:hidden">{index + 1}</p>
//             <div className="flex items-center gap-2">
//               <img
//                 className="w-8 h-8 rounded-full"
//                 src={item.userData.image}
//                 alt=""
//               />
//               <p>{item.userData.name}</p>
//             </div>

//             <p className="max-sm:hidden">{calculateAge(item.userData.dob)}</p>

//             <p>
//               {slotDateFormat(item.slotDate)} , {item.slotTime}
//             </p>

//             <div className="flex items-center gap-2">
//               <img
//                 className="w-8 h-8 rounded-full bg-gray-200"
//                 src={item.docData.image}
//                 alt=""
//               />
//               <p>{item.docData.name}</p>
//             </div>

//             <p>
//               {currency} {item.amount}
//             </p>

//             {item.cancelled ? (
//               <p className="text-red-700 text-xs font-medium">Cancelled</p>
//             ) : (
//               <i
//                 onClick={() => cancelAppointment(item._id)}
//                 className="bi bi-x-circle-fill w-10 cursor-pointer text-red-700 text-xl"
//               ></i>
//             )}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default AllAppointments;

import React, { useContext, useEffect } from "react";
import { AdminContext } from "../../context/AdminContext";
import { AppContext } from "../../context/AppContext";
import { assets } from "../../assets/assets";

const AllAppointments = () => {
  const { aToken, appointments, getAllAppointments, cancelAppointment } = useContext(AdminContext);
  const { calculateAge, slotDateFormat, currency } = useContext(AppContext);

  useEffect(() => {
    if (aToken) {
      getAllAppointments();
    }
  }, [aToken]);

  return (
    <div className="w-full max-w-6xl m-5">
      <p className="mb-3 text-lg font-medium">All Appointments</p>
      <div className="bg-white border border-gray-300 rounded text-sm max-h-[80vh] overflow-y-scroll">
        <div className="hidden sm:grid grid-cols-[0.5fr_3fr_1fr_3fr_3fr_1fr_1fr] grid-flow-col py-3 px-6 border-b border-gray-300">
          <p>#</p>
          <p>Patient:</p>
          <p>Age</p>
          <p>Date & Time</p>
          <p>Doctor</p>
          <p>Fees</p>
          <p>Actions</p>
        </div>
        {appointments.map((item, index) => (
          <div key={index} className="border-b border-gray-300 hover:bg-gray-50">
            <div className="hidden sm:grid sm:grid-cols-[0.5fr_3fr_1fr_3fr_3fr_1fr_1fr] items-center text-gray-500 py-3 px-6">
              <p>{index + 1}</p>
              <div className="flex items-center gap-2">
                <img className="w-8 h-8 rounded-full" src={item.userData.image} alt="" />
                <p className="break-words whitespace-normal">{item.userData.name}</p>
              </div>
              <p>{calculateAge(item.userData.dob)}</p>
              <p className="break-words whitespace-normal">{slotDateFormat(item.slotDate)} , {item.slotTime}</p>
              <div className="flex items-center gap-2">
                <img className="w-8 h-8 rounded-full bg-gray-200" src={item.docData.image} alt="" />
                <p className="break-words whitespace-normal">{item.docData.name}</p>
              </div>
              <p>{currency} {item.amount}</p>
              {item.cancelled ? (
                <p className="text-red-700 text-xs font-medium">Cancelled</p>
              ) : (
                <i
                  onClick={() => cancelAppointment(item._id)}
                  className="bi bi-x-circle-fill w-10 cursor-pointer text-red-700 text-xl"
                ></i>
              )}
            </div>
            <div className="sm:hidden flex flex-col gap-2 py-3 px-4 text-gray-700">
              <div className="flex items-center gap-2">
                <span className="font-semibold text-gray-500">Patient:</span>
                <img className="w-8 h-8 rounded-full" src={item.userData.image} alt="" />
                <span className="break-words whitespace-normal">{item.userData.name}</span>
              </div>
              <div>
                <span className="font-semibold text-gray-500">Age: </span>
                <span>{calculateAge(item.userData.dob)}</span>
              </div>
              <div>
                <span className="font-semibold text-gray-500">Date & Time: </span>
                <span className="break-words whitespace-normal">{slotDateFormat(item.slotDate)} , {item.slotTime}</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-semibold text-gray-500">Doctor:</span>
                <img className="w-8 h-8 rounded-full bg-gray-200" src={item.docData.image} alt="" />
                <span className="break-words whitespace-normal">{item.docData.name}</span>
              </div>
              <div>
                <span className="font-semibold text-gray-500">Fees: </span>
                <span>{currency} {item.amount}</span>
              </div>
              <div>
                <span className="font-semibold text-gray-500">Status: </span>
                {item.cancelled ? (
                  <span className="text-red-700 text-xs font-medium">Cancelled</span>
                ) : (
                  <i
                    onClick={() => cancelAppointment(item._id)}
                    className="bi bi-x-circle-fill w-10 cursor-pointer text-red-700 text-xl"
                  ></i>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllAppointments;