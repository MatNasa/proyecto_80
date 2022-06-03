lista_de_invitados_array=[];

function submit() {
    var nombre_1=document.getElementById("nombre_invitado_1").value;
    var nombre_2=document.getElementById("nombre_invitado_2").value;
    var nombre_3=document.getElementById("nombre_invitado_3").value;
    var nombre_4=document.getElementById("nombre_invitado_4").value;

lista_de_invitados_array.push(nombre_1);
lista_de_invitados_array.push(nombre_2);
lista_de_invitados_array.push(nombre_3);
lista_de_invitados_array.push(nombre_4);

console.log(lista_de_invitados_array);

document.getElementById("ver_nombre").innerHTML=lista_de_invitados_array;

document.getElementById("boton_enviar").style.display="none";

document.getElementById("boton_ordenar").style.display="inline-block";
}
 
function sorting(){

    lista_de_invitados_array.sort();

    console.log(lista_de_invitados_array);
    
    document.getElementById("ver_nombre").innerHTML=lista_de_invitados_array;

}