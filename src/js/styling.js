/**
 * Styling options
 */

export const weekEndColor = (config) => {
    let colGroup = document.querySelector('.weekend');
    colGroup.style.background = config.weekEndColor;
}

export const disabledColor = (config) => {
    if(config.disabledColor != "default"){
        let disabledElements = document.getElementsByClassName('disabled');
        for(let i = 0; i < disabledElements.length; i++){
            disabledElements[i].style.background = config.disabledColor;
        }
    }
}