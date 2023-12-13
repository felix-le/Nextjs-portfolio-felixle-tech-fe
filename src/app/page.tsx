import SideBar from "@components/side-bar";
import Content from "@components/layout/content-box";
import SearchFn from "@modules/searchFn";

export default function Home() {
  return (
    <>
      <div className="container h-full">
        <div className="flex mt-12 h-full">
          <div className="mr-10 lg:max-w-[20%] w-full hidden lg:block">
            <SideBar />
          </div>
          <div className="lg:max-w-[80%] w-full h-full">
            <h2 className="text-primary mb-4 text-lg font-bold">Projects</h2>
            <div className="lg:hidden  mb-8">
              <SearchFn />
            </div>
            <div className=" w-full bg-[#13214A13] h-full relative pb-[80px]">
              <Content />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
