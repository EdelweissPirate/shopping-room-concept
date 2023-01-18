//Set Room
const setRoom = async (arg) => {
    if(typeof arg !== 'string') return null
    
    return arg
}

const setViewer = async (arg) => {
    if(typeof arg !== 'string') return null
    
    return arg
}

const setItem = async (arg) => {
    if(typeof arg !== 'string') return null

    return arg
}

const dataService = {
    setRoom,
    setViewer,
    setItem
}

export default dataService