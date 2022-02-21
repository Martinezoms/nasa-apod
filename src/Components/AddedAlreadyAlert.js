import React from "react";

function AddedAlreadyAlert() {
  return (
    <div className="fixed bottom-6 right-12 z-20 alert bg-white py-2 px-4 rounded-md text-2xl font-bold text-red-500 shadow-xl transition-[0.3s]">
      <h1>Already added!</h1>
    </div>
  );
}

export default AddedAlreadyAlert;
