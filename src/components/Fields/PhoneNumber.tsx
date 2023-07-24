import { get } from "lodash";
import { PatternFormat } from "react-number-format";

export default function PhoneNumber({
    label,
    field,
    form,
    placeholder = "+998 (##) ###-##-##",
    format = "+998 (##) ###-##-##",
    mask = "_",
    onChange,
    ...props
}) {
    const hasError =
        get(form.touched, field.name) && get(form.errors, field.name);

    return (
        <div className="field_input--wrapper number">
            {label ? <label>{label}</label> : null}
            <PatternFormat
                type="text"
                format={format}
                mask={mask}
                placeholder={placeholder}
                className="ant-input"
                {...field}
                {...props}
                onChange={(event) => {
                    field.onChange(event);
                    onChange && onChange(event.target.value);
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
