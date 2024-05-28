"use client"
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter()
  function redirectMac(){
    router.push("/product/macbook_pro")
  }
  function redirectGrid(){
    router.push("/grid")

  }
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="flex flex-col gap-y-10">
        <button onClick={redirectMac} className="bg-blue-700 text-white p-[20px]">Assessment 1 (MacBook Page)</button>
        <button onClick={redirectGrid} className="bg-blue-700 text-white p-[20px]">Assessment 2 (DataGrid)</button>
      </div>
    </main>
  );
}
