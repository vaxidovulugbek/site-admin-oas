import { isArray } from "lodash";

const imageFormatter = (files) => {
    if (!files || !isArray(files)) {
        return [];
    } else {
        return files.map((file) => ({
            id: file.id,
            uid: file.id,
            name: file.name,
            url: file.src,
            response: file,
        }));
    }
};

export default imageFormatter;
