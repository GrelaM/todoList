(() => {
	const addBtn = document.getElementById('addBtn');
	const todoDisplay = document.getElementById('todoOrderList');
	const todoInputValue = document.getElementById('todoAddField');

	const todoArray = [];

    const displayTodoList = () => {
        let id = 0;
        const todo = todoArray.map((item) => {
			id = id + 1;
			return `<li id=${id} class="li_tag">${item}</li>`;
		});
		todoDisplay.innerHTML = `<ol id="ol-List" class="ol_tag">${todo.join('')}</ol>`;
    };

	const addTodo = (itemValue) => {
		console.log('Todo Added!');
		todoArray.push(itemValue);
        displayTodoList()
	};

	const deleteTodo = (itemId) => {
		console.log('Todo Deleted!');
		todoArray.splice(itemId - 1, 1);
        displayTodoList()
	};

	const addHandler = () => {
		const todoInput = document.getElementById('todoAddField').value;
		addTodo(todoInput);
		document.getElementById('todoAddField').value = '';
		document.getElementById('addBtn').disabled = true;
	};

	addEventListener('click', (e) => {
		if (e.target.tagName === 'LI') {
			const itemId = e.target.id;
			deleteTodo(itemId);
		}
	});

	todoInputValue.addEventListener('keydown', () => {
		if (document.getElementById('todoAddField').value != '') {
			document.getElementById('addBtn').disabled = false;
		} else {
			document.getElementById('addBtn').disabled = true;
		}
	});
	addBtn.addEventListener('click', addHandler);
	window.addEventListener('keypress', (e) => {
		if (e.key === 'Enter') {
			addHandler();
		}
	});
})();
