import axios from "axios";

export default function TempOrder(getOrders) {
  // 虛擬資料
  const deleteOrders = async () => {
    let api = `/V2/api/${process.env.REACT_APP_API_PATH}/admin/orders/all`;
    try {
      const res = await axios.delete(api);
      console.log(res);

      getOrders();
    } catch (error) {
      console.log(error);
    }
  };
  const createCart = async () => {
    let api = `/V2/api/${process.env.REACT_APP_API_PATH}/cart`;
    const visualProduct = {
      data: {
        // product_id: "-Nz8Y1li43fFjRFIlxDG",
        product_id: "-Nz8EWgvv2ju7IBQHfaS",
        // product_id: "-Nz8EG7dhI0BF1yWZOZX",
        qty: 1,
      },
    };
    try {
      const res = await axios.post(api, visualProduct);
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };
  const createOrder = async (id) => {
    let api = `/V2/api/${process.env.REACT_APP_API_PATH}/order`;
    const visualOrder = {
      data: {
        user: {
          name: "test",
          email: "test@gmail.com",
          tel: "0912346768",
          address: "kaohsiung",
        },
        message: "這是留言",
      },
    };
    try {
      // await createCart();
      const res = await axios.post(api, visualOrder);
      console.log(res);
      // handleToastMessage(
      //   dispatch,
      //   "success",
      //   "虛擬訂單建立成功 Reducer",
      //   res.data.message
      // );
      getOrders();
    } catch (error) {
      console.log(error);
    }
  };
  const payOrder = async () => {
    let api = `/V2/api/${process.env.REACT_APP_API_PATH}/pay/-NzHrJVCYax2QdGtqPsX`;

    try {
      await createCart();
      const res = await axios.post(api);
      console.log(res);
      getOrders();
    } catch (error) {
      console.log(error);
    }
  };
  // 虛擬資料

  return (
    <>
      <button onClick={createCart}>建立虛擬購物車</button>
      <button onClick={createOrder}>建立虛擬訂單</button>
      <button onClick={deleteOrders}>刪除虛擬訂單</button>
      <button onClick={payOrder}>付款虛擬訂單</button>
    </>
  );
}
