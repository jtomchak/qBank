export const addQuestion = q => {
  console.log(q);
  return fetch("questions", {
    method: "post",
    headers: {
      Accept: "application/json, text/plain, */*",
      "Content-Type": "application/json"
    },
    body: JSON.stringify(q)
  });
};

export const getQuestions = () => {
  return fetch("questions", {
    headers: {
      "Content-Type": "application/json"
    }
  });
};
