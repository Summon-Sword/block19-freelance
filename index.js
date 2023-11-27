/* State */
const freelancers = [
    { name: "Alice", occupation: "Writer", price: 30 },
    { name: "Bob", occupation: "Teacher", price: 50 },
    // Initially, Carol is not on the list
  ];
  let averagePrice = calculateAveragePrice(freelancers);
  
  // Update the list and the average price every few seconds
  const addFreelancerIntervalId = setInterval(addFreelancerAndUpdateAverage, 3000);
  
  render(); // Initial rendering of the state
  
  /* Functions */
  function render() {
    // Render the freelancers list
    const freelancersList = document.querySelector("#freelancersList");
    const freelancerElements = freelancers.map((freelancer) => {
      const element = document.createElement("li");
      element.textContent = `${freelancer.name}, ${freelancer.occupation}, $${freelancer.price}`;
      return element;
    });
    freelancersList.replaceChildren(...freelancerElements);
  
    // Render the average price
    const averagePriceElement = document.querySelector("#averagePrice");
    averagePriceElement.textContent = `The average starting price is $${averagePrice}`;
  }
  
  function addFreelancerAndUpdateAverage() {
    // Add a new freelancer
    const newFreelancer = {
      name: "Carol",
      occupation: "Programmer",
      price: 70,
    };
    freelancers.push(newFreelancer);
  
    // Update the average price
    averagePrice = calculateAveragePrice(freelancers);
  
    render(); // Re-render the updated state
  }
  
  function calculateAveragePrice(freelancersList) {
    const total = freelancersList.reduce((sum, freelancer) => sum + freelancer.price, 0);
    return total / freelancersList.length;
  }
  
  // Stopping the interval after a certain condition could be something like:
  // if (freelancers.length >= maxFreelancers) {
  //   clearInterval(addFreelancerIntervalId);
  // }