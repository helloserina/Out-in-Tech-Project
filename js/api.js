window.addEventListener('DOMContentLoaded', init);

async function init() {

  const apiType="topic"
  const lang="en"
  console.log("attmepting DHS")
    var tbodies = document.querySelectorAll('tbody[data-api-type][data-api-lang]'), t=0;
    function getContent () {
      var tbody = tbodies[t];
      var xhr = new XMLHttpRequest();
      var url= "https://health.gov/myhealthfinder/api/v3/itemlist.json?lang=en"
      xhr.open("GET", url);
      xhr.send();
      console.log("got?")
      xhr.onload = function() {
        var tr, td;
        var response = JSON.parse(xhr.response);
        response.Result.Items.Item.forEach(function(item) {
          console.log(item.Id + item.Title)
          tr = document.createElement("tr");
          td = document.createElement("td");
          td.innerHTML = item.Id;
          tr.appendChild(td);
          td = document.createElement("td");
          td.innerHTML = item.Title;
          tr.appendChild(td);
          tbody.appendChild(tr);
          td.addEventListener('click', getSpecificTopic)
        });
      };
    };
    getContent();
  }

async function getSpecificTopic() {
  
}