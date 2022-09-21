window.addEventListener('load', () => {
    const form = document.querySelector("#new-note-form");
    const input = document.querySelector("#textId");
    const elment_list = document.querySelector("#notes");
    const clear_el =document.querySelector("#clear-all-notes");
    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const note = input.value;
        console.log(form);

        const note_el = document.createElement("div");
        note_el.classList.add("note");

        const note_content_el = document.createElement("div");
        note_content_el.classList.add("content");
        // note_content_el.innerText = note;

        note_el.appendChild(note_content_el);

        const note_input_el = document.createElement("input");
        note_input_el.classList.add("text");
        note_input_el.value = note;
        note_input_el.setAttribute("readonly", "readonly");

        note_content_el.appendChild(note_input_el);

        const note_actions_el = document.createElement("div");
        note_actions_el.classList.add("actions");

        const note_edit_el = document.createElement("button");
        note_edit_el.classList.add("edit");
        note_edit_el.innerHTML = "Edit";


        const note_delete_el = document.createElement("button");
        note_delete_el.classList.add("delete");
        note_delete_el.innerHTML = "Delete";

        note_actions_el.appendChild(note_edit_el);
        note_actions_el.appendChild(note_delete_el);

        note_el.appendChild(note_actions_el);



        elment_list.appendChild(note_el);
        input.value = '';

        note_edit_el.addEventListener('click', () => {
            if (note_edit_el.innerText.toLowerCase() == 'edit') {
                note_input_el.removeAttribute("readonly");
                note_input_el.focus();
                note_edit_el.innerText = "Save";
            }else{
                note_input_el.setAttribute("readonly", "readonly");
                note_edit_el.innerText = "Edit";
            }
        })

        note_delete_el.addEventListener('click',()=>{
            elment_list.removeChild(note_el);
        })
    })
    clear_el.addEventListener("click",(e)=>{
        
        elment_list.replaceChildren('');
        return;
    })

})