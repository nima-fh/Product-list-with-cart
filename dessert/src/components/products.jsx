import data from "../data/data.json";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

const icon = (
  <FontAwesomeIcon icon={faCartShopping} style={{ color: "#ed9b0c" }} />
);

function Products({
  handleClick,
  setCounter,
  counter,
  click,
  handleRecide,
  handleRecidePrice,
}) {
  const handleDecrease = (id) => {
    setCounter((prev) => ({ ...prev, [id]: prev[id] > 1 ? prev[id] - 1 : 1 }));
  };

  const handleIncrease = (id) => {
    setCounter((prev) => ({ ...prev, [id]: prev[id] + 1 }));
  };

  return (
    <div>
      <div className="lg:grid grid-cols-3 gap-4">
        {data.map((item, index) => (
          <div key={index}>
            <div className="relative">
              <img className="rounded-3xl" src={item.image.desktop} alt="" />
              {click.includes(index) ? (
                <div className="bg-red-500 absolute bottom-0 left-1/4 flex justify-around rounded-full p-2 text-center w-1/2">
                  <span>
                    <button
                      className="border border-white text-white rounded-full px-2 hover:bg-white hover:text-red-500"
                      onClick={() => handleDecrease(index)}
                    >
                      -
                    </button>
                  </span>
                  {counter[index]}
                  <span>
                    <button
                      className="border border-white text-white rounded-full px-2 hover:bg-white hover:text-red-500"
                      onClick={() => handleIncrease(index)}
                    >
                      +
                    </button>
                  </span>
                </div>
              ) : (
                <button
                  onClick={() => {
                    handleClick(index);
                    handleRecide(item.name);
                    handleRecidePrice(item.price);
                  }}
                  className="border-2 border-red-200 hover:border-orange-500 absolute bottom-0 left-1/4 bg-white rounded-full p-2 text-center w-1/2"
                >
                  <span>{icon}</span>
                  Add to Cart
                </button>
              )}
            </div>
            <div className="text-gray-400">{item.category}</div>
            <div className="text-xl">{item.name}</div>
            <div className="text-lg text-red-400">{"$" + item.price}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Products;
