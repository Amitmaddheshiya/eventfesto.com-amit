"use client";
import { ReactNode } from "react";
import Footer from "../footer";
import Navbar from "../navbar";

type IndexProps = {
  children: ReactNode;
};

const Index = ({ children }: IndexProps) => {
  const design = (
    <div>
      <Navbar />
      <div>{children}</div>
      <Footer />
    </div>
  );
  return design;
};
export default Index;
