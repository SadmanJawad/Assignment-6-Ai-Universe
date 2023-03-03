
const loadTools = async (dataLimit) => {
    const url = `https://openapi.programming-hero.com/api/ai/tools`
    const res = await fetch(url);
    const data = await res.json();
    displayTools(data.data.tools, dataLimit);

}

const displayTools = (tools, dataLimit) => {
    // console.log(tools)
    const toolsContainer = document.getElementById('tools-container');
    toolsContainer.innerHTML = '';

    // display 6  tool card only
    const showAll = document.getElementById('show-all');
    if (dataLimit && tools.length > 6) {
        tools = tools.slice(0, 6);
        showAll.classList.remove('hidden');
    }
    else {
        showAll.classList.add('hidden');
    }

    // display data
    tools.forEach(tool => {
        const toolDiv = document.createElement('div');
        toolDiv.classList.add('col');
        toolDiv.innerHTML = `
        <div class="card my-3">
        <img src="${tool.image}" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title font-bold">Feature</h5>
          <p class="card-text">1. ${tool.features[0]}</p>
          <p class="card-text">2. ${tool.features[1]}</p>
          <p class="card-text">3. ${tool.features[2]}</p>
        </div>
        <hr>
        <h4>${tool.name}</h4>
        <div class="d-flex justify-content-between px-2">
        <p><i class="fa-regular fa-calendar"></i> ${tool.published_in}</p>

        <button class="btn btn-outline-danger border-0"><i class="fa-solid fa-arrow-right"></i></button>
        </div>
      </div>
        `;
        // console.log(tool)
        toolsContainer.appendChild(toolDiv);
    });
    
    // spinner or loader
const toggleSpinner = isLoading => {
    const loaderSection = document.getElementById('loader');
    if (isLoading) {
        loaderSection.classList.remove('hidden');
    }
    else {
        loaderSection.classList.add('hidden');
    }
}

    // Add event listener to Sort by Date button (bonus)
    //    
    // 
    // 

    // stop loader / spinner
    toggleSpinner(false)
}

// shortcut function
const processSearch = (dataLimit) => {
    loadTools(dataLimit);
    toggleSpinner(true);
}

// handle see more button click
document.getElementById('btn-show-all').addEventListener('click', function () {
    processSearch();
    // start loader / spinner
    toggleSpinner(true);
})


processSearch(6);
