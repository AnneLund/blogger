export default function authHeader() {
    const currentToken = sessionStorage.getItem("token") ?
    JSON.parse(sessionStorage.getItem("token")) :
    "";

    if (currentToken && currentToken) {
        return {
            "Acces-Control-Allow-Origin": "*",
            authorization: `Bearer ${currentToken.acces_token}`,
        }
    } else {
        return {};
    }
}