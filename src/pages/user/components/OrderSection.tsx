import React from "react";

export const Section = ({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) => (
  <div className="mb-6 p-4 bg-gray-50 rounded-lg shadow-sm">
    <h3 className="font-semibold text-gray-700 mb-2">{title}</h3>
    {children}
  </div>
);

export const Info = ({ label, value }: { label: string; value: string }) => (
  <p className="text-gray-600">
    {label}: <span className="font-medium">{value}</span>
  </p>
);
