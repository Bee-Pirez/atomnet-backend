//Definir as associações dos meus models e tabelas
import { QuestionA } from "./QuestionA";
import { QuestionACategory } from "./QuestionACategory";
import { FormA } from "./FormA";
import { AnswerA } from "./AnswerA";
import { User } from "./User";

QuestionA.hasOne(AnswerA); // Uma pergunta só pode ter uma resposta por formulário
AnswerA.belongsTo(QuestionA); // Uma resposta pertence a uma pergunta

QuestionA.belongsTo(QuestionACategory, { foreignKey: 'questionACategoryId' });
QuestionACategory.hasMany(QuestionA, { as: 'questionsA', foreignKey: 'questionACategoryId' });


FormA.hasMany(AnswerA); // Um FormA pode ter várias AnswerA
AnswerA.belongsTo(FormA); // Uma AnswerA só pode pertencer a um form
User.hasOne(FormA)

export { QuestionA, QuestionACategory, FormA, AnswerA, User };
