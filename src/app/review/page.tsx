"use client";
import { useFormContext } from "@/libs/context/FormContext";
import { useRouter } from "next/navigation";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function ReviewVisit() {
  const { formData } = useFormContext();
  const router = useRouter();

  const handleSubmit = async () => {
    console.log("Form Data: ", formData); // Log form data to console

    // Mock API call
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000)); // Simulate API call delay
      console.log("Data sent to the endpoint successfully.");

      // Show toast notification
      toast.success(
        `Great news ${formData.visitName}, your visit registration is complete`,
        {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        }
      );

      // Redirect to the homepage after showing the toast
      setTimeout(() => {
        router.push("/");
      }, 5000);
    } catch (error) {
      console.error("Error sending data to the endpoint: ", error);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-top py-8">
      <h1 className="text-2xl mb-4 w-full text-left pl-16">Review your Visit details</h1>
      <div className="w-full max-w-7xl px-8">
        <div className="mb-8">
          <h2 className="text-xl mb-4">Your Visit details</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <p className="font-semibold">Visit name</p>
              <p>{formData.visitName}</p>
            </div>
            <div>
              <p className="font-semibold">Date</p>
              <p>{formData.date}</p>
            </div>
            <div>
              <p className="font-semibold">Entry time</p>
              <p>{formData.entryTime}</p>
            </div>
            <div>
              <p className="font-semibold">Visit duration</p>
              <p>{formData.visitDuration}</p>
            </div>
            <div>
              <p className="font-semibold">Entry point</p>
              <p>{formData.entryPoint}</p>
            </div>
            <div>
              <p className="font-semibold">Meeting point level</p>
              <p>{formData.meetingPointLevel}</p>
            </div>
            <div>
              <p className="font-semibold">Meeting point stand</p>
              <p>{formData.meetingPointStand}</p>
            </div>
            <div>
              <p className="font-semibold">Meeting point room</p>
              <p>{formData.meetingPointRoom}</p>
            </div>
          </div>
        </div>
        <button
          onClick={handleSubmit}
          className="bg-green-500 text-white p-2 rounded mt-4 w-full max-w-xs mx-auto"
        >
          Submit Visit
        </button>
      </div>
      <ToastContainer />
    </div>
  );
}
