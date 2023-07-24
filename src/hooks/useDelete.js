import { useMutation } from "@tanstack/react-query";

import { utils } from "services";
import { get, isFunction } from "lodash";
import config from "config";

export const useDelete = ({
    url,
    customQueryFn,
    queryOptions = {},
    method = "delete",
    body,
}) => {
    const mutation = useMutation(
        utils.apiHelpers.getQueryKey(method, config.baseUrl + url),

        utils.apiHelpers.ultimateQueryFn(customQueryFn),

        {
            retry: false,
            ...queryOptions,
            onSuccess: (response) => {
                console.log(response);
                isFunction(get(queryOptions, "onSuccess")) &&
                    get(queryOptions, "onSuccess")(response);
            },
            onError: (response) => {
                isFunction(get(queryOptions, "onError")) &&
                    get(queryOptions, "onError")(response);
            },
        }
    );

    return {
        ...mutation,
        mutate: (appendUrl) =>
            mutation.mutate({
                queryKey: utils.apiHelpers.getQueryKey(
                    method,
                    appendUrl
                        ? config.baseUrl + `${url}/${appendUrl}`
                        : config.baseUrl + url
                ),
                body,
            }),
        mutateAsync: (appendUrl) =>
            mutation.mutateAsync({
                queryKey: utils.apiHelpers.getQueryKey(
                    method,
                    appendUrl
                        ? config.baseUrl + `${url}/${appendUrl}`
                        : config.baseUrl + url
                ),
                body,
            }),
    };
};
