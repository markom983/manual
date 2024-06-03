"use server"

export async function getQuestions() {
  let questionsData;
  try {
    const response = await fetch("https://manual-case-study.herokuapp.com/questionnaires/972423.json", { method: "GET"})

    if (!response.ok) {
      throw new Error("Network response was not OK");
    }

    questionsData = await response.json();
  } catch (error: any) {
    return { error: { message: error.message } };
  }

  return questionsData;
}
