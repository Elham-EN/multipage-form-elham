"use client";
import Card, { DeliveryIcon, FunctionIcon, VisitorIcon } from "@/components/Card";
import { useFormContext } from "@/libs/context/FormContext";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

type Inputs = {
  visitType: string;
  visitReason: string;
};

export default function Home() {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<Inputs>();
  const router = useRouter();
  const { updateFormData } = useFormContext();
  const [selectedType, setSelectedType] = useState<string>("");
  const [visitTypeError, setVisitTypeError] = useState<string>("");

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    if (!selectedType) {
      setVisitTypeError("Visit type is required");
      return;
    }
    updateFormData({ ...data, visitType: selectedType });
    console.log(data);
    router.push("/addformdetails");
  };

  const handleTypeSelection = (type: string) => {
    setSelectedType(type);
    setValue("visitType", type); // Ensure visitType is updated in the form
    setVisitTypeError(""); // Clear any previous error
  };

  return (
    <div className="flex flex-col items-center justify-top py-8 px-4 sm:px-6 lg:px-8 mt-10">
      <h1 className="text-2xl mb-4 w-full text-left pl-4 sm:pl-8 lg:pl-16">
        Select visit type and reason
      </h1>
      <form onSubmit={handleSubmit(onSubmit)} className="w-full max-w-7xl">
        <div className="mb-4">
          <h2 className="text-xl mb-2">Select a visitor type</h2>
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <Card
              label="Visitor"
              icon={VisitorIcon}
              isSelected={selectedType === "Visitor"}
              onClick={() => handleTypeSelection("Visitor")}
            />
            <Card
              label="Delivery"
              icon={DeliveryIcon}
              isSelected={selectedType === "Delivery"}
              onClick={() => handleTypeSelection("Delivery")}
            />
            <Card
              label="Function"
              icon={FunctionIcon}
              isSelected={selectedType === "Function"}
              onClick={() => handleTypeSelection("Function")}
            />
          </div>
          {visitTypeError && <p className="text-red-500 mt-2">{visitTypeError}</p>}
        </div>
        <div className="flex flex-col sm:flex-row justify-between items-center mt-16 gap-4">
          <div className="w-full sm:w-auto mb-4">
            <label>Select a visit reason</label>
            <select
              {...register("visitReason", { required: "Visit reason is required" })}
              className="w-full p-2 border rounded"
            >
              <option value="">--select--</option>
              <option value="Meeting">Meeting</option>
              <option value="Delivery">Delivery</option>
              <option value="Event">Event</option>
            </select>
            {errors.visitReason && (
              <p className="text-red-500">{errors.visitReason.message}</p>
            )}
          </div>
          <button
            type="submit"
            className="bg-green-900 text-white p-2 rounded mt-4 w-full sm:w-auto sm:px-8"
          >
            Next
          </button>
        </div>
        <input type="hidden" value={selectedType} {...register("visitType")} />
      </form>
    </div>
  );
}
