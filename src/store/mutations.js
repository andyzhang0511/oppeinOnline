export default {
    // stateee指的是上面的state
    changeCityyy(stateee,cityyy){
        stateee.city = cityyy
        try{
            localStorage.city = cityyy
        }catch(e){}
    }
}