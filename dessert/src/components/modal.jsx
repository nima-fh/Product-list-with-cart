"use client";
import data from "../data/data.json";

import { Modal } from "flowbite-react";

export default function Component({
  openModal,
  setOpenModal,
  counter,
  click,
  gotoR,
  price,
  close,
  handelclose,
}) {
  return (
    <>
      <Modal show={openModal} onClose={() => setOpenModal(false)}>
        <Modal.Header className="text-2xl flex  items-center">
          Order Confirmed{" "}
        </Modal.Header>
        <Modal.Body>
          <div className="space-y-6">
            {" "}
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
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <button
            className=" border-2 bg-red-600 hover:bg-red-700 p-2 w-full rounded-full"
            onClick={() => {
              setOpenModal(false);
            }}
          >
            start new order
          </button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
