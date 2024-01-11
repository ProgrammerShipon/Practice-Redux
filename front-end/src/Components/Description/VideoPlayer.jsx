export default function VideoPlayer({ link }) {
  return (
    <>
      {/* <!-- video player --> */}
      <iframe
        width="100%"
        className="aspect-video"
        src={link}
        title="Some video title"
        frameborder=""
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    </>
  );
}
