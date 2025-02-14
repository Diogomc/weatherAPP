import { Footer } from "@/components/Footer";
import { Nav } from "@/components/Nav";
import { WeatherAPI } from "@/components/WeatherAPI";
export default function Home() {
  return (
    <div>
      <Nav />
      <div className="justify-center flex">
        <WeatherAPI />
      </div>
      <div className="ft">
      <Footer />
      </div>
    </div>
  );
}
