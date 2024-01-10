import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTags } from "../../features/tags/tagsSlice.js";
import TagItems from "./TagItems.jsx";

const Tags = () => {
  const dispatch = useDispatch();
  const { tags, isLoading } = useSelector((state) => state?.tags);

  useEffect(() => {
    dispatch(fetchTags());
  }, [dispatch]);

  return tags?.length > 0 && !isLoading ? (
    <section>
      <div className="max-w-7xl mx-auto px-5 py-6 lg:px-0 flex gap-2 border-b overflow-y-auto">
        {tags?.map((tag) => (
          <TagItems key={tag?.id} tag={tag} />
        ))}
      </div>
    </section>
  ) : null;
};

export default Tags;
