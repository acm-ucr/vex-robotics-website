import Header from "@/components/Header";
import Medias from "@/components/media/Medias";

const MediaPage = () => {
  return (
    <div className="flex flex-col w-full justify-center items-center gap-y-5">
      <Header text="MEDIA" />
      <Medias />
    </div>
  );
};

export default MediaPage;
