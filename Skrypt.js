const deleteB = document.getElementById('delete');

    if (deleteB) {
        deleteB.addEventListener('click', function() {
            const card = this.closest('.card');
            
            if (card) {
                card.remove();
            }
        });
    }