import Header from "@/components/Header";
import Media from "@/components/media/Media";
import Medias from "@/components/media/Medias";

const MediaPage = () => {
  return (
    <div className="flex flex-col w-full justify-center items-center gap-y-5">
      <Header text="MEDIA" />
      <Media />
      <Medias />
    </div>
  );
};

export default MediaPage;
