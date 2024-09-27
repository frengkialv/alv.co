"use client";
import React from "react";
import Error from "next/error";

function ErrorComponent({
  statusCode,
  title,
}: {
  statusCode: number;
  title?: string;
}) {
  return (
    <Error
      statusCode={statusCode}
      title={title ? title : "This product could not be found."}
    />
  );
}

export default ErrorComponent;
