import { useFetchList } from "hooks";

type ListTypes = {
    url: string;
    dataKey?: string;
    metaKey?: string;
    customQueryFn?: Function;
    queryOptions?: object;
    urlSearchParams?: object;
    children: Function;
};

const List: React.FC<ListTypes> = ({
    url,
    dataKey = "data",
    metaKey = "meta",
    customQueryFn,
    queryOptions = {},
    urlSearchParams,
    children,
}) => {
    const query = useFetchList({
        url,
        dataKey,
        metaKey,
        customQueryFn,
        queryOptions,
        urlSearchParams,
    });

    return children(query);
};

export default List;
