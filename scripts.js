let list =
    //JSON.parse(localStorage.getItem('list'))
    [
        {
            id: 'id1',
            title: 'Learn JS',
            done: true,
        },
        {
            id: 'id2',
            title: 'Learn React',
            done: false,
        },
        {
            id: 'id3',
            title: 'Get a job!',
            done: false,
        },
    ];
const listElement = document.getElementById('list');
const todoInput = document.getElementById('todoInput')

function render() {
    listElement.innerHTML = null;
    list.forEach(el => {
        const listItem = document.createElement('li');
        listItem.setAttribute('class', el.done ? 'done' : 'progress');
        const listItemText = document.createTextNode(el.title);
        listItem.appendChild(listItemText);

        const buttonItem = document.createElement('button');
        buttonItem.setAttribute('id', el.id)
        const buttonItemText = document.createTextNode('Done');
        buttonItem.appendChild(buttonItemText);

        const buttonDelete = document.createElement('button');
        buttonDelete.setAttribute('id', el.id)
        const buttonDeleteText = document.createTextNode('Delete');
        buttonDelete.appendChild(buttonDeleteText);


        listItem.appendChild(buttonItem);
        listItem.appendChild(buttonDelete);

        // buttonDelete.addEventListener('click', (event) => {
        //     if (event.target.nodeName === 'BUTTON') {
        //         const title = event.target.title
        //         for (let i = 0; i < list.length; i++) {
        //             if (list[i].title === title) list[i].title = ''
        //         }
        //         //updateLocalStorage()
        //         render();
        //     }
        // })

        buttonDelete.addEventListener('click', (event) => {
            console.log(event.target.id)
            list = list.filter(el => el.id !== event.target.id)
            render();
        })

        buttonItem.addEventListener('click', (event) => {
            if (event.target.nodeName === 'BUTTON') {
                const id = event.target.id
                for (let i = 0; i < list.length; i++) {
                    if (list[i].id === id) list[i].done = !list[i].done;
                }
                // updateLocalStorage()
                render();
            }
        })
        listElement.appendChild(listItem);
    });
}

render();

function addToList() {
    const todoInputValue = todoInput.value;
    list.push({
        id: Math.random().toString(),
        title: todoInputValue,
        done: false
    })

    render();
    todoInput.value = '';
}

// function updateLocalStorage() {
//     localStorage.setItem('list', JSON.stringify(list));
// }