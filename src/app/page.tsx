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
  const { register, handleSubmit, setValue } = useForm<Inputs>();
  const router = useRouter();
  const { updateFormData } = useFormContext();
  const [selectedType, setSelectedType] = useState<string>("");

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    updateFormData({ ...data, visitType: selectedType });
    console.log(data);
    router.push("/addformdetails");
  };

  const handleTypeSelection = (type: string) => {
    setSelectedType(type);
    setValue("visitType", type); // Ensure visitType is updated in the form
  };

  return (
    <div className="flex flex-col items-center justify-top py-8 mt-10">
      <h1 className="text-2xl mb-4 w-full text-left pl-16">
        Select visit type and reason
      </h1>
      <form onSubmit={handleSubmit(onSubmit)} className="w-full max-w-7xl">
        <div className="mb-4">
          <h2 className="text-xl mb-2">Select a visitor type</h2>
          <div className="flex justify-between">
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
        </div>
        <div className="flex justify-between items-center mt-16">
          <div className="mb-4 w-[300px]">
            <label>Select a visit reason</label>
            <select {...register("visitReason")} className="w-full p-2 border">
              <option value="">--select--</option>
              <option value="Meeting">Meeting</option>
              <option value="Delivery">Delivery</option>
              <option value="Event">Event</option>
            </select>
          </div>
          <button
            type="submit"
            className="bg-green-500 text-white p-2 rounded mt-4 py-4 w-[150px]"
          >
            Next
          </button>
        </div>
        <input type="hidden" value={selectedType} {...register("visitType")} />
      </form>
    </div>
  );
}
