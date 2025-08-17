import React, { useContext, useEffect } from "react";
import { DoctorContext } from "../../context/DoctorContext";
import { AppContext } from "../../context/AppContext";

const DoctorDashboard = () => {
  const {
    dToken,
    dashData,
    setDashData,
    getDashData,
    completeAppointment,
    cancelAppointment,
  } = useContext(DoctorContext);
  const { currency, slotDateFormat } = useContext(AppContext);

  useEffect(() => {
    if (dToken) {
      getDashData();
    }
  }, [dToken]);

  return (
    dashData && (
      <div className="m-5">
        <div className="flex flex-wrap gap-3">
          <div className="flex items-center gap-2 bg-white p-4 min-w-52 rounded border-2 border-gray-100 cursor-pointer hover:scale-105 transition-all">
            <div className="w-14 h-14 bg-gray-50 rounded-full flex items-center justify-center">
              <i className="fa-solid fa-sack-dollar text-4xl"></i>
            </div>

            <div>
              <p className="text-xl font-semibold text-gray-600">
                {currency} {dashData.earnings}
              </p>
              <p className="text-gray-400">Earnings</p>
            </div>
          </div>

          <div className="flex items-center gap-2 bg-white p-4 min-w-52 rounded border-2 border-gray-100 cursor-pointer hover:scale-105 transition-all">
            <div className="w-14 h-14 bg-gray-50 rounded-full flex items-center justify-center relative">
              <i className="fa-solid fa-calendar text-4xl"></i>
              <i className="fa-solid fa-magnifying-glass text-sm text-gray-100 absolute transform translate-x-1/2 translate-y-1/2"></i>
            </div>

            <div>
              <p className="text-xl font-semibold text-gray-600">
                {dashData.appointments}
              </p>
              <p className="text-gray-400">Appointments</p>
            </div>
          </div>

          <div className="flex items-center gap-2 bg-white p-4 min-w-52 rounded border-2 border-gray-100 cursor-pointer hover:scale-105 transition-all">
            <div className="w-14 h-14 bg-gray-50 rounded-full flex items-center justify-center">
              <i className="fa-solid fa-user-injured text-4xl"></i>
            </div>
            <div>
              <p className="text-xl font-semibold text-gray-600">
                {dashData.patients}
              </p>
              <p className="text-gray-400">Patients</p>
            </div>
          </div>
        </div>

        {/*-------- Latest Booking --------*/}
        <div className="bg-white">
          <div
            className="flex items-center gap-2.5
           px-4 py-4 mt-10 rounded-t border border-gray-300"
          >
            <i className="fa-solid fa-list"></i>
            <p className="font-semibold">Latest Bookings</p>
          </div>

          <div className=" border border-t-0 border-gray-300">
            {dashData.latestAppointments.map((item, index) => (
              <div
                className="flex items-center px-6 py-3 gap-3 hover:bg-gray-100"
                key={index}
              >
                <img
                  className="rounded-full w-10"
                  src={item.userData.image}
                  alt=""
                />
                <div className="flex-1 text-sm">
                  <p className="text-gray-800 font-medium">
                    {item.userData.name}
                  </p>
                  <p className="text-gray-600">
                    {slotDateFormat(item.slotDate)}
                  </p>
                </div>
                {item.cancelled ? (
                  <p className="text-red-700 text-xs font-medium">Cancelled</p>
                ) : item.isCompleted ? (
                  <p className="text-green-700 text-xs font-medium">
                    Completed
                  </p>
                ) : (
                  <div className="flex">
                    <i
                      onClick={() => cancelAppointment(item._id)}
                      className="bi bi-x-circle-fill cursor-pointer text-red-700 text-xl"
                    ></i>

                    <i
                      onClick={() => completeAppointment(item._id)}
                      className="bi bi-check-circle-fill cursor-pointer text-green-700 text-xl mx-2"
                    ></i>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  );
};

export default DoctorDashboard;
