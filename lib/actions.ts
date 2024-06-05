"use server";

export async function getQuestions() {
  try {
    const response = await fetch("https://manual-case-study.herokuapp.com/questionnaires/972423.json");

    if (!response.ok) {
      throw new Error("Network response was not OK");
    }

    const questionsData = await response.json();
    return questionsData;
  } catch (error: any) {
    return { error: { message: error.message } };
  }
}
