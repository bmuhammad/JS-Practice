function getSubscriptionStatus() {

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("VIP")}, 2000);
    
       
    })
}

getSubscriptionStatus().then(response => console.log(response))
async function main (){
console.log(getSubscriptionStatus())

}

main();