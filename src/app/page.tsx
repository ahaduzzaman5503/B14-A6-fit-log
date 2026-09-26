import Bannar from "@/components/common/HomePage/Bannar";
import Library from "./workout/page";
import { Suspense } from "react";
import Loading from "./workout/Loading";

export default function Home() {
  return (
    <div>
      <Bannar></Bannar>

      <Suspense fallback={<Loading></Loading>}>
        <section id="library">
          <Library />
        </section>
      </Suspense>
    </div>
  );
}
