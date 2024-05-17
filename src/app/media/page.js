import Header from "@/components/Header";
import Medias from "@/components/media/Medias";
import Button from "@/components/Button";

const MediaPage = () => {
  return (
    <div className="flex flex-col w-full justify-center items-center gap-y-5">
      <Header text="MEDIA" />
      <Medias />
      <Button link="/contact" text="Contact Us" color="" />
    </div>
  );
};

export default MediaPage;
