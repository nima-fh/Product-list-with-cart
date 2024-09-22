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
                <ul>
                  {gotoR
                    .filter((item) => !close.includes(item))
                    .map((item, index) => (
                      <li
                        key={index}
                        className="flex justify-between border-b-2 my-4"
                      >
                        <span className="text-red-700">
                          {counter[index] + "x"}{" "}
                        </span>
                        <span>{item}</span>
                        <span>{"$" + counter[index] * price[index]}</span>
                        <button onClick={() => handelclose(index)}>
                          <img
                            src="../assets/images/icon-remove-item.svg"
                            alt=""
                          />
                        </button>
                      </li>
                    ))}
                </ul>
              </div>{" "}
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
