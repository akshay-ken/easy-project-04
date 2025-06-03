import mdImage from "../assets/images/background-pattern-desktop.svg";
import smImage from "../assets/images/background-pattern-mobile.svg";
import starIcon from "../assets/images/icon-star.svg";

export function FaqCardFunction({ children }) {
  return (
    <>
      <main className="relative">
        <img src={mdImage} className="hidden md:block z-0" alt="" />
        <img src={smImage} className="md:hidden w-full" alt="" />

        <div className="bg-white rounded-2xl p-4 w-full max-w-sm mx-auto relative md:max-w-md z-10 -mt-28">
          <header className="flex items-center gap-x-4">
            <i>
              <img src={starIcon} alt="" />
            </i>
            <h1 className="font-worksans font-extrabold text-4xl text-purple-950">
              FAQs
            </h1>
          </header>

          {children}
        </div>
      </main>
    </>
  );
}
