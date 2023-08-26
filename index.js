async function getData(url) {
    const response = await fetch(url);
    return response.json();
}
  
const data = await getData("data.json");


for (let i = 0; i < data.length; i++) {
    let dayName = data[i].day;
    let dayAmountData = data[i].amount;
    let dayAmountElement = document.getElementById(dayName + "-amount");
    let dayChartElement = document.getElementById(dayName + "-chart");


    dayAmountElement.innerHTML = "$" + dayAmountData;
    dayChartElement.style.height = dayAmountData + 40 + "px";

    dayChartElement.addEventListener("mouseover", ()=>{
        dayAmountElement.classList.remove("hidden");
    })

    dayChartElement.addEventListener("mouseout", ()=>{
        dayAmountElement.classList.add("hidden");
    })
}

