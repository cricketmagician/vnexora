"use client";

import React, { createContext, useContext, useState } from "react";

interface PartnerContextType {
  isOpen: boolean;
  openPartner: () => void;
  closePartner: () => void;
}

const PartnerContext = createContext<PartnerContextType | undefined>(undefined);

export const PartnerProvider = ({ children }: { children: React.ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false);

  const openPartner = () => setIsOpen(true);
  const closePartner = () => setIsOpen(false);

  return (
    <PartnerContext.Provider value={{ isOpen, openPartner, closePartner }}>
      {children}
    </PartnerContext.Provider>
  );
};

export const usePartner = () => {
  const context = useContext(PartnerContext);
  if (!context) {
    throw new Error("usePartner must be used within a PartnerProvider");
  }
  return context;
};
