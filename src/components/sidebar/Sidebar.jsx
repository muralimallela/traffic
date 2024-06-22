import { useEffect } from "react";
import { BsShare } from "react-icons/bs";
import { sideList } from "./sideList";

const Sidebar = () => {
  const isOpen = true;

  // const handleDrawer = () => {
  //     setIsOpen(!isOpen);
  // };

  useEffect(() => {
    // const handleEscKeyPress = (e) => {
    //     if (e.keyCode === 27 && isOpen) {
    //         setIsOpen(false);
    //     }
    // };

    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    // document.addEventListener("keydown", handleEscKeyPress);

    return () => {
      // document.removeEventListener("keydown", handleEscKeyPress);
    };
  }, [isOpen]);

  return (
    <>
      {/* {isOpen && (
                <div className="z-10 fixed inset-0 transition-opacity">
                    <div
                
                        // onClick={() => setIsOpen(false)}
                        className="absolute inset-0"
                        tabIndex={0}
                    ></div>
                </div>
            )} */}

      <aside
        className={`transform top-0 left-0 w-64 dark:bg-background bg-[#060A0D] fixed h-full overflow-auto ease-in-out transition-all duration-300 z-30 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <span className="flex w-full items-center px-10 py-3 border-b">
          <h1 className="text-4xl lg:text-3xl text-center text-white font-mono font-bold text-primary sm:text-3xl">
            <a href="/">RevRoad</a>
          </h1>
        </span>
        <div className="w-full px-6">
          {sideList.map(({ icon, title, path }, index) => (
            <a key={index} href={`/dashboard${path}`}>
              <span className="flex px-10 p-2 hover:bg-blue-500 text-white/70 hover:text-white dark:text-white/80 rounded-2xl bg-[#1F2630]  mt-4">
                <span className="mr-2">{icon}</span>
                <span>{title}</span>
              </span>
            </a>
          ))}
        </div>
        <div className="fixed bottom-0 w-full">
          <button className="flex  items-center p-4 text-white bg-blue-500 hover:bg-blue-600 w-full">
            <span className="mr-2">
              <BsShare className="text-2xl" />
            </span>
            <span>Invite a friend</span>
          </button>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
