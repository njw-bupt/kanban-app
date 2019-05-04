export const getData = (url)=>{
    return new Promise(function(resolve,reject){
        function handler(){
            if(this.readyState!==4){
                return;
            }
            if(this.status===200){
                resolve(this.response);
            }else{
                reject(new Error(this.statusText));
            }
        }
        let xhr = new XMLHttpRequest();
        xhr.open("get",url);
        xhr.onreadystatechange = handler;
        xhr.send();
    })
}