function submit(){
    let a=String(document.getElementById("name").value);
    let b=String(document.getElementById("ID").value);
    let c=String(document.getElementById("units").value);

    if(a==""){
        alert('Name must be filled');
        return false;
    }
    if(b==""){
        alert('ID must be filled');
        return false;
    }
    if(c==""){
        alert('Enter No.of.Units');
        return false;
    }
    if(c<=100){
        let units=c*2.5;
        document.getElementById('output').innerHTML="Rs." + units+"/-";
    }
    if(c>100 && c<=200){
        let units=c*4.5;
        document.getElementById('output').innerHTML="Rs." + units+"/-";
    }
    if(c>200 && c<=300){
        let units=c*6.5;
        document.getElementById('output').innerHTML="Rs." + units+"/-";
    }
    if(c>300 && c<=400){
        let units=c*8.5;
        document.getElementById('output').innerHTML="Rs." + units+"/-";
    }
    
}