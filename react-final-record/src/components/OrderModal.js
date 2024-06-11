import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { MessageContext, handleToastMessage } from "../store/MessageStore";

export default function OrderModal({ closeOrderModal, getOrders, tempOrder }) {
  const [tempData, setTempData] = useState({
    create_at: 1523539519,
    is_paid: false,
    message: "這是留言",
    schedule: "未確認",
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
  const [tempOrderProduct, setTempOrderProduct] = useState([]);

  const [, dispatch] = useContext(MessageContext);

  useEffect(() => {
    setTempData(tempOrder);
  }, [tempOrder]);
  useEffect(() => {
    const array = [];
    Object.keys(tempData.products).forEach((product) => {
      array.push(tempData.products[product]);
    });
    setTempOrderProduct(array);
  }, [tempData]);
  const handleChange = (e) => {
    const { value, name } = e.target;
    if (name === "is_paid") {
      setTempData({
        ...tempData,
        [name]: e.target.checked,
        paid_date: e.target.checked ? new Date().getTime() : null,
      });
    } else {
      setTempData({
        ...tempData,
        [name]: value,
      });
    }
  };

  const submit = async () => {
    let api = `/V2/api/${process.env.REACT_APP_API_PATH}/admin/order/${tempOrder.id}`;

    try {
      const res = await axios.put(api, { data: tempData });
      handleToastMessage(
        dispatch,
        "success",
        "儲存成功 Reducer",
        res.data.message
      );
      getOrders();
      closeOrderModal();
    } catch (error) {
      handleToastMessage(
        dispatch,
        "danger",
        "儲存失敗 Reducer",
        Array.isArray(error?.response?.data?.message)
          ? error?.response?.data?.message.join("; ")
          : error?.response?.data?.message
      );
    }
  };

  return (
    <div
      className="modal fade"
      tabIndex="-1"
      id="orderModal"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-lg">
        <div className="modal-content">
          <div className="modal-header">
            <h1 className="modal-title fs-5" id="exampleModalLabel">
              編輯{tempData.id}
            </h1>
            <button
              type="button"
              className="btn-close"
              aria-label="Close"
              onClick={closeOrderModal}
            />
          </div>
          <div className="modal-body">
            <div className="row">
              <div className="col">
                <div className="form-group mb-2">
                  <div className="row">
                    <div className="form-group mb-2 col-md-3">
                      <p className="w-100" htmlFor="category">
                        Email
                      </p>
                    </div>
                    <div className="form-group mb-2 col-md-9">
                      <p className="w-100" htmlFor="unit">
                        {tempData?.user?.email}
                      </p>
                    </div>
                  </div>
                  <div className="row">
                    <div className="form-group mb-2 col-md-3">
                      <p className="w-100">訂購者</p>
                    </div>
                    <div className="form-group mb-2 col-md-9">
                      <p className="w-100">{tempData?.user?.name}</p>
                    </div>
                  </div>
                  <div className="row">
                    <div className="form-group mb-2 col-md-3">
                      <p className="w-100">外送地址</p>
                    </div>
                    <div className="form-group mb-2 col-md-9">
                      <p className="w-100">{tempData?.user?.address}</p>
                    </div>
                  </div>
                  <div className="row">
                    <div className="form-group mb-2 col-md-3">
                      <p className="w-100">留言</p>
                    </div>
                    <div className="form-group mb-2 col-md-9">
                      <p className="w-100">{tempData?.message}</p>
                    </div>
                  </div>
                  {/* ⋯⋯⋯⋯⋯⋯^^顯示資料 */}
                  {/* 產品列 */}
                  <table className="table">
                    <thead>
                      <tr>
                        <th className="col-md-8">品項名稱</th>
                        <th className="col-md-4">數量</th>
                      </tr>
                    </thead>

                    <tbody>
                      {tempOrderProduct.map((product) => {
                        return (
                          <tr key={product.id}>
                            <td className=" col-md-8">
                              {product?.product?.title}
                            </td>
                            <td className="col-md-4">{product?.qty}</td>
                          </tr>
                        );
                      })}
                    </tbody>
                    {/* 產品列 */}
                    <tfoot>
                      <tr>
                        <td className="col-md-8 text-end">總金額</td>
                        <td className="col-md-4">$ {tempData?.total}</td>
                      </tr>
                    </tfoot>
                  </table>
                </div>
                <div className="modal-header">
                  <h1 className="modal-title fs-5">修改訂單狀態</h1>
                </div>
                <div className="form-group mb-2">
                  <div className="row">
                    <div className="form-group mb-2 col-md-1">
                      <input
                        type="checkbox"
                        id="is_paid"
                        name="is_paid"
                        placeholder="請輸入產品說明內容"
                        className="form-check-input"
                        onChange={handleChange}
                        checked={!!tempData.is_paid}
                      ></input>
                    </div>
                    <div className="form-group mb-2 col-md-11">
                      <label className="w-100" htmlFor="is_paid">
                        付款狀態
                        {!!tempData.is_paid ? "(已付款)" : "(未付款)"}
                      </label>
                    </div>
                  </div>
                  <div className="row">
                    <div className="form-group mb-2 col-md-12">
                      <label className="w-100" htmlFor="is_paid">
                        訂單進度
                      </label>
                    </div>
                  </div>
                  <div className="row">
                    <div className="form-group mb-2 col-md-12">
                      <select
                        type="select"
                        id="schedule"
                        name="schedule"
                        className="form-select-input w-100"
                        onChange={handleChange}
                        value={
                          tempData.schedule ? tempData.schedule : "Unconfirmed"
                        }
                      >
                        <option value="Unconfirmed">未確認</option>
                        <option value="Confirmed">已確認</option>
                        <option value="Delivering">配送中</option>
                        <option value="Delivered">已送達</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              onClick={closeOrderModal}
            >
              關閉
            </button>
            <button type="button" className="btn btn-primary" onClick={submit}>
              儲存
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
