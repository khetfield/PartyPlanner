async function getAllEvents() {
    const response = await fetch("https://fsa-crud-2aa9294fe819.herokuapp.com/api/2404-FTB-ET-WEB-FT/events");
    return await response.json();
}
        getAllEvents().then((response)=> {
            response.data.forEach(item => {
                createEvent(item);
            });
        })

function createEvent(info) {
    const results = document.getElementById('results');
    const rowEle = document.createElement("div");
        const nameEle = document.createElement("h1");
        const descriptionEle = document.createElement("p");
        const dateTimeEle = document.createElement("p");
        const locationEle = document.createElement("p");
        const buttonEle = document.createElement("button");
            buttonEle.textContent="Delete event";
            buttonEle.id="deleteButton";    
    
    results.appendChild(rowEle);
        rowEle.appendChild(nameEle);
        rowEle.appendChild(descriptionEle);
        rowEle.appendChild(dateTimeEle);
        rowEle.appendChild(locationEle);
        rowEle.appendChild(buttonEle);

        nameEle.innerHTML=info.name;
        descriptionEle.innerHTML=info.description;
        dateTimeEle.innerHTML=info.date;
        locationEle.innerHTML=info.location;

        rowEle.style.border="1px solid black";
        rowEle.style.margin="5px";
        rowEle.style.padding="5px";
        rowEle.style.boxSizing="border-box";
}

async function addEvent(){
        document.getElementById("addEventButton").addEventListener("click", ()=> {
            const nameVal = document.getElementById("name").value;
            const descriptionVal = document.getElementById("description").value;
            const dateTimeVal = document.getElementById("dateTime").value;
            const locationVal = document.getElementById("location").value;

            async function addCharacter(){
                const response = await fetch("https://fsa-crud-2aa9294fe819.herokuapp.com/api/2404-FTB-ET-WEB-FT/events",{
                    method:"POST",
                    body: JSON.stringify({
                        name:nameVal,
                        description:descriptionVal,
                        date:dateTimeVal,
                        location:locationVal,
                        })
                });

                return response
            }
            addCharacter()
        })
    }
       