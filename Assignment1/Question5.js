function Mixup(a,b){
    firstA= a.slice(0,2)
    console.log()
    lastA= a.slice(2,a.length)
    firstB=b.slice(0,2)
    lastB=b.slice(2,b.length)

    console.log("The Words "+a+" and "+b+" when Mixed Up are " +firstB+lastA+ " " +firstA+lastB)
    
}
Mixup('mix','pod');



