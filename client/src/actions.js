
const API_URL = process.env.REACT_APP_API_URL || "localhost"
const API_PORT = process.env.REACT_APP_API_PORT || 80;
const URL = `http://${API_URL}:${API_PORT}`

const getTasks = async () => {
    try {
        const response = await fetch(URL + "/api/tasks", { method: "GET"});
        const data = await response.json()
        return data;
    } catch (e) {
        return []
    }
}

const postTask = async (short, long) => {
    try {
        console.log(short)
        console.log(long)
        const response = await fetch(URL + "/api/tasks", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                short_description: short,
                long_description: long,
            })
        });

        const data = await response.json();
        return data;
    } catch (e) {
        return -1
    }
};

export { getTasks, postTask }
