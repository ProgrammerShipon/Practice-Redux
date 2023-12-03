import { useState } from "react";
import { useDispatch } from "react-redux";
import { added } from "../../Features/Products/PAction";

export default function AddProduct() {
  const [error, setError] = useState(null);
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const title = formData.get("lws-inputName");
    const category = formData.get("lws-inputCategory");
    const image = formData.get("lws-inputImage");
    const price = formData.get("lws-inputPrice");
    const quantity = formData.get("lws-inputQuantity");

    const data = {
      title,
      category,
      image,
      price,
      quantity,
    };

    // this is error handle
    const emptyArr = [];
    for (const item of Object.keys(data)) {
      if (data[item] == "") {
        emptyArr.push(item);
      }
    }
    if (emptyArr.length) {
      return setError(emptyArr);
    }

    dispatch(added(data));
  };

  return (
    <>
      <div className="formContainer">
        <h4 className="formTitle">Add New Product</h4>
        <form
          onSubmit={handleSubmit}
          className="space-y-4 text-[#534F4F]"
          id="lws-addProductForm"
        >
          {/* product name */}
          <div className="space-y-2">
            <label htmlFor="lws-inputName">Product Name</label>
            <input
              className="addProductInput"
              id="lws-inputName"
              name="lws-inputName"
              type="text"
              required=""
            />
          </div>
          {/* product category */}
          <div className="space-y-2">
            <label htmlFor="lws-inputCategory">Category</label>
            <input
              className="addProductInput"
              id="lws-inputCategory"
              name="lws-inputCategory"
              type="text"
              required=""
            />
          </div>
          {/* product image url */}
          <div className="space-y-2">
            <label htmlFor="lws-inputImage">Image Url</label>
            <input
              className="addProductInput"
              id="lws-inputImage"
              name="lws-inputImage"
              type="text"
              required=""
            />
          </div>
          {/* price & quantity container */}
          <div className="grid grid-cols-2 gap-8 pb-4">
            {/* price */}
            <div className="space-y-2">
              <label htmlFor="lws-inputPrice">Price</label>
              <input
                className="addProductInput"
                type="number"
                id="lws-inputPrice"
                name="lws-inputPrice"
                required=""
              />
            </div>
            {/* quantity */}
            <div className="space-y-2">
              <label htmlFor="lws-inputQuantity">Quantity</label>
              <input
                className="addProductInput"
                type="number"
                id="lws-inputQuantity"
                name="lws-inputQuantity"
                required=""
              />
            </div>
          </div>

          {/* this is Error message */}
          {error?.length ? (
            <p style={{ color: "red" }}>{error.join(", ")} is Empty </p>
          ) : null}

          {/* submit button */}
          <button type="submit" id="lws-inputSubmit" className="submit">
            Add Product
          </button>
        </form>
      </div>
    </>
  );
}
