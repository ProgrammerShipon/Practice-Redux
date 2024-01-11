import likeIcon from "../../assets/like.svg";
import unlikeIcon from "../../assets/unlike.svg";

export default function LikeDisLink({ like, disLike }) {
  return (
    <>
      <div className="flex gap-10 w-48">
        <div className="flex gap-1">
          <div className="shrink-0">
            <img className="w-5 block" src={likeIcon} alt="Like" />
          </div>
          <div className="text-sm leading-[1.7142857] text-slate-600">{like}</div>
        </div>
        <div className="flex gap-1">
          <div className="shrink-0">
            <img className="w-5 block" src={unlikeIcon} alt="like" />
          </div>
          <div className="text-sm leading-[1.7142857] text-slate-600">{disLike}</div>
        </div>
      </div>
    </>
  );
}
