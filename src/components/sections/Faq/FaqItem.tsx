"use client";

import Image from "next/image";

type FaqItemProps = {
  questionImage: string;
  questionAlt: string;
  answerLead?: string;
  answerParagraphs: string[];
};

export function FaqItem({
  questionImage,
  questionAlt,
  answerLead,
  answerParagraphs,
}: FaqItemProps) {
  return (
    <article className="rounded-2xl border border-ink-primary/10 bg-white p-4 shadow-sm sm:p-5">
      <div className="relative mx-auto w-full max-w-md overflow-hidden rounded-xl border border-ink-primary/10">
        <Image
          src={questionImage}
          alt={questionAlt}
          width={1024}
          height={1024}
          className="h-auto w-full object-contain"
          sizes="(min-width: 768px) 560px, 100vw"
        />
      </div>

      <div className="mx-auto mt-6 max-w-xl text-center">
        {answerLead ? (
          <p className="font-heading text-4xl font-semibold leading-none text-ink-primary sm:text-6xl">
            {answerLead}
          </p>
        ) : null}

        {answerParagraphs.map((paragraph) => (
          <p
            key={paragraph}
            className="mt-4 font-body text-[15px] font-medium leading-relaxed tracking-[0.02em] text-ink-primary sm:text-lg sm:tracking-[0.06em]"
          >
            {paragraph}
          </p>
        ))}
      </div>
    </article>
  );
}
