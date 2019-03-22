
function saveOptions() {
  social=[];
  social["facebook"]=document.getElementById('facebook').value
  social["github"]=document.getElementById('github').value
  social["youtube"]=document.getElementById('youtube').value
  social["twitter"]=document.getElementById('twitter').value
  social["instagram"]=document.getElementById('instagram').value

  //console.log(social);
  alert('1')
  social.forEach(saveData);

}


function saveData(item, index) {

  alert('1')

  key=inde;
  value=item; 

  chrome.storage.sync.set({key:  value}, function() {

    console.log(key,value);
    
  });
  chrome.storage.sync.get(key, function (obj) {
  
    console.log(obj);
  
  });

}

document.getElementById('submit').addEventListener('click',saveOptions);
