import HeaderBrond from "../../components/BrondHome/HeaderBrond";
import MySwiper from "../../components/BrondHome/SlideBrond";

export default async function Home() {
  return (
    <main className="h-screen overflow-hidden bg-slate-950">
      <HeaderBrond />
      <MySwiper />
    </main>
  );
}
