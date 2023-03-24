import React from "react";
import { Alert as StrapiAlert } from "@strapi/design-system/Alert";

export const Alert = ({ variant, onAlertClose }) => {
  const message =
    variant === "success"
      ? "Cache cleared successfully!"
      : "Sorry, something went wrong!";

  return (
    <StrapiAlert
      closeLabel="Close alert"
      variant={variant}
      onClose={onAlertClose}
    >
      {message}
    </StrapiAlert>
  );
};
