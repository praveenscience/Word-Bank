import Axios from "axios";

export const GetWords = () => Axios.get("/api/words");

export const DeleteWord = WordID => Axios.delete("/api/words/" + WordID);
