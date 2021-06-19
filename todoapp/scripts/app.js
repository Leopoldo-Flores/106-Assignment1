
function saveTodo(){
    let text = $("#txtTodo").val();
    //validations
    console.log(text);
    if(text.length == 0){
        alert("Error: You must enter something");
        return; //get out of the function, do not continue
    }
    let syntax = "<div class='todo-item'>" + text + "<buttion class='btn btn-sm btn-danger'>🗑️</button></div>";
    $("#todoContainer").append(syntax);

    //clear the text
    $("#txtTodo").val('');
    $("#txtTodo").focus();
}

function init(){
    console.log("Todo app");
    //load data

    //hook events
    $("#btnSave").click(saveTodo);
    $("#txtTodo").keypress(function(args){
        if(args.key == "Enter"){
            saveTodo();
        }
    });

    $("#todoContainer").on('click', '.btn-danger', function(){
        console.log("Removing item");
        $(this).remove(); //jquery parent
    });
}


window.onload = init;