const statusRef = document.querySelector(".status");

function getSubscriptionStatus() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("VIP");
    }, 2000);
  });
}

/*getSubscriptionStatus().then((response) => console.log(response));
async function main() {
  console.log(getSubscriptionStatus());
} */

/**
 * 1. Create a function called 'getVideo'
 * 2. Accept a parameter called 'subscriptionStatus'
 * 3 Return a new Promis inside of the function that:
 *  -if "VIP" resolve("show video")
 *  -if "FREE" resolve("show trailer")
 *  -otherwise reject("no video")
 * 4. console.log the result of getVideo(status) in main()
 *
 */

function getVideo(subscriptionStatus) {
  return new Promise((resolve, reject) => {
    if (subscriptionStatus === "VIP") {
      resolve("show video")
    } else if (subscriptionStatus === "FREE") {
      resolve("show trailer")
    } else {
      reject("no video")
    }
  });
}

async function main() {
  const status = await getSubscriptionStatus();
  statusRef.innerHTML = status;
  console.log(getVideo(status));
}

main();
