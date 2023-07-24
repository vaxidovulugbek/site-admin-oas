import { useSelector } from "react-redux";

const useGetLanguage = () => {
    const { lng, languages } = useSelector((state: any) => state.system);

    const getLanguageValue = (objectLng = {}) => {
        if (!objectLng) return "";
        else if (objectLng[lng]) return objectLng[lng];
        else {
            return Object.values(objectLng).find((item) => item);
        }
    };

    const createLanguageObj = () =>
        languages.reduce(
            (prev: object, lng: any) => ({
                ...prev,
                [lng.code]: "",
            }),
            {}
        );

    return { lng, languages, getLanguageValue, createLanguageObj };
};

export default useGetLanguage;
