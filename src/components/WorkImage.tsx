import { useState } from "react";
import { MdArrowOutward } from "react-icons/md";

interface Props {
  image: string;
  alt?: string;
  video?: string;
  link?: string;
}

const WorkImage = (props: Props) => {
  const [isVideo, setIsVideo] = useState(false);
  const [video, setVideo] = useState("");
  const handleMouseEnter = async () => {
    if (props.image.endsWith(".mp4")) {
      setIsVideo(true);
      const response = await fetch(`src/assets/computer.mp4`);
      const blob = await response.blob();
      const blobUrl = URL.createObjectURL(blob);
      setVideo(blobUrl);
    }
  };

  return (
    <div className="work-image">
      <a
        className="work-image-in"
        href={props.link}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={() => setIsVideo(false)}
        target="_blank"
        data-cursor={"disable"}
      >
        {props.link!='' ?(
          <div className="work-link">
            <MdArrowOutward />
          </div>
        ):(<div>
        </div>)}
        {isVideo ? (
          <video src={video} autoPlay muted loop playsInline></video>
        ) : (
          <img src={props.image} alt={props.alt} />
        )}
      </a>
    </div>
  );
};

export default WorkImage;
