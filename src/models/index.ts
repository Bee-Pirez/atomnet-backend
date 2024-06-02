//Definir as associações dos meus models e tabelas
import { Question } from "./Question";
import { QuestionCategory } from "./QuestionCategory";
import { FormSubmission } from "./FormSubmission";
import { Form } from "./Form";
import { Answer } from "./Answer";
import { User } from "./User";

User.hasMany(FormSubmission)
FormSubmission.belongsTo(User)

Form.hasMany(Question)
Question.belongsTo(Form)

QuestionCategory.hasMany(Question, {
  as: "questions",
  foreignKey: "questionCategoryId",
})
Question.belongsTo(QuestionCategory)

Question.hasOne(Answer)
Answer.belongsTo(Question)

FormSubmission.hasMany(Answer)
Answer.belongsTo(FormSubmission)



export { User, FormSubmission, Form, Question, QuestionCategory, Answer};
