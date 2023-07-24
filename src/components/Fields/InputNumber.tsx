import { get } from "lodash";
import { NumericFormat } from "react-number-format";

export default function InputNumberField({
    label,
    form,
    field,
    placeholder,
    type = "text",
    ...props
}) {
    const hasError =
        get(form.touched, field.name) && get(form.errors, field.name);

    return (
        <div className={`field_input ${hasError ? "error" : ""}`}>
            {label ? <label>{label}</label> : null}

            <div className="field_input--wrapper">
                <NumericFormat
                    allowLeadingZeros
                    thousandSeparator=" "
                    type="text"
                    placeholder={placeholder}
                    className="number-input"
                    {...field}
                    {...props}
                />
            </div>

            {hasError ? (
                <span className="field_error">
                    {get(form.errors, field.name)}
                </span>
            ) : null}
        </div>
    );
}
