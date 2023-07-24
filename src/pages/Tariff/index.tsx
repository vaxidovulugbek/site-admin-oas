import { useState } from "react";
import { TableView } from "components";
import CreateUpdateModal from "./CreateUpdateModal";
import formatters from "helpers/formatters";

export default function Subscription() {
    const [modal, setModal] = useState({ open: false, row: null });
    const [refetch, setRefetch] = useState(false);

    return (
        <div className="subscription">
            <CreateUpdateModal
                modal={modal}
                setModal={setModal}
                setRefetch={setRefetch}
            />
            <TableView
                url="/tariff"
                title="Тарифы"
                refetch={refetch}
                rowSelect={false}
                // onEdit={(value: any) => {
                //     setModal({ open: true, row: value });
                // }}
                // onCreate={{
                //     title: "Добавить тарифа",
                //     onClick: () => {
                //         setModal({ open: true, row: null });
                //     },
                // }}
                columns={[
                    {
                        title: "Код тарифа",
                        key: "id",
                        dataIndex: "id",
                    },
                    {
                        title: "Наименование тарифа",
                        key: "name",
                        dataIndex: "name",
                        render: (name) => name["ru"],
                    },
                    {
                        title: "Для мужчин",
                        key: "weekdays_male_price",
                        dataIndex: "weekdays_male_price",
                        render: (price) => formatters.formatCurrencyView(price),
                    },
                    {
                        title: "Для мужчин (выходные)",
                        key: "weekends_male_price",
                        dataIndex: "weekends_male_price",
                        render: (price) => formatters.formatCurrencyView(price),
                    },
                    {
                        title: "Для женщин",
                        key: "weekdays_female_price",
                        dataIndex: "weekdays_female_price",
                        render: (price) => formatters.formatCurrencyView(price),
                    },
                    {
                        title: "Для женщин (выходные)",
                        key: "weekends_female_price",
                        dataIndex: "weekends_female_price",
                        render: (price) => formatters.formatCurrencyView(price),
                    },
                    {
                        title: "Для детей с 4х до 12",
                        key: "weekdays_child_price",
                        dataIndex: "weekdays_child_price",
                        render: (price) => formatters.formatCurrencyView(price),
                    },
                    {
                        title: "Для детей с 4х до 12 (выходные)",
                        key: "weekends_child_price",
                        dataIndex: "weekends_child_price",
                        render: (price) => formatters.formatCurrencyView(price),
                    },
                ]}
            />
        </div>
    );
}
