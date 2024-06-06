"use client";
import React, { createContext, useContext, useState, ReactNode } from "react";

interface FormData {
  visitType?: string;
  visitReason?: string;
  visitName?: string;
  date?: string;
  entryTime?: string;
  entryPoint?: string;
  meetingPointLevel?: string;
  meetingPointStand?: string;
  meetingPointRoom?: string;
  visitDuration?: string;
}

interface FormContextType {
  formData: FormData;
  updateFormData: (data: FormData) => void;
}

const FormContext = createContext<FormContextType | undefined>(undefined);

export const useFormContext = () => {
  const context = useContext(FormContext);
  if (!context) {
    throw new Error("useFormContext must be used within a FormProvider");
  }
  return context;
};

export const FormProvider = ({ children }: { children: ReactNode }) => {
  const [formData, setFormData] = useState<FormData>({});

  const updateFormData = (data: FormData) => {
    setFormData((prev) => ({ ...prev, ...data }));
  };

  return (
    <FormContext.Provider value={{ formData, updateFormData }}>
      {children}
    </FormContext.Provider>
  );
};
