use Script
function plural(noun,number){
    if(num>1){
        switch(noun){
            case 'woman';
            return num+" "+'women';
            case 'person';
            return num + " " +'people';
            case "dog";
            return num+ " "+ 'dogs';
        
        }
    }
}