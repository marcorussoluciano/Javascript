function choose (){
    
    let gap = 'Es una rutina de ejercicios GAP se centra en trabajar los glúteos, abdominales y piernas en un mismo entrenamiento, que puede estar destinado a la quema de grasa corporal o a la tonificación muscular';

    let funcional = 'Es un tipo de ejercicio que se parece a los movimientos que haces en tu vida diaria. Puede ser útil para el rendimiento deportivo, la prevención de lesiones y otras tareas físicas en la vida cotidiana';

    let crossfit = 'Es una actividad de alta intensidad que aúna ejercicios de fuerza y cardio. Todo ello trabajando tanto con el peso del propio cuerpo como con pesas';

    let gym = 'Trata de hacer ejercicios de fortalecimiento muscular de todos los grupos musculares principales al menos dos veces por semana. La mayoría de los gimnasios ofrecen muchas máquinas de resistencia, pesas libres y otros aparatos de fortalecimiento muscular';

    let pilates = 'Tiene como objetivo fortalecer el cuerpo y la mente desde la parte más profunda a la más superficial, aumentando y uniendo el dinamismo y la fuerza muscular con el control mental, la relajación y la respiración. Es una disciplina que combina técnicas de gimnasia, ballet y yoga';
    
    let option;
    
    
    do{
        option = prompt('Si queres saber sobre 1) GAP 2) Funcional 3) Crossfit 4) Gym 5) Pilates \n Ingresar 1, 2, 3, 4 o 5 para continuar \n Ingresar 99 para salir');

        if((option > 5 || option <= 0) && option != 99){
            alert('Opcion no valida, ingrese 1, 2, 3, 4 o 5 para continuar')
        }
        if(option == 1){
            alert(`GAP: ${gap}`)
        }
        else if(option == 2){
            alert(`FUNCIONAL: ${funcional}`)
        }
        else if(option == 3){
            alert(`CROSSFIT: ${crossfit}`)
        }
        else if(option == 4){
            alert(`GYM: ${gym}`)
        }
        else if(option == 5){
            alert(`PILATES: ${pilates}`)
        }
        
    }
    while (option != '99') 
    
}
choose();