import data from "../data/data.json";

function Recide({
  counter,
  click,
  items,
  gotoR,
  price,
  handleModal,
  close,
  handleClose,
}) {
  return (
    <div>
      <div className="bg-white rounded-3xl p-6">
        <h1 className="text-red-700">Your cart ({items})</h1>
        {console.log(counter)}

        <div>
          {items ? (
            <div>
              <div>
                <ul>
                  {gotoR
                    .filter((item, index) => !close.includes(index))
                    .map((item, index) => (
                      <li
                        key={index}
                        className="flex justify-between border-b-2 my-4"
                      >
                        {console.log(counter[index])}

                        <span className="text-red-700">
                          {counter[index] + "x"}{" "}
                        </span>
                        <span>{item}</span>
                        <span>{"$" + counter[index] * price[index]}</span>
                        <button onClick={() => handleClose(index)}>
                          <img
                            src="../assets/images/icon-remove-item.svg"
                            alt=""
                          />
                        </button>
                      </li>
                    ))}
                </ul>
              </div>
              <div>Order total: </div>
              <div className="bg-amber-50 p-3 rounded-2xl my-2 flex justify-center tracking-normal">
                <img src="../assets/images/icon-carbon-neutral.svg" alt="" />
                This is a carbon-neutral delivery
              </div>
              <div className="flex justify-center items-center w-full">
                <button
                  onClick={handleModal}
                  className="bg-red-700 p-2 px-16 rounded-full text-white"
                >
                  Confirm Order
                </button>
              </div>
            </div>
          ) : (
            <div>
              <div className="flex justify-center items-center">
                <img
                  src="../assets/images/illustration-empty-cart.svg"
                  alt=""
                />
              </div>
              <div className="text-center">
                <p>Your added items will appear here</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Recide;
