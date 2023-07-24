import { Form, Formik } from "formik";
import { get } from "lodash";

import { httpClient, utils, queryBuilder } from "services";
import { useGetLanguage } from "hooks";

type FormPropTypes = {
    id?: string;
    url: string;
    method: string;
    children: Function;
    isFormData?: boolean;
    fields: {
        name: string;
        value?: any;
        validationType?: string;
        validations?: {}[];
        lazy?: Function;
        submitKey?: string;
        onSubmitValue?: Function;
        onSubmitKey?: string;
        isLanguageSchema?: boolean;
        required?: boolean;
        disabled?: boolean;
    }[];
    axiosConfig?: object;
    normalizeData?: Function;
    onSuccess?: Function;
    onError?: Function;
    onFinal?: Function;
    onSubmit?: undefined | Function;
    shouldValidate?: boolean;
    params?: object;
};

const FormContainer: React.FunctionComponent<FormPropTypes> = ({
    id,
    url,
    params,
    method = "post",
    children,
    isFormData = false,
    fields = [],
    normalizeData,
    axiosConfig = {},
    onSuccess = () => {},
    onError = () => {},
    onFinal = () => {},
    onSubmit,
    shouldValidate = true,
    ...formProps
}) => {
    const { languages } = useGetLanguage();

    const { initialValues, validationSchema } =
        utils.formHelpers.createFormSchema(fields, languages);

    const handleSubmit = (values: any, formHelpers: any) => {
        const formValues = utils.formHelpers.getFormValues(
            values,
            fields,
            isFormData,
            normalizeData
        );

        const requestUrl = params ? queryBuilder(url, params) : url;

        httpClient[method](requestUrl, formValues, axiosConfig)
            .then(({ data }) => {
                formHelpers.resetForm();
                onSuccess(data, formHelpers);
            })
            .catch((error: any) => {
                formHelpers.setErrors(get(error, "response.data.errors"));
                onError(error, formHelpers);
            })
            .finally(() => {
                formHelpers.setSubmitting(false);
                onFinal();
            });
    };

    return (
        <Formik
            initialValues={initialValues}
            validationSchema={shouldValidate ? validationSchema : false}
            onSubmit={
                onSubmit
                    ? (values: any) =>
                          onSubmit(
                              utils.formHelpers.getFormValues(values, fields)
                          )
                    : handleSubmit
            }
            enableReinitialize={true}
        >
            {(formik) => <Form {...formProps}>{children(formik)}</Form>}
        </Formik>
    );
};

export default FormContainer;
