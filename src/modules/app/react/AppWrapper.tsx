"use client";

import React from "react";
import { Provider } from "react-redux";
import { app } from "@root/modules/app/main";
import { DependenciesProvider } from "@root/modules/app/react/DepenciesProvider";

export const AppWrapper: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <Provider store={app.store}>
      <DependenciesProvider dependencies={app.dependencies}>
        {children}
      </DependenciesProvider>
    </Provider>
  );
};
