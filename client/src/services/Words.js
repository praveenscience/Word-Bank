import Axios from "axios";

export const GetWords = () => Axios.get("/api/words");
