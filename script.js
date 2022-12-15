// 1) Ajouter des tâches
// 2) Supprimer des tâches
// BONUS
// 3) A l'ajout de tache le input doit se remettre a vide 
// 4) Les tâches sont sauvegardées dans le localStorage 
// 5) Les tâches peuvent être cochées (checkbox) pour être indiquées comme faites
// 6 ) Il est possible de créer plusieurs listes de task. A chaque ajout de task l'utilisateur devra choisir sur quelle liste il ajoute sa task (à l'aide d'un select)

document.addEventListener('DOMContentLoaded', function() {
    let text = null;
    const check = document.getElementById('check');
    let task = [{titre: '', id: 0}]
    
    ///// FUNCTION ADD TEXT TO DOM
    const addTaskToDom = (element) => {
        const container = document.getElementById('container');
        container.append(element);
    }
    
    ///// FUNCTION CLICK ADD TEXT TO DOM
    check.addEventListener('click', () => {
        const div = document.createElement('div');
        div.classList.add('container');
        text = document.getElementById('text').value;
        div.innerHTML = `<li>${text}</li>`;
        if(text.length > 0) {
            addTaskToDom(div);
        } else if(text.length <= 0) {
            alert('T\'ajoutes quoi gros génie ?');
        }
    }) 
});