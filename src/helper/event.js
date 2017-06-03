export default{
    on(element, event, callback){
        event.split(' ').forEach((event) => {
            element.addEventListener(event, callback);
        });
    },

    off(element, event, callback){
        element.removeEventListener(event, callback);
    },

    trigger(element, event, data = []){
        var evt = document.createEvent('HTMLEvents');
        evt.initEvent(event, true, true);
        evt.data = data;
        return !element.dispatchEvent(evt);
    }
}