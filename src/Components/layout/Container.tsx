import React from "react";
interface Container {
  children: React.ReactNode;
}
const Container = ({ children }: Container) => {
  return <div className="container mx-auto px-4">{children}</div>;
};

export default Container;
