import Bannar from "@/components/common/HomePage/Bannar";
import Library from "./workout/page";

export default function Home() {
  return (
    <div>
      <Bannar></Bannar>

      <section id="library">
        <Library />
      </section>
    </div>
  );
}
