import Media from "@/components/media/Media";
import Medias from "@/components/media/Medias";
import Button from "@/components/Button";

const MediaPage = () => {
  return (
    <div className="flex flex-col w-full justify-center items-center gap-y-5">
      <Media />
      <Medias />
      <Button text="Contact Us" href="/" />
    </div>
  );
};

export default MediaPage;
