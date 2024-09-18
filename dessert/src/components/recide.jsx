import data from "../data/data.json";

function Recide({
  counter,
  click,
  items,
  gotoR,
  price,
  handelmodal,
  close,
  handelclose,
}) {
  return (
    <div>
      <div className="bg-white rounded-3xl p-6">
        <h1 className="text-red-700">Your cart ({items})</h1>

        <div>
          {items ? (
            <div>
              <div>
                {data
                  .filter((item) => !close.includes(item.id))
                  .map((item) => (
                    <div key={item.id}>
                      {click.includes(item.id) ? (
                        <div className="border-b-2 my-4">
                          <div>{gotoR[item.id]}</div>
                          <div className="flex justify-between">
                            <span>{counter[item.id]}</span>
                            <span>${price[item.id]}</span>
                            <button
                              onClick={() => {
                                handelclose(item.id);
                              }}
                            >
                              <img
                                src="../assets/images/icon-remove-item.svg"
                                alt=""
                              />
                            </button>
                          </div>
                        </div>
                      ) : null}
                    </div>
                  ))}
              </div>
              <div>Order total: </div>
              <div className="bg-amber-50 p-3 rounded-2xl my-2 flex justify-center tracking-normal">
                <img src="../assets/images/icon-carbon-neutral.svg" alt="" />
                This is a carbon-neutral delivery
              </div>
              <div className="flex justify-center items-center w-full">
                <button
                  onClick={handelmodal}
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
