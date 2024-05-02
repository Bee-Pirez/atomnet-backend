//Definir as associações dos meus models e tabelas
import { QuestionA } from "./QuestionA";
import { QuestionACategory } from "./QuestionACategory";
import { FormA } from "./FormA";
import { AnswerA } from "./AnswerA";
import { User } from "./User";

QuestionA.hasOne(AnswerA); // Uma pergunta só pode ter uma resposta por formulário
AnswerA.belongsTo(QuestionA); // Uma resposta pertence a uma pergunta


QuestionA.belongsTo(QuestionACategory);
QuestionACategory.hasMany(QuestionA, { as: 'questionsA', foreignKey: 'question_a_category_id' });


FormA.hasMany(AnswerA); // Um FormA pode ter várias AnswerA
AnswerA.belongsTo(FormA); // Uma AnswerA só pode pertencer a um form

export { QuestionA, QuestionACategory, FormA, AnswerA, User };
