import { TimePicker } from "antd";
import dayjs from "dayjs";
import { get } from "lodash";

export default function TimePickerField({
    form,
    field,
    label,
    format = "HH:mm",
}) {
    const hasError =
        get(form.touched, field.name) && get(form.errors, field.name);

    return (
        <div className="field_time-picker">
            {label ? <label>{label}</label> : null}

            <TimePicker
                placeholder="Выберите время"
                onChange={(e) => {
                    form.setFieldValue(field.name, e?.format("HH:mm"));
                }}
                defaultValue={
                    field.value ? dayjs(field.value, format) : undefined
                }
                format={format}
            />

            {hasError ? (
                <span className="field_error">
                    {get(form.errors, field.name)}
                </span>
            ) : null}
        </div>
    );
}
