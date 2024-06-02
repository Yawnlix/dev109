var item1 = document.getElementById('item1');
var item2 = document.getElementById('item2');
var item3 = document.getElementById('item3');
var item4 = document.getElementById('item4');
var item5 = document.getElementById('item5');

var areaCar = document.getElementById('car');
var areaDinosaur = document.getElementById('dinosaur');
var areaMickey = document.getElementById('mickey');
var areaLadyBug = document.getElementById('ladyBug');
var areaSkeleton = document.getElementById('skeleton');

var replayBtn = document.getElementById('replay-btn');

function foundItem(item) {
  if (item) {
    item.style.textDecoration = "line-through";
    checkAllFound();
  } else {
    console.error("Item not found!");
  }
}

function onClickArea(event) {
  var areaId = event.target.id;
  let itemId;
  switch(areaId) {
    case 'car':
      itemId = 'item1';
      break;
    case 'dinosaur':
      itemId = 'item2';
      break;
    case 'mickey':
      itemId = 'item3';
      break;
    case 'ladyBug':
      itemId = 'item4';
      break;
    case 'skeleton':
      itemId = 'item5';
      break;
    default:
      console.error("Unknown area ID:", areaId);
      return;
  }
  var item = document.getElementById(itemId);
  console.log('Clicked area:', areaId); // Log clicked area ID
  console.log('Mapped to item:', itemId); // Log the item ID it maps to
  foundItem(item);
}

function checkAllFound() {
  if (
    item1.style.textDecoration === "line-through" &&
    item2.style.textDecoration === "line-through" &&
    item3.style.textDecoration === "line-through" &&
    item4.style.textDecoration === "line-through" &&
    item5.style.textDecoration === "line-through"
  ) {
      replayBtn.style.display = 'block';
    }
}

function replay() {
  location.reload();
}

areaCar.addEventListener('click', onClickArea);
areaDinosaur.addEventListener('click', onClickArea);
areaMickey.addEventListener('click', onClickArea);
areaLadyBug.addEventListener('click', onClickArea);
areaSkeleton.addEventListener('click', onClickArea);

checkAllFound()
