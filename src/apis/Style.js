
export function setBanner(id) {
    try {

        
        let target=document.getElementById(id)
    target.style.background='#101010'
    target.children[0].style.color='#ef4f80'

    console.dir(target)

    } catch (error) {
    console.log(error)    
    }


}
export function setShape(bool,event){
    if(bool){
        event.target.style.transform='rotate(0deg)'
    }
    else{
        event.target.style.transform='rotate(91deg)'
    }

}