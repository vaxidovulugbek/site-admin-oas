import { useEffect } from "react";
import { useQuery } from "@tanstack/react-query";

import { utils } from "services";

type propTypes = {
    url: string;
    dataKey?: string;
    metaKey?: string;
    customQueryFn?: Function;
    queryOptions?: object;
    urlSearchParams?: object;
    refetchStatus?: boolean;
};

type FetchOneFunction = (prop: propTypes) => object;

export const useFetchOne: FetchOneFunction = ({
    url,
    dataKey = "data",
    customQueryFn,
    queryOptions = {},
    urlSearchParams,
    refetchStatus = false,
}) => {
    const single = useQuery(
        utils.apiHelpers.getQueryKey("GET", url, urlSearchParams),

        utils.apiHelpers.ultimateQueryFn(customQueryFn, urlSearchParams),

        {
            select: (data: any) => utils.apiHelpers.dataSelect(data, dataKey),

            ...queryOptions,
            refetchOnMount: false,
            refetchInterval: false,
            refetchOnWindowFocus: false,
            retry: 0,
            cacheTime: 0,
        }
    );

    useEffect(() => {
        if (refetchStatus) single.refetch();
    }, [refetchStatus, single]);

    return single;
};
