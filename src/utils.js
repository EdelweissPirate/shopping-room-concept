export const handleFadeOut = (component, callback, navTo) => {
    if(component){
        component.classList.remove('fade-in')
        component.classList.add('fade-out')

        if(callback){
            setTimeout(() => {
                callback(navTo)
            }, 1000)
        }
    }
}

export const switchClass = (component, newClass, callback, navTo) => {
    if(component){
        component.classList = ''
        
        if(newClass) component.classList = newClass

        if(callback){
            setTimeout(() => {
                callback(navTo)
            }, 1000)
        }
    }
}

export const hideMarkers = (hiding) => {
    const markers = document.querySelectorAll('.object-html-marker')

    markers.forEach(item => {
        item.classList.remove(hiding ? 'fade-in' : 'fade-out')
        item.classList.add(hiding ? 'fade-out' : 'fade-in')
    })
}