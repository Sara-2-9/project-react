import { useState } from "react";
import { generateText } from "ai";
import Button from "./button";
import Textarea from "./textarea";
import type { PromptProps } from "../@types/components.d.ts";
import { SendIcon } from "lucide-react";
import { createMistral } from "@ai-sdk/mistral";

export default function Prompt(props: PromptProps) {
  const [prompt, setPrompt] = useState("");

  const mistral = createMistral({
    apiKey: import.meta.env.VITE_MISTRAL_API_KEY,
  });

  const model = mistral("mistral-small-latest");

  const handleSubmit = async () => {
    if (!prompt.trim()) return; // Non fare nulla se il testo è vuoto

    try {
      const respose = await generateText({
        model: model,
        prompt: prompt,
      });
      props.setResponse(respose.text);
      setPrompt(""); // Pulisci il campo dopo l'invio
    } catch (error) {
      console.error("Errore:", error);
    }
  };

  return (
    <div className="w-1/2 h-1/6 flex flex-col gap-2 border-2 border-neutral-700 rounded-2xl p-2">
      <Textarea value={prompt} onChange={(e) => setPrompt(e.target.value)} />
      <div className="w-full h-full flex items-center justify-end">
        <Button icon={SendIcon} onClick={handleSubmit} />
      </div>
    </div>
  );
}
