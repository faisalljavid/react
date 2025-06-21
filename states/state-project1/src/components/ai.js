import { InferenceClient } from '@huggingface/inference';
import { GoogleGenerativeAI } from "@google/generative-ai";

const SYSTEM_PROMPT = `
You are a recipe assistant. When given ingredients, provide ONLY the recipe content without any conversational phrases like "Sure!", "I'd be happy to help", or similar greetings. 

Format your response as a clean recipe with:
- Recipe name as a heading
- Ingredients list
- Instructions/steps

Use markdown formatting. Do not include any introductory text or conversational elements - go straight to the recipe.
`;

const hf = new InferenceClient(import.meta.env.VITE_HF_ACCESS_TOKEN);

export async function getRecipeFromMistral(ingredientsArr) {
    const ingredientsString = ingredientsArr.join(", ");
    try {
        const response = await hf.chatCompletion({
            model: "mistralai/Mixtral-8x7B-Instruct-v0.1",
            messages: [
                { role: "system", content: SYSTEM_PROMPT },
                { role: "user", content: `I have ${ingredientsString}. Please give me a recipe you'd recommend I make!` },
            ],
        });
        return response.choices[0].message.content;
    } catch (err) {
        console.error('Mistral API Error:', err.message);
        throw err; // Re-throw to handle errors in calling code
    }
}

const genAI = new GoogleGenerativeAI(import.meta.env.VITE_GEMINI_API_KEY);

export async function getRecipeFromGemini(ingredientsArr) {
    const ingredientsString = ingredientsArr.join(", ");

    try {
        const model = genAI.getGenerativeModel({
            model: "gemini-1.5-flash",
            systemInstruction: SYSTEM_PROMPT
        });

        const result = await model.generateContent(
            `I have ${ingredientsString}. Please give me a recipe you'd recommend I make!`
        );

        const response = await result.response;
        return response.text();

    } catch (err) {
        console.error('Gemini API Error:', err.message);
        throw err;
    }
}