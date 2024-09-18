import { useState } from "react";
import Products from "./components/products";
import Recide from "./components/recide";
import Component from "./components/modal";
function App() {
  const [counter, setCounter] = useState({});
  const [click, setClick] = useState([]);
  const [items, setItems] = useState(0);
  const [gotoR, setGotoR] = useState([]);
  const [price, setPrice] = useState([]);
  const [openModal, setOpenModal] = useState(false);
  const [close, setClose] = useState([]);

  const handelclose = (id) => {
    setClose((prev) => [...prev, id]);
  };

  const handelRecide = (item) => {
    setGotoR((prev) => [...prev, item]);
  };
  const handelRecideprice = (item) => {
    setPrice((prev) => [...prev, item]);
  };

  const handelclick = (id) => {
    setClick((prev) => [...prev, id]);
    if (!counter[id]) {
      setCounter((prev) => ({ ...prev, [id]: 1 }));
    }
    setItems(items + 1);
    handelRecide();
    handelRecideprice();
  };
  const handelmodal = () => {
    setOpenModal(true);
  };

  return (
    <div className="bg-amber-50">
      {openModal === true && (
        <Component
          openModal={openModal}
          setOpenModal={setOpenModal}
          counter={counter}
          click={click}
          gotoR={gotoR}
          price={price}
          close={close}
          handelclose={handelclose}
        />
      )}
      <div className="max-w-sm lg:max-w-7xl m-auto ">
        <h1 className="text-4xl font-bold py-4"> Desserts</h1>
        <main className="lg:grid grid-cols-12 gap-4 ">
          {" "}
          <div className="col-span-9">
            {" "}
            <Products
              handelclick={handelclick}
              setCounter={setCounter}
              counter={counter}
              click={click}
              handelRecide={handelRecide}
              handelRecideprice={handelRecideprice}
            />
          </div>
          <div className=" col-span-3">
            {" "}
            <Recide
              counter={counter}
              click={click}
              items={items}
              gotoR={gotoR}
              price={price}
              handelmodal={handelmodal}
              close={close}
              handelclose={handelclose}
            />
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;
