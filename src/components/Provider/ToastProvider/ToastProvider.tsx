"use client";
import React from "react";
import * as ToastPrimitive from "@radix-ui/react-toast";
import styled, { keyframes } from "styled-components";
import { ChildrenProps } from "@/types/common";
import SuccessIcon from "@/components/SVG/SuccessIcon";
import Icon from "@/components/Icon";

// Define the type for toast messages
interface ToastMessage {
  title: string;
  description?: string;
}

interface ToastContextType {
  showToast: (message: ToastMessage) => void;
}

const ToastContext = React.createContext<ToastContextType>(null!);

export const useToast = (): ToastContextType => {
  const context = React.useContext(ToastContext);

  if (!context) {
    throw new Error("useToast must be used within a ToastProvider");
  }
  return context;
};

// Type for the provider's children prop

function ToastProvider({ children }: ChildrenProps) {
  const [toastMessage, setToastMessage] = React.useState<ToastMessage | null>(
    null
  );

  const showToast = (message: ToastMessage) => {
    setToastMessage(message);
  };

  const closeToast = () => {
    setToastMessage(null);
  };

  return (
    <ToastContext.Provider value={{ showToast }}>
      {children}
      <ToastPrimitive.Provider swipeDirection="right">
        {toastMessage && (
          <ToastRoot
            onOpenChange={closeToast}
            open={!!toastMessage}
            duration={3000}
          >
            <SuccessIcon />
            <div>
              <ToastTitle>{toastMessage.title}</ToastTitle>
              {toastMessage.description && (
                <ToastDescription>{toastMessage.description}</ToastDescription>
              )}
            </div>
            <ToastAction asChild altText="Close toast" onClick={closeToast}>
              <Icon id="close" size={20} strokeWidth={1.2} />
            </ToastAction>
          </ToastRoot>
        )}
        <ToastViewport />
      </ToastPrimitive.Provider>
    </ToastContext.Provider>
  );
}

const slideIn = keyframes`
  from {
    transform: translateX(100%);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
`;

const slideOut = keyframes`
  from {
    transform: translateX(0);
    opacity: 1;
  }
  to {
    transform: translateX(100%);
    opacity: 0;
  }
`;

// Styled-components for Toast styling
const ToastRoot = styled(ToastPrimitive.Root)`
  display: flex;
  gap: 10px;
  align-items: center;
  background-color: white;
  border-radius: 6px;
  padding: 14px 15px;
  min-width: 320px;
  filter: drop-shadow(2px 4px 8px hsl(0deg 0% 0% / 0.4));
  will-change: transform, opacity;

  /* Animasi berdasarkan data-state */
  &[data-state="open"] {
    animation: ${slideIn} 300ms ease-in-out;
  }

  &[data-state="closed"] {
    animation: ${slideOut} 300ms ease-in-out;
  }
`;

const ToastTitle = styled(ToastPrimitive.Title)`
  font-size: 16px;
  font-weight: 600;
`;

const ToastDescription = styled(ToastPrimitive.Description)`
  font-size: 14px;
`;

const ToastAction = styled(ToastPrimitive.Action)`
  align-self: flex-start;
  margin-left: auto;
  cursor: pointer;
`;

const ToastViewport = styled(ToastPrimitive.Viewport)`
  position: fixed;
  display: flex;
  flex-direction: column;
  gap: 10px;
  bottom: 20px;
  right: 20px;
  padding: 20px;
  max-width: 100vw;
  z-index: 1000;
`;

export default ToastProvider;
