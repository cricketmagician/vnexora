"use client";

import React, { createContext, useContext, useState } from "react";

interface ServiceInquiryContextType {
  isOpen: boolean;
  selectedService: string | null;
  selectedImage: string | null;
  openServiceInquiry: (service?: string, image?: string) => void;
  closeServiceInquiry: () => void;
}

const ServiceInquiryContext = createContext<ServiceInquiryContextType | undefined>(undefined);

export const ServiceInquiryProvider = ({ children }: { children: React.ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<string | null>(null);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const openServiceInquiry = (service?: string, image?: string) => {
    setSelectedService(service || null);
    setSelectedImage(image || null);
    setIsOpen(true);
  };

  const closeServiceInquiry = () => {
    setIsOpen(false);
    setSelectedService(null);
    setSelectedImage(null);
  };

  return (
    <ServiceInquiryContext.Provider value={{ isOpen, selectedService, selectedImage, openServiceInquiry, closeServiceInquiry }}>
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
