import Landing from "@/components/landing/Landing";
import Image from "next/image";

const Home = () => {
  return (
    <div>
      <Landing />
      <div className="pl-[10%] pr-[10%] pb-14">
        <div className="grid grid-cols-2 border-solid border-2 border-red-400">
          <div className="border-solid border-2 border-green-400">
            <p className="font-bold font-saira text-white text-4xl">
              lorem ipsum testing text
            </p>
            <p className="font-saira text-white text-4xl">
              normal looking text wituh dfsaf ksakf adslk jfad sjf jads lklfad
              sjfj yippe had kdwa to know
            </p>
          </div>
          <div>
            <Image
              objectFit="contain"
              src="/images/placeholder.webp"
              width={576}
              height={437}
              alt="Text image"
            />
          </div>
        </div>
        <div className="grid row-span-1 border-solid border-2 border-yellow-400">
          <p className="font-saira text-white text-4xl">
            normal looking text wituh dfsafks akfadsl kjfaddw asdds jfja dslkl
            fadsjfj askjh asdhjkas djkhads jkasd djkasd djkhads jhkasd hjkasd
            jkhasd hjkasd jkhads asdlkjadsjkl dasjklasd jklads kljads
            jklasdjkladsjklasdjkladsljkdskjldadsljk
          </p>
        </div>
      </div>

      <div className="pl-[10%] pr-[10%] pb-14 text-center">
        <div className="border-solid border-2 border-green-400">
          <p className="font-russo text-white text-8xl">OUR SPONSORS</p>
        </div>

        <div className="grid row-span-1 border-solid border-2 border-yellow-400">
          <p className="font-saira text-white text-4xl">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla.
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
            officia deserunt mollit anim id est laborum
          </p>
        </div>
      </div>
    </div>
  );
};
export default Home;
