import { useState } from "react";

export default function AddNewBook() {
  const [inputData, setInputData] = useState({
    name: "",
    author: "",
    thumbnail: "",
    price: "",
    rating: "",
    featured: "",
    //  id: 1,
  });
  const [errors, setErrors] = useState([]);

  const handleValue = (e) => {
    if (e.type === "checkbox")
      return setInputData({
        ...inputData,
        [e.name]: e.checked,
      });

    setInputData({
      ...inputData,
      [e.name]: e.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors(null);

    let findEmpty = [];
    for (const key of Object.keys(inputData)) {
      if (key === "featured") break;
      if (!inputData[key]) findEmpty.push(key);
    }
    if (findEmpty.length) return setErrors(findEmpty);

    console.log("submitted Successful", inputData);
  };

  console.log("errors ", errors);

  return (
    <>
      <div>
        <div className="p-4 overflow-hidden bg-white shadow-cardShadow rounded-md">
          <h4 className="mb-8 text-xl font-bold text-center">Add New Book</h4>
          <form className="book-form" onSubmit={handleSubmit}>
            <div className="space-y-2">
              <label htmlFor="name">Book Name</label>
              <input
                //  required
                className={`text-input ${
                  errors?.includes("name") && "border-red"
                }`}
                type="text"
                id="input-Bookname"
                name="name"
                onChange={(e) => handleValue(e.target)}
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="category">Author</label>
              <input
                //  required
                className={`text-input ${
                  errors?.includes("author") && "border-red"
                }`}
                type="text"
                id="input-Bookauthor"
                name="author"
                onChange={(e) => handleValue(e.target)}
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="image">Image Url</label>
              <input
                //  required
                className={`text-input ${
                  errors?.includes("thumbnail") && "border-red"
                }`}
                type="text"
                id="input-Bookthumbnail"
                name="thumbnail"
                onChange={(e) => handleValue(e.target)}
              />
            </div>

            <div className="grid grid-cols-2 gap-8 pb-4">
              <div className="space-y-2">
                <label htmlFor="price">Price</label>
                <input
                  //  required
                  className={`text-input ${
                    errors?.includes("price") && "border-red"
                  }`}
                  type="number"
                  id="input-Bookprice"
                  name="price"
                  onChange={(e) => handleValue(e.target)}
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="quantity">Rating</label>
                <input
                  //  required
                  className={`text-input ${
                    errors?.includes("rating") && "border-red"
                  }`}
                  type="number"
                  id="input-Bookrating"
                  name="rating"
                  min="1"
                  max="5"
                  onChange={(e) => handleValue(e.target)}
                />
              </div>
            </div>

            <div className="flex items-center">
              <input
                id="featured"
                type="checkbox"
                name="featured"
                className="w-4 h-4"
                onChange={(e) => handleValue(e.target)}
              />

              <label htmlFor="featured" className="ml-2 text-sm">
                This is a featured book
              </label>
            </div>

            {errors?.length && (
              <p className="text-red-500 text-center">
                {errors.join(", ")} is Empty
              </p>
            )}

            <button type="submit" className="submit" id="submit">
              Add Book
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
