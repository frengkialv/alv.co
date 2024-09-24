"use client";
import React from "react";
import Error from "next/error";

function ErrorComponent({ statusCode }: { statusCode: number }) {
  return <Error statusCode={statusCode} />;
}

export default ErrorComponent;
