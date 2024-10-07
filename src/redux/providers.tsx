"use client";
import { useRef } from "react";
import { Provider } from "react-redux";
import { AppStore, reduxStore } from "./store";

export default function Providers({
  children,
}: {
  readonly children: React.ReactNode;
}) {
  const storeRef = useRef<AppStore>();
  if (!storeRef.current) {
    // Create the store instance the first time this renders
    storeRef.current = reduxStore();
  }

  return <Provider store={storeRef.current}>{children}</Provider>;
}