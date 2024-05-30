import { ResourceWithOptions } from "adminjs";
import { Answer, Form, FormSubmission, Question, QuestionCategory, User } from "../../models";
import { questionCategoryResourceOptions } from "./questionCategory";
import { formResourceOptions } from "./form";
import { questionResourceOptions } from "./question";
import { userResourceOptions } from "./user";
import { formSubmissionResourceOptions } from "./formSubmission";
import { answerResourceOptions } from "./answer";

export const adminJsResources: ResourceWithOptions[] = [
  {
    resource: QuestionCategory,
    options: questionCategoryResourceOptions
  },
  {
    resource: Form,
    options: formResourceOptions
  },
  {
    resource: Question,
    options: questionResourceOptions
  },
  {
    resource: User,
    options: userResourceOptions
  },
  {
    resource: FormSubmission,
    options: formSubmissionResourceOptions
  },
  {
    resource:Answer,
    options: answerResourceOptions
  }
]