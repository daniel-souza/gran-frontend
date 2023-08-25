import { v4 as uuidv4 } from "uuid";
import bcrypt from 'bcrypt';
import fs from 'fs';

const names = [
  "João",
  "Maria",
  "José",
  "Ana",
  "Pedro",
  "Cláudia",
  "Carlos",
  "Márcia",
  "Fernando",
  "Mariana",
  "Miguel",
  "Amanda",
  "Rafael",
  "Juliana",
  "Gustavo",
  "Patrícia",
  "Lucas",
  "Camila",
  "Luiz",
  "Letícia",
  "Bruno",
  "Larissa",
  "Eduardo",
  "Vanessa",
  "Gabriel",
  "Carolina",
  "Antônio",
  "Bianca",
  "Rodrigo",
  "Vivian",
  "Diego",
  "Fernanda",
];

const emails = [
  "@gmail.com",
  "@hotmail.com",
  "@outlook.com",
  "@yahoo.com",
  "@uol.com.br",
  "@bol.com.br",
  "@ig.com.br",
  "@globomail.com",
  "@zipmail.com.br",
  "@r7.com",
  "@terra.com.br",
  "@globo.com",
  "@pop.com.br",
  "@itelefonica.com.br",
  "@itelefonica.com",
  "@oi.com.br",
  "@superig.com.br",
  "@superig.com",
  "@msn.com",
  "@live.com",
  "@live.com.br",
  "@oi.com",
  "@yahoo.com.br",
  "@yahoo.com",
  "@ymail.com",
  "@me.com",
  "@mac.com",
];

const descriptions = [
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. Nullam euismod, nisl vitae aliquam ultricies, nunc nisl ultricies nunc, vitae aliquam nis",
];

const status = [
  "completa",
  "em andamento",
  "a fazer"
];

const tarefas = [
  "Estudar React",
  "Estudar Node",
  "Estudar MongoDB",
  "Estudar MySQL",
  "Estudar PHP",
  "Estudar Java",
  "Estudar Python",
  "Estudar C#",
  "Estudar C++",
  "Estudar C",
  "Estudar JavaScript",
  "Estudar HTML",
  "Estudar CSS",
  "Estudar TypeScript",
  "Estudar Angular",
  "Estudar Vue",
  "Estudar Flutter",
  "Estudar Kotlin",
  "Estudar Swift",
  "Estudar Go",
  "Estudar Ruby",
  "Estudar Rust",
];
  


const mock = {
  users: [],
  tasks: [],
};

function generateTask(user) {
  const task = {
    id: uuidv4(),
    title: tarefas[Math.floor(Math.random() * tarefas.length)],
    description: descriptions[0],
    status: status[Math.floor(Math.random() * status.length)],
    user_id: user.id,
  };
  if(mock.tasks
      .filter(t => t.user_id === user.id)
      .find(t => t.title === task.title) === undefined) {
    return mock.tasks.push(task);
  }
  console.log(task);
  return false;
}

function generateUsers(length = 100) {
  for (let i = 0; i < length; i++) {
    console.log("i:",i);
    const name = names[Math.floor(Math.random() * names.length)];
    const email = name.toLowerCase() + emails[Math.floor(Math.random() * emails.length)];
    const user = {
      id: uuidv4(),
      name,
      email,
      password: bcrypt.hashSync("123456", 10),
    };
    if(!mock.users.find(u => u.email === user.email)) {
      mock.users.push(user);
      for(let j = 0; j < 10; j++) {
        console.log("j:",j);
        if(generateTask(user) === false) j--;
      }
    } else i--;
  }
}

generateUsers(50);
console.log(mock);

function saveMock() {
  // pretty JSON output
  fs.writeFile("./src/api/database/mock.json", JSON.stringify(mock, null, 2), function(err) {
    if(err) {
        return console.log(err);
    }
    console.log("The file was saved!");
  });
}

saveMock();



export default mock;