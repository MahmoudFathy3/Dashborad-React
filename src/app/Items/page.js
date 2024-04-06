"use client";
import Modal from "@/Components/Modal/Modal";
import { useState } from "react";
import { IoMdClose } from "react-icons/io";
import Styles from "./item.module.css";
import Image from "next/image";
import images from "../../../public/img.jpg";

const Items = () => {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [edit, setEdit] = useState(false);
  const [add, setAdd] = useState(false);

  const HandlerAddModal = () => {
    setIsOpenModal(false);
    setAdd(false);
  };

  const HandlerEditModal = () => {
    setIsOpenModal(false);
    setEdit(false);
  };

  const OpenAddModal = () => {
    setIsOpenModal(!isOpenModal);
    setAdd(!add);
  };

  const OpenEditModal = () => {
    setIsOpenModal(!isOpenModal);
    setEdit(!edit);
  };


  return (
    <main>
      <div className={Styles.buttonContainer}>
        <button onClick={OpenAddModal}>Add New Item</button>
      </div>

      <table className={Styles.table}>
        <thead>
          <tr>
            <th>Image</th>
            <th>Name</th>
            <th>Description</th>
            <th>Category</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <Image src={images} alt="image Category" className={Styles.img} />
            </td>
            <td>
              <h3>Shoest Mans</h3>
            </td>
            <td>
              <p>This is Shoest Mans</p>
            </td>
            <td>
              <h3>Shoest</h3>
            </td>
            <td>
              <div className={Styles.actions}>
                <button className={Styles.edit} onClick={OpenEditModal}>Edit</button>
                <button className={Styles.delete}>Delete</button>
              </div>
            </td>
          </tr>
          <tr>
            <td>
              <Image src={images} alt="image Category" className={Styles.img} />
            </td>
            <td>
              <h3>Shoest Mans</h3>
            </td>
            <td>
              <p>This is Shoest Mans</p>
            </td>
            <td>
              <h3>Shoest</h3>
            </td>
            <td>
              <div className={Styles.actions}>
                <button className={Styles.edit}>Edit</button>
                <button className={Styles.delete}>Delete</button>
              </div>
            </td>
          </tr>
          <tr>
            <td>
              <Image src={images} alt="image Category" className={Styles.img} />
            </td>
            <td>
              <h3>Shoest Mans</h3>
            </td>
            <td>
              <p>This is Shoest Mans</p>
            </td>
            <td>
              <h3>Shoest</h3>
            </td>
            <td>
              <div className={Styles.actions}>
                <button className={Styles.edit}>Edit</button>
                <button className={Styles.delete}>Delete</button>
              </div>
            </td>
          </tr>
          <tr>
            <td>
              <Image src={images} alt="image Category" className={Styles.img} />
            </td>
            <td>
              <h3>Shoest Mans</h3>
            </td>
            <td>
              <p>This is Shoest Mans</p>
            </td>
            <td>
              <h3>Shoest</h3>
            </td>
            <td>
              <div className={Styles.actions}>
                <button className={Styles.edit}>Edit</button>
                <button className={Styles.delete}>Delete</button>
              </div>
            </td>
          </tr>
          <tr>
            <td>
              <Image src={images} alt="image Category" className={Styles.img} />
            </td>
            <td>
              <h3>Shoest Mans</h3>
            </td>
            <td>
              <p>This is Shoest Mans</p>
            </td>
            <td>
              <h3>Shoest</h3>
            </td>
            <td>
              <div className={Styles.actions}>
                <button className={Styles.edit}>Edit</button>
                <button className={Styles.delete}>Delete</button>
              </div>
            </td>
          </tr>
          <tr>
            <td>
              <Image src={images} alt="image Category" className={Styles.img} />
            </td>
            <td>
              <h3>Shoest Mans</h3>
            </td>
            <td>
              <p>This is Shoest Mans</p>
            </td>
            <td>
              <h3>Shoest</h3>
            </td>
            <td>
              <div className={Styles.actions}>
                <button className={Styles.edit}>Edit</button>
                <button className={Styles.delete}>Delete</button>
              </div>
            </td>
          </tr>
          <tr>
            <td>
              <Image src={images} alt="image Category" className={Styles.img} />
            </td>
            <td>
              <h3>Shoest Mans</h3>
            </td>
            <td>
              <p>This is Shoest Mans</p>
            </td>
            <td>
              <h3>Shoest</h3>
            </td>
            <td>
              <div className={Styles.actions}>
                <button className={Styles.edit}>Edit</button>
                <button className={Styles.delete}>Delete</button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>

      {/* Add New Item */}
      {isOpenModal && !edit && add &&(
        <Modal>
          <div className={Styles.close}>
            <IoMdClose className={Styles.icon_Close} onClick={HandlerAddModal} />
          </div>
          <form className={Styles.form} method="POST">
            <div className={Styles.form_group}>
              <label>Name:</label>
              <input type="text" name="name" placeholder="Name item" required />
            </div>
            <div className={Styles.form_group}>
              <label>Description:</label>
              <input
                type="text"
                name="description"
                placeholder="description item"
                required
              />
            </div>
            <div className={Styles.form_group}>
              <label>Bg-Image:</label>
              <input
                type="file"
                name="Bg-Image"
                placeholder="BackGround Image Item"
                required
              />
            </div>
            <div className={Styles.form_group}>
              <label>Category Name:</label>
              <input
                type="text"
                name="Category Name"
                placeholder="Category Name"
                required
              />
            </div>

            <div className={Styles.form_button}>
              <input
                type="submit"
                value="Add"
                className={Styles.button_submit}
              />
            </div>
          </form>
        </Modal>
      )}

      {/* Edit Item */}
      {isOpenModal && edit && !add &&(
        <Modal>
          <div className={Styles.close}>
            <IoMdClose className={Styles.icon_Close} onClick={HandlerEditModal} />
          </div>
          <form className={Styles.form} method="POST">
            <div className={Styles.form_group}>
              <label>Name:</label>
              <input type="text" name="name" placeholder="Name item" required />
            </div>
            <div className={Styles.form_group}>
              <label>Description:</label>
              <input
                type="text"
                name="description"
                placeholder="description item"
                required
              />
            </div>
            <div className={Styles.form_group}>
              <label>Bg-Image:</label>
              <input
                type="file"
                name="Bg-Image"
                placeholder="BackGround Image Item"
                required
              />
            </div>
            <div className={Styles.form_group}>
              <label>Category Name:</label>
              <input
                type="text"
                name="Category Name"
                placeholder="Category Name"
                required
              />
            </div>

            <div className={Styles.form_button}>
              <input
                type="submit"
                value="Edit"
                className={Styles.button_submit}
              />
            </div>
          </form>
        </Modal>
      )}
    </main>
  );
};

export default Items;
