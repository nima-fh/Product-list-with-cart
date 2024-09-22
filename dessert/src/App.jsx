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

  const handleClose = (id) => {
    setClose((prev) => [...prev, id]);
  };

  const handleRecide = (item) => {
    setGotoR((prev) => [...prev, item]);
  };

  const handleRecidePrice = (item) => {
    setPrice((prev) => [...prev, item]);
  };

  const handleClick = (id) => {
    setClick((prev) => [...prev, id]);
    setCounter((prev) => ({ ...prev, [id]: (prev[id] || 0) + 1 }));
    setItems((prev) => prev + 1);
  };

  const handleModal = () => {
    setOpenModal(true);
  };

  return (
    <div className="bg-amber-50">
      {openModal && (
        <Component
          openModal={openModal}
          setOpenModal={setOpenModal}
          counter={counter}
          click={click}
          gotoR={gotoR}
          price={price}
          close={close}
          handleClose={handleClose}
        />
      )}
      <div className="max-w-sm lg:max-w-7xl m-auto">
        <h1 className="text-4xl font-bold py-4">Desserts</h1>
        <main className="lg:grid grid-cols-12 gap-4">
          <div className="col-span-9">
            <Products
              handleClick={handleClick}
              setCounter={setCounter}
              counter={counter}
              click={click}
              handleRecide={handleRecide}
              handleRecidePrice={handleRecidePrice}
            />
          </div>
          <div className="col-span-3">
            <Recide
              counter={counter}
              click={click}
              items={items}
              gotoR={gotoR}
              price={price}
              handleModal={handleModal}
              close={close}
              handleClose={handleClose}
            />
          </div>
        </main>
      </div>
    </div>
  );
}
export default App;
