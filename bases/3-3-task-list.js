"use strict";

// On définit notre liste de tâches, dans un tableau simple
let list = [
    "écrire plus d'exercices",
    "manger",
    "gouter",
    "petit déjeuner"
];

// On affiche la liste des tâches
// soit directement avec un console.log() qui nous affiche tout,
// soit avec une boucle pour afficher chacun des éléments
function listTasks(tasks) {
    // console.log("Nombre de tâches : " + tasks.length);
    // console.log('liste des tâches :')
    // tasks.forEach(element => {
    //     console.log(element);
    // });
    console.log(tasks);
}

// Ajouter une tâche à la liste
function addTask(tasks, task) {
    // Si la tâche est une chaine de caractère vide
    // on arrête la fonction et on n'ajoute pas la tâche
    if (task.length <= 0) {
        return null;
    }
    // Si la tâche n'est pas déjà dans la liste, on l'ajoute
    if (!searchTask(tasks, task)) {
        tasks.push(task);
    }

    return null;
}

// Vérifie si une tâche est est dans la liste
function searchTask(tasks, task) {
    // return tasks.indexOf(task); // Renvoie -1 si la tâche n'est pas dans la liste, son index, sinon
    return tasks.includes(task.toLowerCase()); // false si la tâche n'est pas dans la liste, true sinon
}

// Retourne l'index de la tache si elle est dans la liste
function searchIndexOfTask(tasks, task) {
    return tasks.indexOf(task); // Renvoie -1 si la tâche n'est pas dans la liste, son index, sinon
}

// Supprimer une tâche de la liste
function deleteTask(tasks, task) {
    // On cherche la tâche et si elle est présente dans la liste (on récupère son index), on la supprime du tableau
    let index = searchIndexOfTask(tasks, task);
    if (index >= 0) {
        tasks.splice(index, 1);
        return true; // Si la suppression a fonctionné, on renvoie true (optionnel)
    }

    return false; // Si la suppression n'a pas fonctionné, on renvoie false (optionnel)
}

// Supprimer tous les éléments de la liste
function deleteAll(tasks) {
    tasks.splice(0, tasks.length);
}

// listTasks(list);
addTask(list, 'dormir');
console.log(searchTask(list, 'dormir'));
deleteTask(list, 'gouter');
listTasks(list);
deleteAll(list);
listTasks(list);

