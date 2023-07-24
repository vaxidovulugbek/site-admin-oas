import { Select } from "antd";
import { get } from "lodash";

export default function SelectField({
    options,
    form,
    field,
    label,
    placeholder = "Выберите",
    onChange,
    ...props
}) {
    const hasError =
        get(form.touched, field.name) && get(form.errors, field.name);

    return (
        <div className={`field_select ${hasError ? "error" : ""}`}>
            {label ? <label>{label}</label> : null}

            <Select
                allowClear={true}
                placeholder={placeholder}
                defaultValue={field.value ? field.value : null}
                options={options}
                onChange={(value) => {
                    form.setFieldValue(field.name, value);
                    onChange && onChange(value);
                }}
                {...props}
            />
            {hasError ? (
                <span className="field_error">
                    {get(form.errors, field.name)}
                </span>
            ) : null}
        </div>
    );
}
