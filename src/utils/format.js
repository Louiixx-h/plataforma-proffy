const subjects = [
    'Artes',
    'Biologia',
    'Ciências',
    'Educação-Física',
    'Física',
    'Geografia',
    'História',
    'Matemática',
    'Português',
    'Química',
    'Higiene e Segurança'
];
const weekdays = [
    'Domingo',
    'Segunda-feira',
    'Terça-feira',
    'Quarta-feira',
    'Quinta-feira',
    'Sexta-feira',
    'Sábado',
];

function convertHoursToTime(time){
    const [hour, minutes] = time.split(":");
    let hora= Number((hour * 60) + minutes);
    return hora;
}

function getSubject(subjectNumber){
    const position = +subjectNumber - 1;
    return subjects[position];
}

module.exports = { subjects, weekdays, getSubject, convertHoursToTime };