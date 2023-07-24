import { Select } from "antd";
import { useFetchList } from "hooks";
import { get, isFunction } from "lodash";
import { useEffect, useState } from "react";

export default function AsyncSelectField({
    form,
    field,
    label,
    url,
    loadOptionsParams,
    optionLabel,
    optionValue,
    placeholder = "Выберите",
    onChange = (option: any) => {},
}) {
    const hasError =
        get(form.touched, field.name) && get(form.errors, field.name);

    const defaultValue = field.value
        ? {
              label: isFunction(optionLabel)
                  ? optionLabel(field.value)
                  : field.value["name"],
              value: isFunction(optionValue)
                  ? optionValue(field)
                  : field.value["id"],
          }
        : null;

    const [text, setText] = useState("");

    const data: any = useFetchList({
        url,
        urlSearchParams: {
            ...loadOptionsParams(text),
        },
    });

    const getOptions = (data) => {
        if (data) {
            return data.map((item) => ({
                label: isFunction(optionLabel)
                    ? optionLabel(item)
                    : item["name"],
                value: isFunction(optionValue) ? optionValue(item) : item["id"],
            }));
        }
    };

    useEffect(() => {
        data.refetch();
    }, [text]);

    return (
        <div className={`field_select ${hasError ? "error" : ""}`}>
            {label ? <label>{label}</label> : null}

            <Select
                allowClear={true}
                onSearch={(e) => setText(e)}
                options={data.data ? getOptions(data.data) : []}
                loading={data.isLoading}
                showSearch={true}
                placeholder={placeholder}
                defaultValue={defaultValue}
                onChange={(_, option) => {
                    form.setFieldValue(field.name, option);
                    onChange && onChange(option);
                }}
            />
            {hasError ? (
                <span className="field_error">
                    {get(form.errors, field.name)}
                </span>
            ) : null}
        </div>
    );
}
