import { useState } from "react";
import { useQuery } from "@tanstack/react-query";

import { utils } from "services";
import config from "config";

type propTypes = {
    url: string;
    dataKey?: string;
    metaKey?: string;
    customQueryFn?: Function;
    queryOptions?: object;
    urlSearchParams?: object;
};

type FetchListFunction = (prop: propTypes) => object;

export const useFetchList: FetchListFunction = ({
    url,
    dataKey = "data",
    metaKey = "meta",
    customQueryFn,
    queryOptions = {},
    urlSearchParams = {},
}) => {
    const [page, setPage] = useState(1);
    const params = { page, ...urlSearchParams };

    let meta: any;
    const query = useQuery(
        utils.apiHelpers.getQueryKey("GET", config.baseUrl + url, params),

        utils.apiHelpers.ultimateQueryFn(customQueryFn, params),

        {
            select: (responseData: any) => {
                meta = utils.apiHelpers.metaSelect(responseData, metaKey);
                return utils.apiHelpers.dataSelect(responseData, dataKey);
            },

            refetchOnWindowFocus: false,
            ...queryOptions,
            retry: 0,
            cacheTime: 0,
        }
    );

    return {
        ...query,
        meta,
        setPage,
        page,
    };
};
