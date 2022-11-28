import React from "react";
import {
  IQuestions,
  IQuestionsList,
  IQuestionsListItem,
} from "../../interfaces";
import QuestionsItem from "../QuestionsItem";

const Questions = ({ description, questionsList, title }: IQuestions) => {
  return (
    <section className="py-12 bg-light dark:bg-dark">
      <div className="lg:container px-8 mx-auto">
        <h2 className="text-3xl font-semibold text-center uppercase pb-2">
          {title && title}
        </h2>
        <p className="text-xl text-center ">{description && description}</p>

        <div className="grid grid-cols-1 md:grid-cols-2 max-w-4xl mx-auto pt-8 gap-12">
          {questionsList.map((el: IQuestionsList) => (
            <div key={el._key}>
              {el.questionsListItem.map((item: IQuestionsListItem, index) => (
                <QuestionsItem
                  key={item._key}
                  title={item.title}
                  description={item.description}
                  index={index}
                  length={el.questionsListItem.length}
                />
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Questions;
