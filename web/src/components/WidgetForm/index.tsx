import { useState } from "react";

import { CloseButton } from "../CloseButton";

import { FeedbackTypeStep } from "../WidgetForm/Steps/FeedbackTypeStep";
import { FeedbackContentStep } from "./Steps/FeedbackContentStep";

import bugImageUrl from "../../assets/bug.svg";
import ideaImageUrl from "../../assets/idea.svg";
import thoughtImageUrl from "../../assets/thought.svg";
import { FeedbackSuccessStep } from "./Steps/FeedbackSuccessStep";

export const feedbackTypes = {
  BUG: {
    title: "Problema",
    image: {
      source: bugImageUrl,
      alt: "Imagem de um inseto"
    }
  },
  IDEA: {
    title: "Ideia",
    image: {
      source: ideaImageUrl,
      alt: "Imagem de uma lâmpada"
    }
  },
  OTHER: {
    title: "Outro",
    image: {
      source: thoughtImageUrl,
      alt: "Imagem de uma nuvem de pensamento"
    }
  }
};

export type FeedbackType = keyof typeof feedbackTypes; 

export const WidgetForm = () => {

  const [ feedbackType, setFeedbackType ] = useState<FeedbackType | null>( null );
  const [ feedbackSent, setFeedbackSent ] = useState( false );

  const handleRestartFeedback = () => {
    setFeedbackSent(false);
    setFeedbackType(null);
  };

  return (

    <div className="bg-zinc-900 p-4 relative rounded-2xl mb-4 flex flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto">
      { feedbackSent ? (
          <FeedbackSuccessStep onFeedbackRestartRequested={handleRestartFeedback} />
      ) : (
        <>
          { !feedbackType ? (
                <FeedbackTypeStep onFeedbackTypeChange={setFeedbackType} />
            ) : (
              <FeedbackContentStep 
              feedbackType={feedbackType} 
              onFeedbackRestartRequested={handleRestartFeedback}
              onFeedbackSent={() => setFeedbackSent(true)}
              />
            )}
        </>
      ) }

      <footer>
        Feito com ❤ por <a className="underline underline-offset-2" href="https://www.linkedin.com/in/gabriel-silva-souza-47a220216">Gabriel Silva</a>
      </footer>
    </div>

  );
};