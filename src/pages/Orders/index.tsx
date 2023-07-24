import { useState } from "react";
import { TableView } from "components";
import formatters from "helpers/formatters";
import time from "helpers/time";
import constants from "helpers/constants";
import Filter from "./Filter";
import ViewModal from "./ViewModal";

export default function Subscription() {
    const [filter, setFilter] = useState();
    const [modal, setModal] = useState({ open: false, data: null });
    const [refetch] = useState(false);

    return (
        <div className="subscription">
            <ViewModal modal={modal} setModal={setModal} />

            <TableView
                url="/order"
                urlSearchParams={{
                    filter,
                    include: "orderItems",
                }}
                title="Заказы"
                onDoubleClick={(row) => setModal({ open: true, data: row })}
                filterComponent={<Filter setFilter={setFilter} />}
                refetch={refetch}
                columns={[
                    {
                        title: "ID",
                        key: "id",
                        dataIndex: "id",
                    },
                    {
                        title: "Наименование",
                        key: "name",
                        dataIndex: "name",
                    },
                    {
                        title: "Телефон",
                        key: "phone",
                        dataIndex: "phone",
                    },
                    {
                        title: "Дата",
                        key: "created_at",
                        dataIndex: "created_at",
                        render: (value) => time.formatTimestamp(value),
                    },
                    {
                        title: "Цена тарифа",
                        key: "sum",
                        dataIndex: "sum",
                        render: (value) =>
                            formatters.formatCurrencyView(value) + " UZS",
                    },
                    {
                        title: "Способ оплаты",
                        key: "payment",
                        dataIndex: "id",
                        render: () => (
                            <img
                                src={require("assets/images/click.png")}
                                alt="click"
                                height={35}
                            />
                        ),
                    },
                    {
                        title: "Статус",
                        key: "status",
                        dataIndex: "status",
                        render: (status) =>
                            constants.orderStatus.find(
                                (s) => s.value === status
                            )?.label,
                    },
                ]}
            />
        </div>
    );
}
