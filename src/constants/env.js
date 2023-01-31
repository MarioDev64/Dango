let API_URL = "";

if(process.env.NODE_ENV === "development"){
    API_URL = process.env["REACT_APP_API_URL"];
}else{
    API_URL = process.env["RAILWAY_STATIC_URL"];
}

export { API_URL }