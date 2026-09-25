import Bannar from "@/components/common/HomePage/Bannar";
import Library from "./workout/page";
import Footer from "@/components/common/Footer";

export default function Home() {
  return (
    <div>
      <Bannar></Bannar>

      <section id="library">
        <Library />
      </section>
      <Footer></Footer>
    </div>
  );
}
