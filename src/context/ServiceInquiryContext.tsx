"use client";

import React, { createContext, useContext, useState } from "react";

interface ServiceInquiryContextType {
  isOpen: boolean;
  selectedService: string | null;
  openServiceInquiry: (service?: string) => void;
  closeServiceInquiry: () => void;
}

const ServiceInquiryContext = createContext<ServiceInquiryContextType | undefined>(undefined);

export const ServiceInquiryProvider = ({ children }: { children: React.ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<string | null>(null);

  const openServiceInquiry = (service?: string) => {
    setSelectedService(service || null);
    setIsOpen(true);
  };

  const closeServiceInquiry = () => {
    setIsOpen(false);
    setSelectedService(null);
  };

  return (
    <ServiceInquiryContext.Provider value={{ isOpen, selectedService, openServiceInquiry, closeServiceInquiry }}>
      {children}
    </ServiceInquiryContext.Provider>
  );
};

export const useServiceInquiry = () => {
  const context = useContext(ServiceInquiryContext);
  if (context === undefined) {
    throw new Error("useServiceInquiry must be used within a ServiceInquiryProvider");
  }
  return context;
};
