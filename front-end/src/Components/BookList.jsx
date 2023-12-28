import { deleteIcon, editIcon, starIcon } from "../Utils/AllIcons";

export default function BookList() {
  return (
    <>
      <div className="order-2 xl:-order-1">
        <div className="flex items-center justify-between mb-12">
          <h4 className="mt-2 text-xl font-bold">Book List</h4>

          <div className="flex items-center space-x-4">
            <button className="filter-btn active-filter" id="lws-filterAll">
              All
            </button>
            <button className="filter-btn" id="lws-filterFeatured">
              Featured
            </button>
          </div>
        </div>
        <div className="lws-bookContainer">
          {/* Card 1 */}
          <div className="book-card">
            <img
              className="h-[240px] w-[170px] object-cover lws-bookThumbnail"
              src="https://m.media-amazon.com/images/P/B07DZ86WP7.01._SCLZZZZZZZ_SX500_.jpg"
              alt="book"
            />
            <div className="flex-1 h-full pr-2 pt-2 flex flex-col">
              <div className="flex items-center justify-between">
                <span className="badge-success lws-Badge">featured</span>
                <div className="text-gray-500 space-x-2">
                  <button className="lws-edit">
                    <span> {editIcon} </span>
                  </button>
                  <button className="lws-delete">
                    <span> {deleteIcon} </span>
                  </button>
                </div>
              </div>

              <div className="space-y-2 mt-4 h-full">
                <h4 className="lws-bookName">
                  Life Hurts: A Doctor's Personal Journey Through Anorexia
                </h4>
                <p className="lws-author">Dr Elizabeth McNaught</p>
                <div className="lws-stars">
                  <span> {starIcon} </span>
                  <span> {starIcon} </span>
                  <span> {starIcon} </span>
                </div>
                <p className="lws-price">BDT 14</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
