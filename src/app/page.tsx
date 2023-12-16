import SideBar from "@components/side-bar";
import Content from "@components/layout/content-box";

export default function Home() {
  return (
    <>
      <div className="container h-full">
        <div className="flex mt-12 h-full">
          <div className="mr-10 lg:max-w-[10%] w-full hidden lg:block">
            <SideBar />
          </div>
          <div className="lg:max-w-[90%] w-full h-full">
            <h2 className="text-primary mb-4 text-lg font-bold">Projects</h2>

            <div className=" w-full bg-[#13214A13] h-full relative pb-[80px]">
              <div className=" h-full transition-all  duration-75 ease-out px-8 pb-8  overflow-auto bo shadow-md  flex flex-col bg-opacity-8 bg-blue-700 p-4 rounded-md">
                <Content />
              </div>
              <div className="h-[80px] relative bottom-0">&nbsp;</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
