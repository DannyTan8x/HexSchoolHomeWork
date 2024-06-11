import axios from "axios";
import { useEffect, useRef, useState } from "react";
import { Modal } from "bootstrap";
import CouponModal from "../../components/CouponModal";
import DeleteModal from "../../components/DeleteModal";
import Pagination from "../../components/Pagination";

export default function AdminCoupons() {
  const [coupons, setCoupons] = useState([]);
  const [pagination, setPagination] = useState({});
  //type 類型確定Modal 展開的用途
  const [type, setType] = useState("create"); //'edit'
  const [tempCoupon, setTempCoupon] = useState({});

  const couponModal = useRef(null);
  const deleteModal = useRef(null);

  useEffect(() => {
    couponModal.current = new Modal("#CouponModal", {
      backdrop: "static",
    });
    deleteModal.current = new Modal("#deleteModal", {
      backdrop: "static",
    });
    getCoupons();
  }, []);

  const getCoupons = async (page = 1) => {
    const res = await axios.get(
      `/v2/api/${process.env.REACT_APP_API_PATH}/admin/coupons?page=${page}`
    );
    console.log(res);
    setCoupons(res.data.coupons);
    setPagination(res.data.pagination);
  };

  const openCouponModal = (type, Coupon) => {
    setType(type);
    setTempCoupon(Coupon);
    couponModal.current.show();
  };
  const closeCouponModal = () => {
    couponModal.current.hide();
  };
  const openDeleteModal = (Coupon) => {
    setTempCoupon(Coupon);
    deleteModal.current.show();
  };
  const closeDeleteModal = () => {
    deleteModal.current.hide();
  };
  const deleteCoupon = async (id) => {
    let api = `/V2/api/${process.env.REACT_APP_API_PATH}/admin/coupon/${id}`;
    try {
      const res = await axios.delete(api);
      console.log(res);
      getCoupons();
    } catch (error) {
      console.log(error);
    }
    closeDeleteModal();
  };
  return (
    <>
      <CouponModal
        closeCouponModal={closeCouponModal}
        getCoupons={getCoupons}
        tempCoupon={tempCoupon}
        type={type}
      />
      <DeleteModal
        closeDeleteModal={closeDeleteModal}
        text={tempCoupon.title}
        deleteData={deleteCoupon}
        id={tempCoupon.id}
      />
      <div className="p-3">
        <h3>優惠價列表</h3>
        <hr />
        <div className="text-end">
          <button
            type="button"
            className="btn btn-primary btn-sm"
            onClick={() => {
              openCouponModal("create", {});
            }}
          >
            建立新優惠價
          </button>
        </div>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">名稱</th>
              <th scope="col">折扣（%）</th>
              <th scope="col">到期日</th>
              <th scope="col">啟用狀態</th>
              <th scope="col">編輯</th>
            </tr>
          </thead>
          <tbody>
            {coupons.map((Coupon) => {
              return (
                <tr key={Coupon.id}>
                  <td>{Coupon.title}</td>
                  <td>{new Date(Coupon.due_date).toLocaleDateString()}</td>
                  <td>{Coupon.percent}</td>
                  <td>{Coupon.is_enabled ? "啟用" : "不啟用"}</td>
                  <td>
                    <button
                      type="button"
                      className="btn btn-primary btn-sm"
                      onClick={() => {
                        openCouponModal("edit", Coupon);
                      }}
                    >
                      編輯
                    </button>
                    <button
                      type="button"
                      className="btn btn-outline-danger btn-sm ms-2"
                      onClick={() => openDeleteModal(Coupon)}
                    >
                      刪除
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>

        <Pagination pagination={pagination} changePage={getCoupons} />
      </div>
    </>
  );
}
