import { PlusOutlined } from "@ant-design/icons";
import { Button } from "antd";

export default function TableHeader({ title, filterComponent, onCreate }) {
    return (
        <div className="table_header">
            <h1>{title}</h1>
            {filterComponent}
            {onCreate.title && (
                <Button
                    onClick={onCreate.onClick}
                    size="large"
                    className="add"
                    type="primary"
                    icon={<PlusOutlined />}
                >
                    {onCreate.title}
                </Button>
            )}
        </div>
    );
}
