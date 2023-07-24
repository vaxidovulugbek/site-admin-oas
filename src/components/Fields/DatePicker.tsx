import { DatePicker } from "antd";
import dayjs from "dayjs";
import { get } from "lodash";

export default function DatePickerField({
    form,
    field,
    label,
    format = "DD:MM:YYYY",
    onChange,
    ...props
}) {
    const hasError =
        get(form.touched, field.name) && get(form.errors, field.name);

    return (
        <div className="field_time-picker">
            {label ? <label>{label}</label> : null}

            <DatePicker
                placeholder="Выберите время"
                onChange={(e) => {
                    form.setFieldValue(field.name, e?.format("DD:MM:YYYY"));
                    onChange && onChange(e);
                }}
                defaultValue={
                    field.value ? dayjs(field.value, format) : undefined
                }
                format={format}
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
