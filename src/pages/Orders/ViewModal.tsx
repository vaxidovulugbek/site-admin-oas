import { DrawerModal } from "components";
import formatters from "helpers/formatters";
import time from "helpers/time";

export default function ViewModal({ modal, setModal }) {
    const { open, data } = modal;

    if (!open) return <></>;

    const [orderItem] = data.orderItems;
    console.log(orderItem);

    return (
        <DrawerModal
            className="order_view"
            isOpen={open}
            onClose={() => setModal({ open: false, data: null })}
            title=""
            key={"order-view"}
            width={500}
        >
            <div className="pay-for-tariff-content">
                <div className="pay-for-tariff-info">
                    <div>
                        <div>
                            <h3
                                style={{
                                    textAlign: "center",
                                }}
                            >
                                Оплата по заказу № {data.id}
                            </h3>
                            <hr />
                            <div className="d-flex align-items-center justify-content-between">
                                <p>Номер ссылки</p>
                                <p>№ {data.id}</p>
                            </div>
                            <div className="d-flex align-items-center justify-content-between">
                                <p>Дата</p>
                                <p>
                                    {time.formatTimestamp(
                                        data.created_at,
                                        "DD MMMM YYYY"
                                    )}
                                </p>
                            </div>
                            <div className="d-flex align-items-center justify-content-between">
                                <p>Время</p>
                                <p>
                                    {time.formatTimestamp(
                                        data.created_at,
                                        "HH:MM"
                                    )}
                                </p>
                            </div>
                            <div className="d-flex align-items-center justify-content-between">
                                <p>Способ оплаты</p>
                                <p>Click</p>
                            </div>
                            <hr />
                            {orderItem["male_count"] ? (
                                <div className="d-flex align-items-center justify-content-between">
                                    <p>Для мужчин</p>
                                    <span>
                                        {orderItem["male_count"]} x{" "}
                                        {formatters.formatCurrencyView(
                                            orderItem["male_price"]
                                        )}
                                    </span>
                                </div>
                            ) : null}
                            {orderItem["female_count"] ? (
                                <div className="d-flex align-items-center justify-content-between">
                                    <p>Для женщин</p>
                                    <span>
                                        {orderItem["female_count"]} x{" "}
                                        {formatters.formatCurrencyView(
                                            orderItem["female_price"]
                                        )}
                                    </span>
                                </div>
                            ) : null}
                            {orderItem["child_count"] ? (
                                <div className="d-flex align-items-center justify-content-between">
                                    <p>Для детей с 4х до 12</p>
                                    <span>
                                        {orderItem["child_count"]}x{" "}
                                        {formatters.formatCurrencyView(
                                            orderItem["child_price"]
                                        )}
                                    </span>
                                </div>
                            ) : null}
                            {orderItem["baby_count"] ? (
                                <div className="d-flex align-items-center justify-content-between">
                                    <p>Для детей до 3х</p>
                                    <span>
                                        {orderItem["baby_count"]}x{" "}
                                        {formatters.formatCurrencyView(
                                            orderItem["child_price"]
                                        )}
                                    </span>
                                </div>
                            ) : null}
                            <hr />
                            <div className="d-flex align-items-center justify-content-between">
                                <p>Общая сумма</p>
                                <p>
                                    {formatters.formatCurrencyView(data.sum) +
                                        " UZS"}
                                </p>
                            </div>
                            <hr />
                            <p>
                                {data.status === 1 ? "Не оплачено" : "Оплачено"}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </DrawerModal>
    );
}
