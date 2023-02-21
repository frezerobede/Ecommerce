import axios from "axios";

const base_URL="http://localhost:5000/api";
const TOKEN= "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzNmMwNTVkNTIxNTlmNzgwMmRiZDZmZCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY3MTIwMzgzOCwiZXhwIjoxNjczNzk1ODM4fQ.NrHNworCG9bf5NlrAi_mWNADbbyRSAxPtnt0NYY6Ubw";
// JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user).currentUser.accesstoken;

export const publicRequest=axios.create({
    baseURL:base_URL
});

export const userRequest=axios.create({
    baseURL:base_URL,
    headers:{token:`Bearer ${TOKEN}`}
});