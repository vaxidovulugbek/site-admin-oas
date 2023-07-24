import { Checkbox } from "antd";
import { get } from "lodash";

export default function CheckboxGroup({ options, label, form, field }) {
    const hasError =
        get(form.touched, field.name) && get(form.errors, field.name);

    return (
        <div className="field_checkbox">
            {label ? <label>{label}</label> : null}

            <Checkbox.Group
                defaultValue={get(form.values, field.name)}
                options={options}
                onChange={(checkedValues) =>
                    form.setFieldValue(field.name, checkedValues)
                }
            />

            {hasError ? (
                <span className="field_error">
                    {get(form.errors, field.name)}
                </span>
            ) : null}
        </div>
    );
}
