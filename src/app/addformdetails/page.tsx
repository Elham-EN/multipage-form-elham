"use client";
import { useFormContext } from "@/libs/context/FormContext";
import { useRouter } from "next/navigation";
import { SubmitHandler, useForm } from "react-hook-form";

type Inputs = {
  visitName: string;
  date: string;
  entryTime: string;
  entryPoint: string;
  meetingPointLevel: string;
  meetingPointStand: string;
  meetingPointRoom: string;
  visitDuration: string;
};

export default function RegisterVisitPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();
  const router = useRouter();
  const { updateFormData } = useFormContext();

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    updateFormData(data);
    console.log(data);
    router.push("/review");
  };

  return (
    <div className="flex flex-col items-center justify-top py-8 px-4 sm:px-6 lg:px-8">
      <h1 className="text-2xl mb-4 w-full text-left pl-4 sm:pl-8 lg:pl-16">
        Register a new Visit
      </h1>
      <form onSubmit={handleSubmit(onSubmit)} className="w-full max-w-7xl">
        <div className="flex flex-wrap -mx-4 mb-8">
          <div className="w-full sm:w-1/2 px-4 mb-4">
            <label className="block mb-2">Visit name</label>
            <input
              type="text"
              {...register("visitName", { required: "Visit name is required" })}
              className="w-full p-2 border rounded"
              placeholder="i.e. Meeting with John Citizen"
            />
            {errors.visitName && (
              <p className="text-red-500">{errors.visitName.message}</p>
            )}
          </div>
          <div className="w-full sm:w-1/2 px-4 mb-4">
            <label className="block mb-2">Date</label>
            <input
              type="date"
              {...register("date", { required: "Date is required" })}
              className="w-full p-2 border rounded"
            />
            {errors.date && <p className="text-red-500">{errors.date.message}</p>}
          </div>
          <div className="w-full sm:w-1/2 px-4 mb-4">
            <label className="block mb-2">Entry time</label>
            <input
              type="time"
              {...register("entryTime", { required: "Entry time is required" })}
              className="w-full p-2 border rounded"
            />
            {errors.entryTime && (
              <p className="text-red-500">{errors.entryTime.message}</p>
            )}
          </div>
          <div className="w-full sm:w-1/2 px-4 mb-4">
            <label className="block mb-2">Visit duration</label>
            <select
              {...register("visitDuration", { required: "Visit duration is required" })}
              className="w-full p-2 border rounded"
            >
              <option value="">--select--</option>
              <option value="30 mins">30 mins</option>
              <option value="1 hour">1 hour</option>
              <option value="2 hours">2 hours</option>
            </select>
            {errors.visitDuration && (
              <p className="text-red-500">{errors.visitDuration.message}</p>
            )}
          </div>
          <div className="w-full sm:w-1/2 px-4 mb-4">
            <label className="block mb-2">Entry point</label>
            <select
              {...register("entryPoint", { required: "Entry point is required" })}
              className="w-full p-2 border rounded"
            >
              <option value="">--select--</option>
              <option value="Main Gate">Main Gate</option>
              <option value="Side Entrance">Side Entrance</option>
            </select>
            {errors.entryPoint && (
              <p className="text-red-500">{errors.entryPoint.message}</p>
            )}
          </div>
          <div className="w-full sm:w-1/2 px-4 mb-4">
            <label className="block mb-2">Meeting point level</label>
            <select
              {...register("meetingPointLevel", {
                required: "Meeting point level is required",
              })}
              className="w-full p-2 border rounded"
            >
              <option value="">--select--</option>
              <option value="Level 1">Level 1</option>
              <option value="Level 2">Level 2</option>
              <option value="Level 3">Level 3</option>
            </select>
            {errors.meetingPointLevel && (
              <p className="text-red-500">{errors.meetingPointLevel.message}</p>
            )}
          </div>
          <div className="w-full sm:w-1/2 px-4 mb-4">
            <label className="block mb-2">Meeting point stand</label>
            <select
              {...register("meetingPointStand", {
                required: "Meeting point stand is required",
              })}
              className="w-full p-2 border rounded"
            >
              <option value="">--select--</option>
              <option value="Stand A">Stand A</option>
              <option value="Stand B">Stand B</option>
              <option value="Stand C">Stand C</option>
            </select>
            {errors.meetingPointStand && (
              <p className="text-red-500">{errors.meetingPointStand.message}</p>
            )}
          </div>
          <div className="w-full sm:w-1/2 px-4 mb-4">
            <label className="block mb-2">Meeting point room</label>
            <select
              {...register("meetingPointRoom", {
                required: "Meeting point room is required",
              })}
              className="w-full p-2 border rounded"
            >
              <option value="">--select--</option>
              <option value="Room 101">Room 101</option>
              <option value="Room 102">Room 102</option>
              <option value="Room 103">Room 103</option>
            </select>
            {errors.meetingPointRoom && (
              <p className="text-red-500">{errors.meetingPointRoom.message}</p>
            )}
          </div>
        </div>
        <button
          type="submit"
          className="bg-green-900 text-white p-2 rounded mt-4 w-full sm:w-auto sm:px-8"
        >
          Review
        </button>
      </form>
    </div>
  );
}
