      
        const inputField = document.getElementById('itemInput');
        const addButton = document.getElementById('addItemButton');
        const itemList = document.getElementById('itemList');

        function addItem() {
            const inputValue = inputField.value;

            if (inputValue.trim() !== '') {
    
                const li = document.createElement('li');
                li.textContent = inputValue;

                itemList.appendChild(li);

                
                inputField.value = '';
            }
        }

      
        addButton.addEventListener('click', addItem);

        
        inputField.addEventListener('keypress', function(event) {
            if (event.key === 'Enter') {
                addItem();
            }
        });
