// przycisk delete usuwający kartę zadania
const deleteB = document.getElementById('delete');

    if (deleteB) {
        deleteB.addEventListener('click', function() {
            const card = this.closest('.card');
            
            if (card) {
                card.remove();
            }
        });
    }


// obsługa przycisku addtask i dodawania zadania
const dialog = document.getElementById('Addtaskpop');
const openbtn = document.getElementById('openBtn');
const closebtn = document.getElementById('closeBtn');
    if (openbtn && dialog) {
        openbtn.addEventListener('click', () => {
            dialog.showModal();
        });
    }

    if (closebtn && dialog) {
        closebtn.addEventListener('click', () => {
            dialog.close();
        });
    }