import axios from "axios";

axios.defaults.withCredentials = true;
axios.defaults.headers["Access-Control-Allow-Origin"] = "*";

async function request() {
    const response = await axios.post("https://yoda.myunisoft.fr:1337/api/authenticate", {
        mail: process.env.mail,
        password: process.env.password,
        firm: 5
    });
    console.log("authenticated");
    console.log(response.data);

    {
        const { data } = await axios.get("https://yoda.myunisoft.fr:1350/ged/tab/3");
        console.log("Node.js GED Tree:");
        console.log(data);
    }

    {
        const { data } = await axios.get("https://ws-dev.myunisoft.fr/rights");
        console.log("windev rights:");
        console.log(data);
    }
}

async function disconnect() {
    const response = await axios.post("https://yoda.myunisoft.fr:1337/api/authenticate/disconnect");
    console.log(response);
}

document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("trigger").addEventListener("click", request);
    document.getElementById("disconnect").addEventListener("click", disconnect);
});
