
document.addEventListener("DOMContentLoaded", () => {
  console.log("MorisEarn app loaded!");

  const jobs = [
    { title: "Delivery Service", pay: 500 },
    { title: "House Cleaning", pay: 800 },
    { title: "Gardening", pay: 600 }
  ];

  const jobsList = document.getElementById("jobsList");

  if (jobsList) {
    jobs.forEach(job => {
      const item = document.createElement("div");
      item.className = "job-card";

      const title = document.createElement("h3");
      title.textContent = job.title;

      const pay = document.createElement("p");
      pay.textContent = `Rs ${job.pay}`;

      item.append(title, pay);
      jobsList.appendChild(item);
    });
  }
});
