import Nav from "../layout/Nav";
import Hero from "../layout/Hero";
import { useTranslation } from "react-i18next";
const RootPage = () => {
  const { t } = useTranslation();

  return (
    <>
      <Nav />
      <Hero />
      <section className="mx-10 my-10 h-[50rem]">
        <div className="grid aspect-square place-items-center bg-red-300">
          <h1>{t("Welcome")}</h1>
        </div>
      </section>
    </>
  );
};

export default RootPage;
