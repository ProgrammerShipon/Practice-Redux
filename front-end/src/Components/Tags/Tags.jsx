import TagItems from "./TagItems.jsx";

const Tags = () => {
  return (
    <>
      <section>
        <div className="max-w-7xl mx-auto px-5 py-6 lg:px-0 flex gap-2 border-b overflow-y-auto">
          <TagItems />
        </div>
      </section>
    </>
  );
};

export default Tags;
