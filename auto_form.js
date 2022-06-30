function change_select() {
    //On commence par cacher tout les champs select
    document.getElementById("select_app").style.display="none"
    document.getElementById("select_for").style.display="none"
    document.getElementById("select_lex").style.display="none"
    document.getElementById("select_lex").style.display="none"
    document.getElementById("select_lie").style.display="none"
    document.getElementById("select_pro").style.display="none"
    document.getElementById("select_con").style.display="none"
    document.getElementById("select_aut").style.display="none"

    //On choisi le module
    const selMod = document.getElementById("select_module")

    //On affiche le champs select associé au module
    switch (selMod.value) {
        case '1':
            document.getElementById("select_app").style.display="block"; break
        case '2':
            document.getElementById("select_for").style.display="block"; break
        case '3':
            document.getElementById("select_lex").style.display="block"; break
        case '4':
            document.getElementById("select_lie").style.display="block"; break
        case '5':
            document.getElementById("select_pro").style.display="block"; break
        case '6':
            document.getElementById("select_con").style.display="block"; break
        case '7':
            document.getElementById("select_aut").style.display="block"; break
        default:
            console.log(`Merci de choisir un module !`)
        }
}