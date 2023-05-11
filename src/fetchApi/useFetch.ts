export const useFetch = () => {
    const fetchFuntion = (method: string) => (url: string, body: any) =>
        fetch(url, {
            method: method,
            headers: {"Content-Type": "application/json"},
            body: body && JSON.stringify(body),
        });
    return {
        GET: fetchFuntion("GET"),
        POST: fetchFuntion("POST"),
        DELETE: fetchFuntion("DELETE"),
    };
};
