import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import RelatedVideo from "../Components/Description/RelatedVideo";
import VideoDescription from "../Components/Description/VideoDescription";
import VideoPlayer from "../Components/Description/VideoPlayer";
import Loading from "../Ui/Loading";
import { fetchVideo } from "../features/video/videoSlice";

export default function Video() {
  const { video, isLoading, isError, error } = useSelector(
    (state) => state?.video
  );
  const dispatch = useDispatch();
  const { videoId } = useParams();

  useEffect(() => {
    dispatch(fetchVideo(videoId));
  }, [dispatch, videoId]);

  const {
    id,
    title,
    description,
    author,
    avatar,
    date,
    duration,
    views,
    link,
    thumbnail,
    tags,
    likes,
    unlikes,
  } = video || {};

  // Decision render ui.
  let content = null;
  if (!isLoading) content = <Loading />;
  if (!isLoading && isError)
    content = <div className="col-span-12">{error}</div>;
  if (!isLoading && !isError && video?.id)
    content = (
      <div className="grid grid-cols-3 gap-2 lg:gap-8">
        <div className="col-span-full w-full space-y-8 lg:col-span-2">
          <VideoPlayer link={link} />

          {/* <!-- video description --> */}
          <VideoDescription video={video} />
        </div>

        {/* <!-- related videos --> */}
        <RelatedVideo id={id} tags={tags} />
      </div>
    );

  return (
    <>
      <section className="pt-6 pb-20">
        <div className="mx-auto max-w-7xl px-2 pb-20 min-h-[400px]">
          {content}
        </div>
      </section>
    </>
  );
}
