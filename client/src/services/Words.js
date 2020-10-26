import Axios from "axios";

export const GetWords = () => Axios.get("/api/words");
export const CreateWord = Word => Axios.post("/api/words", Word);
export const UpdateWord = Word => Axios.put("/api/words/" + Word.slug, Word);
export const DeleteWord = WordID => Axios.delete("/api/words/" + WordID);
