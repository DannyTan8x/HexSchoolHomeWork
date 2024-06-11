import axios from "axios";
import { useEffect, useRef, useState } from "react";
import { Modal } from "bootstrap";
import OrderModal from "../../components/OrderModal";
import Pagination from "../../components/Pagination";

export default function AdminOrders() {
  const [orders, setOrders] = useState([]);
  const [pagination, setPagination] = useState({});
  //type 類型確定Modal 展開的用途
  const [tempOrder, setTempOrder] = useState({
    create_at: 1523539519,
    is_paid: false,
    message: "這是留言",
    products: {
      L8nBrq8Ym4ARI1Kog4t: {
        final_total: 21,
        id: "-NzIyzSfGUJMSI2z14K0",
        product: {
          category: "21",
          content: "",
          description: "",
          id: "-Nz8EWgvv2ju7IBQHfaS",
          imageUrl: "",
          is_enabled: 0,
          origin_price: 21,
          price: 21,
          title: "21",
          unit: "21",
        },
        product_id: "-Nz8EWgvv2ju7IBQHfaS",
        qty: 1,
        total: 21,
      },
    },
    user: {
      address: "kaohsiung",
      email: "test@gmail.com",
      name: "test",
      tel: "0912346768",
    },
    num: 2,
  });

  const orderModal = useRef(null);

  useEffect(() => {
    orderModal.current = new Modal("#orderModal", {
      backdrop: "static",
    });

    getOrders();
  }, []);

  const getOrders = async (page = 1) => {
    const orderRes = await axios.get(
      `/v2/api/${process.env.REACT_APP_API_PATH}/admin/orders?page=${page}`
    );
    // console.log(orderRes);
    setOrders(orderRes.data.orders);
    setPagination(orderRes.data.pagination);
  };

  const openOrderModal = (order) => {
    setTempOrder(order);
    orderModal.current.show();
  };
  const closeOrderModal = () => {
    orderModal.current.hide();
  };

  return (
    <>
      <OrderModal
        closeOrderModal={closeOrderModal}
        getOrders={getOrders}
        tempOrder={tempOrder}
      />

      <div className="p-3">
        <h3>訂單列表</h3>
        <hr />

        <table className="table">
          <thead>
            <tr>
              <th scope="col">訂單ID</th>
              <th scope="col">購買用戶</th>
              <th scope="col">訂單金額</th>
              <th scope="col">付款狀態</th>
              <th scope="col">付款日期</th>
              <th scope="col">留言訊息</th>
              <th scope="col">編輯</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => {
              return (
                <tr key={order.id}>
                  <td>{order.id}</td>
                  <td>{order.user.email}</td>
                  <td>{order.total}</td>
                  <td>{order.is_paid ? "已付款" : "未付款"}</td>
                  <td>
                    {order.is_paid
                      ? `${new Date(order.paid_date).toLocaleDateString()}`
                      : "未付款"}
                  </td>
                  <td>{order.message}</td>
                  <td>
                    <button
                      type="button"
                      className="btn btn-primary btn-sm"
                      onClick={() => {
                        openOrderModal(order);
                      }}
                    >
                      查看
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>

        <Pagination pagination={pagination} changePage={getOrders} />
      </div>
    </>
  );
}
