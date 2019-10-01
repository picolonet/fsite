
let rrwebInstance = undefined;

function loadJSON(callback) {   

    var xobj = new XMLHttpRequest();
        xobj.overrideMimeType("application/json");
    xobj.open('GET', 'g1.json', true); // Replace 'my_data' with the path to your file
    xobj.onreadystatechange = function () {
          if (xobj.readyState == 4 && xobj.status == "200") {
            // Required use of an anonymous callback as .open will NOT return a value but simply returns undefined in asynchronous mode
            callback(xobj.responseText);
          }
    };
    xobj.send(null);  
 }
 
let events = []
function playEvents() {
    if (!rrwebInstance) {
        rrwebInstance = new rrwebPlayer({
            target: document.body,
            data: {
                events: events,
                autoPlay: true
            }
        });
    }
}

function onload() {
    let outerArray = undefined;
    loadJSON(function (response) {
        // Parse JSON string into object
        outerArray = JSON.parse(response);
        outerArray.array.forEach(element => {
            jsObject = JSON.parse(element);
            console.log("Message type: " + jsObject.type);
            console.log("Message length: " + jsObject.length);
            console.log("Events list: " + jsObject.events);
            events.push.apply(events, jsObject.events);
        });
        playEvents();
    });

}

document.addEventListener("DOMContentLoaded", function(){
    // Handler when the DOM is fully loaded
    onload();
  });
