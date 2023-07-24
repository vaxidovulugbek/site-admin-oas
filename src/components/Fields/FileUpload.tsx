import { useState } from "react";
import { LoadingOutlined, PlusOutlined } from "@ant-design/icons";
import { message, Upload } from "antd";
import { get } from "lodash";
import configs from "config";
import { getState } from "store";
import imageFormatter from "utils/imageFormatter";

const FileUpload = ({ form, field, label, multiple = false }) => {
    const [loading, setLoading] = useState(false);
    const [fileList, setFileList] = useState(imageFormatter(field.value));

    const handleChange = ({ file, fileList }) => {
        setFileList(fileList);
        if (file.status === "uploading") {
            setLoading(true);
            return;
        }
        //
        if (file.status === "error") {
            setLoading(false);
            message.error("Не удалось загрузить изображение");
            return;
        }
        //
        if (file.status === "done") {
            setLoading(false);
            message.success("Загружено");

            const list = fileList.map((file) => ({
                ...file,
                id: get(file, "response[0].data.id"),
            }));
            setFileList(list);

            form.setFieldValue(field.name, list);
        }
    };

    const hasError =
        get(form.touched, field.name) && get(form.errors, field.name);

    return (
        <div className="field_upload">
            {label ? <label htmlFor="file">{label}</label> : null}
            <Upload
                id="file"
                name="files"
                listType="picture-card"
                fileList={fileList}
                action={configs.baseUrl + "/file"}
                headers={{
                    Authorization: `Bearer ${getState().auth.user.token}`,
                }}
                multiple={multiple}
                onChange={handleChange}
                onRemove={({ response }) => {
                    const list = form.values[field.name].filter(
                        (f: any) => f.id !== response.id
                    );
                    form.setFieldValue(field.name, list.length ? list : null);
                }}
                disabled={loading}
            >
                {!multiple && fileList.length === 1 ? null : (
                    <div>
                        {loading ? <LoadingOutlined /> : <PlusOutlined />}
                        <div style={{ marginTop: 8 }}>Загрузить</div>
                    </div>
                )}
            </Upload>
            {hasError ? (
                <span className="field_error">
                    {get(form.errors, field.name)}
                </span>
            ) : null}
        </div>
    );
};

export default FileUpload;
