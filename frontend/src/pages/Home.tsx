import React from "react";
import Navbar from "../components/Navbar";
import Badge from "../components/Badge";
import Card from "../components/Card";

type Props = {
  isAuthenticated: boolean;
};

const Home = ({ isAuthenticated }: Props) => {
  return (
    <>
      <Navbar isAuthenticated={isAuthenticated} />
      <main className="pt-30">
        <section className="flex flex-col items-center justify-center gap-6">
          <div className="flex flex-col items-center justify-center gap-6">
            <div className="w-50">
              <Badge value="100% Gratis dan Otomatis" variant="secondary" />
            </div>
            <h1 className="text-center text-h1-m md:text-[60px] leading-15 text-cusblack font-bold">
              Deteksi Gambar AI
              <br />
              dalam Sekejap
            </h1>
            <p className="text-bd-m md:text-bd text-cuslightblack">
              Unggah gambar dan dapatkan hasil analisis dalam hitungan detik
            </p>
          </div>
        </section>
      </main>
    </>
  );
};

export default Home;
