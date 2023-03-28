// Using the fetch() API
function exp1() {
    const fetchPromise = fetch('https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json');
    
    console.log(fetchPromise);
    
    fetchPromise.then((response) => {
      console.log(`Received response: ${response.status}`);
    });
    
    console.log("Started request…");
}
document.getElementById('code1').addEventListener('click', exp1);

// Chaining Promises
function exp2() {
    const fetchPromise = fetch('https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json');

    fetchPromise.then((response) => {
    const jsonPromise = response.json();
    jsonPromise.then((data) => {
    console.log(data[0].name);
  });
});
}

document.getElementById('code2').addEventListener('click', exp2);

function exp3() {
    async function fetchProducts() {
        try {
          const response = await fetch('https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json');
          if (!response.ok) {
            throw new Error(`HTTP error: ${response.status}`);
          }
          const data = await response.json();
          return data;
        }
        catch (error) {
          console.error(`Could not get products: ${error}`);
        }
      }
      
      const promise = fetchProducts();
      promise.then((data) => console.log(data[0].name));
}

document.getElementById('code3').addEventListener('click', exp3);
