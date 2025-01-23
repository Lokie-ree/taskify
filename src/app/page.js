"use client";

import Header from "@/components/main/Header";
import MyTasks from "@/components/main/MyTasks";
import Divider from "@/components/ui/Divider";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen items-center">
      <Header />
      <Divider />
      <MyTasks />
    </div>
  );
}
